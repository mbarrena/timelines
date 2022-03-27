import pandas as pd
import unicodedata
import subprocess
import re
import argparse

def strip_accents(text):
    try:
        text = unicode(text, 'utf-8')
    except (TypeError, NameError): # unicode is a default on python 3 
        pass
    text = unicodedata.normalize('NFD', text)
    text = text.encode('ascii', 'ignore')
    text = text.decode("utf-8")
    return str(text)

def sanitize_name(text):
    return strip_accents((text.strip().replace(" ", "_").replace("(","").replace(")","")).lower()).replace('&#34;','').replace('"','')

def quote(text):
    return '"'+text+'"'

def unquote(text):
    if(text[0]=='"' and text[-1]=='"'):
        return text[1:][:-1]
    return text

def get_numeric_input(msg):
    var_input = input("{}: ".format(msg))
    while not re.match("\d+",var_input):
        print ("Error! El orden debe ser un número")
        var_input = input("{}: ".format(msg))

class CsvEvent:
    IDN_SIZE = 35
    order_col = 0
    handin_col = 1 #Mes y año en que fue entregada la tarea
    event_col = 2
    unit_col = 3
    start_ac_col = 4
    start_y_col = 5
    start_m_col = 6
    start_d_col = 7
    end_ac_col = 8
    end_y_col = 9
    end_m_col = 10
    end_d_col = 11
    classic_col = 12
    tourism_col = 13
    preexist_col = 14
    rawdate_col = 15
    link1_col = 16
    link2_col = 17
    link3_col = 18
    link4_col = 19
    link5_col = 20
    notes_col = 21

    def __init__(self, event):
        self.idn = sanitize_name(event[self.event_col])[:self.IDN_SIZE]
        # Identify type of timeline event (general information (logo_info) vs tourist information (logo_tour))
        self.type = "turismo" if( not pd.isnull(event[self.tourism_col]) ) else "informacion"
        self.__links = self._getCsvEventLinks(event)
        self.unit = event[self.unit_col]
        self.name = event[self.event_col].replace("&#34;", '\\"').replace('"','\\"')
        self.img = quote('../img/'+self.type+'.svg')
        self._parseStartDate(event)
        self._parseEndDate(event)
    
    def toTimelineEvent(self):
        content = "\"{}: {}\", image: {}".format(self.__rawStartDate, self.name, self.img)
            
        if(len(self.__links)>1):
            #if there is multiple links, pass list of links (they're displayed differently than a single link)
            content += ", links:" + str(self.__links)
        elif(len(self.__links)==1):
            #if there is only one link, pass single link
            content += ", link:" + self.__links[0]
        
        res = "{id: {}, content: {}, start: {}".format(quote(self.idn), content, self.__startDate)
        if(self.__endDate is not None):
            res += ", end: " + self.__endDate
        res += "}"
        
        return res

    def tryConvertToTimelineEvent(self):
        try:
            return self.toTimelineEvent()
            # If exception is raised, no return
        except Exception as ex:
            print('[!!!] {}: {}'.format(ex, self.name))

    def _getCsvEventLinks(self, event):
        links = []
        for i in range(self.link1_col,self.notes_col):
            if( not pd.isnull(event[i]) ):
                links.append(quote(event[i]))

        return links

    def _parseStartDate(self, event):
        if(pd.isnull(event[self.start_y_col])): #No start year (invalid)
            raise Exception("No start date specified for event")

        if( pd.isnull(event[self.start_ac_col]) ):
            # Not a b.C. date
            if(pd.isnull(event[self.start_m_col])): #No month or day specified
                self.__rawStartDate="{}".format(int(event[self.start_y_col]))
            elif(pd.isnull(event[self.start_d_col])): #No day specified
                self.__rawStartDate="{}-{}".format(int(event[self.start_y_col]),int(event[self.start_m_col]))
            else: #Full date specified
                self.__rawStartDate="{}-{}-{}".format(int(event[self.start_y_col]),int(event[self.start_m_col]),int(event[self.start_d_col]))
            self.__startDate=quote(self.__rawStartDate)

        else:
            self.__rawStartDate = "-{},1,1".format(int(event[self.start_y_col]))
            self.__startDate="new Date({})".format(self.__rawStartDate)

    def _parseEndDate(self, event):
        if(pd.isnull(event[self.end_y_col])): #No end year (no end date specified, valid)
            self.__rawEndDate = None
            self.__endDate = None

        if( pd.isnull(event[self.end_ac_col]) ):
            # Not a b.C. date
            if (pd.isnull(event[self.end_m_col])): #No month or day specified
                self.__rawEndDate="{}".format(int(event[self.end_y_col]))
            elif(pd.isnull(event[self.end_d_col])): #No day specified
                self.__rawEndDate="{}-{}".format(int(event[self.end_y_col]),int(event[self.end_m_col]))
            else: #Full date specified
                self.__rawEndDate="{}-{}-{}".format(int(event[self.end_y_col]),int(event[self.end_m_col]),int(event[self.end_d_col]))
            self.__endDate=quote(self.__rawEndDate)
        
        else:
            #b.C. date
            self.__rawEndDate = "-{},1,1".format(int(event[self.end_y_col]))
            self.__endDate= "new Date({})".format(self.__rawEndDate)

    @property
    def links(self):
        return self.__links
    @links.setter
    def links(self, links):
        self.__links = links
    @property
    def startDate(self):
        return self.__rawStartDate
    @property
    def endDate(self):
        return self.__rawEndDate

class EventsCsvParser:
    eventLinks = {}
    __duplicatesToIgnore = {}

    def __init__(self, df, startOrder, endOrder):
        self.df = df[(df.iloc[:,CsvEvent.order_col]>=int(startOrder)) & (df.iloc[:,CsvEvent.order_col]<=int(endOrder))]
    
    def getEventsAndUnits(self):
        self._parseLinks()
        
        events = self.df.copy().apply( lambda x: self._createEventIfNotDuplicate(x), axis=1)
        unidad = self.df.copy().apply( lambda x: CsvEvent(x).unit, axis=1)

        eventsAndUnits = pd.DataFrame({ 'Event': events, 'Unit': unidad })
        eventsAndUnits.dropna(inplace=True)  #drop events that failed or were duplicate

        return eventsAndUnits
    
    def testCsvCompatibility(self):
        self.print_expected_csv_help()
        test_event = CsvEvent(self.df.iloc[0])
        print("Identificator size is:",CsvEvent.IDN_SIZE)
        print("Test event:")
        print(self.df.iloc[0])
        print("")

        print("ID:",test_event.idn)
        print("Links:",test_event.link)
        print("Type:",test_event.type)
        print("Start date:",test_event.startDate)
        print("End date:",test_event.endDate)

        print(test_event.tryConvertToTimelineEvent())

    def _parseLinks(self):
        self.df.apply(lambda x: self._gatherEventLinksAndDetectDuplicates(x),axis=1)
        
    def _gatherEventLinksAndDetectDuplicates(self, x):
        event = CsvEvent(x)
        eventName = event.idn
        eventLink = event.links
        if (eventName not in self.eventLinks):
            self.eventLinks[eventName] = set(eventLink) 
        else: 
            self.eventLinks[eventName].update(eventLink)
            self.__duplicatesToIgnore[eventName] = self.__duplicatesToIgnore.get(eventName, 0) + 1

    def _createEventIfNotDuplicate(self, x):
        event = CsvEvent(x)
        eventName = event.idn
        if (eventName in self.__duplicatesToIgnore) and eventName>0:
            self.__duplicatesToIgnore[eventName] -= 1
            print('[!!!] Ignorando evento repetido: {}'.format(event.name))
            return None 
        else:  #no duplicates to ignore, or we already ignored duplicates
            event.links = self.eventLinks[eventName]
            return event.tryConvertToTimelineEvent()

    def print_expected_csv_help(self):
        print("Expected .csv format: Event_name,#unidad,a.C.?(start),year(start),month(start),day(start),a.C.?(end),year(end),month(end),day(end),Classico?,Turismo?,Link1,Link2,Link3,Link4,Link5")
        print("")
        print("Note: further columns will be ignored. The order of the mentioned columns MUST be mantained, columns should not be skipped.")
        print("Columns marked with '?' should be completed with any value if condition is met, empty otherwise. The same goes for date columns (if exact day of start is unknown or the end date is the same as the start date, the corresponding columns should be left blank.")
            

class EventWriter:
    __start_line = "var items = new vis.DataSet(["
    __end_line = "]);"
    
    def __init__(self, df):
        self.df = df

    def _splitEventsIntoUnits(self):
        unit_dict = {}
        for i in range(1,13):
            unidad = "{}unidad".format(i)
            events = self.df[self.df['Unit']==unidad]
            if (not events.empty) :
                print(events.count())
                self.unit_dict[unidad] = events
        return unit_dict

    def _writeFinalizedFileFinalLine(self, unit, unit_name):
        f2 = open("./"+unit_name+"/"+unit_name+".js","a")
        #aca va sin coma y con linea finalizadora
        f2.write(unit.iloc[-1]["Event"]+"\n")
        f2.write(self.__end_line)
        f2.close()
        print("Version finalizada creada")
    
    def _createAppendableVersion(self, unit, unit_name):
        print("Diferenciando versiones appendable y finalizada")
        command = 'cp ./{}/{}_appendable.js ./{}/{}.js'.format(unit_name,unit_name,unit_name,unit_name)
        process = subprocess.Popen(command.split(), stdout=subprocess.PIPE)
        _, _ = process.communicate()
        
        f = open("./"+unit_name+"/"+unit_name+"_appendable.js", "a")
        f.write(unit.iloc[-1]["Event"]+",")
        f.close()
        print("Versión appendable creada")
    
    def writeUnitJson(self, unit, unit_name):
        print("Escribiendo {}".format(unit_name))
        f = open("./"+unit_name+"/"+unit_name+"_appendable.js", "a")

        f.write("\n")
        for _,linea in unit[:-1].iterrows():
            #lleno con todos los eventos hasta el anteultimo
            f.write(linea["Event"] + ",\n")
        f.close()

        #La ULTIMA fila debe ir SIN COMA en la base finalizada, y CON COMA en la appendable!
        self._createAppendableVersion(unit, unit_name)
        self._writeFinalizedFileFinalLine(unit, unit_name)
    
    def writeEventsToUnitFiles(self):
        unit_dict = self._splitEventsIntoUnits()
        for unit_name,unitDf in unit_dict.items():
            self.writeUnitJson(unitDf, unit_name)
        print("Finalizado!")

####################
### Program code ###
####################
parser = argparse.ArgumentParser(description='Unit timeline events parser, for writing new events to existing timeline CSVs.')
parser.add_argument('file', type=int,
                    help='A .csv containing the events to add to the unit timelines.')
parser.add_argument('--test', '-t', action='store_true',
                    help='Test essential program functions against desired .csv to check compatibility with program (read-only).')

args = parser.parse_args()

df = pd.read_csv(args.file,skiprows=1,index_col=False)

start_order = get_numeric_input("Evento con menor orden a insertar")
end_order = get_numeric_input("Evento con mayor orden a insertar")

parser = EventsCsvParser(df, start_order, end_order)

### TEST FUNCTIONS ###
if(args.test):
   parser.testCsvCompatibility()
else:
    #parser.mergeWithOldDatabase()
    print("Procesando base de datos...")
    EventWriter(parser.getEventsAndUnits()).writeEventsToUnitFiles()    