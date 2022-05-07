import pandas as pd
import unicodedata
import subprocess
import json

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

    def __init__(self, data):
        self.idn = data["id"]
        self.name = data["content"]
        self.img = data["image"]
        if ("link" in data):
            self.__links = [data["link"]]
        else:
            self.__links = data["links"]
        self.__startDate = data["start"]
        if ("end" in data):
            self.__endDate = data["end"]
        else:
            self.endDate = None

    @classmethod
    def fromCsvEvent(cls, event):
        dataDict = {}
        dataDict["id"] = sanitize_name(event[cls.event_col])[:cls.IDN_SIZE]
        # Identify type of timeline event (general information (logo_info) vs tourist information (logo_tour))
        dataDict["type"] = "turismo" if( not pd.isnull(event[cls.tourism_col]) ) else "informacion"
        dataDict["links"] = cls._getCsvEventLinks(event)
        dataDict["unit"] = event[cls.unit_col]
        dataDict["image"] = quote('../img/'+dataDict["type"]+'.svg')
        start, rawStart = cls._parseStartDate(event)
        dataDict["start"] = start
        end, _ = cls._parseEndDate(event)
        dataDict["content"] = "{}: {}".format(rawStart, event[cls.event_col].replace("&#34;", '\\"').replace('"','\\"'))
        return cls(dataDict)
    
    def toTimelineEvent(self):
        content = "\"{}\", image: {}".format(self.name, self.img)
            
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

    @classmethod
    def _getCsvEventLinks(cls, event):
        links = []
        for i in range(cls.link1_col,cls.notes_col):
            if( not pd.isnull(event[i]) ):
                links.append(quote(event[i]))

        return links

    @classmethod
    def _parseStartDate(cls, event):
        if(pd.isnull(event[cls.start_y_col])): #No start year (invalid)
            raise Exception("No start date specified for event")

        if( pd.isnull(event[cls.start_ac_col]) ):
            # Not a b.C. date
            if(pd.isnull(event[cls.start_m_col])): #No month or day specified
                __rawStartDate="{}".format(int(event[cls.start_y_col]))
            elif(pd.isnull(event[cls.start_d_col])): #No day specified
                __rawStartDate="{}-{}".format(int(event[cls.start_y_col]),int(event[cls.start_m_col]))
            else: #Full date specified
                __rawStartDate="{}-{}-{}".format(int(event[cls.start_y_col]),int(event[cls.start_m_col]),int(event[cls.start_d_col]))
            __startDate=quote(__rawStartDate)

        else:
            __rawStartDate = "-{},1,1".format(int(event[cls.start_y_col]))
            __startDate="new Date({})".format(__rawStartDate)
        
        return __rawStartDate, __startDate

    @classmethod
    def _parseEndDate(cls, event):
        if(pd.isnull(event[cls.end_y_col])): #No end year (no end date specified, valid)
            __rawEndDate = None
            __endDate = None

        if( pd.isnull(event[cls.end_ac_col]) ):
            # Not a b.C. date
            if (pd.isnull(event[cls.end_m_col])): #No month or day specified
                __rawEndDate="{}".format(int(event[cls.end_y_col]))
            elif(pd.isnull(event[cls.end_d_col])): #No day specified
                __rawEndDate="{}-{}".format(int(event[cls.end_y_col]),int(event[cls.end_m_col]))
            else: #Full date specified
                __rawEndDate="{}-{}-{}".format(int(event[cls.end_y_col]),int(event[cls.end_m_col]),int(event[cls.end_d_col]))
            __endDate=quote(__rawEndDate)
        
        else:
            #b.C. date
            __rawEndDate = "-{},1,1".format(int(event[cls.end_y_col]))
            __endDate= "new Date({})".format(__rawEndDate)
        return __rawEndDate, __endDate

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
        unidad = self.df.copy().apply( lambda x: CsvEvent.fromCsvEvent(x).unit, axis=1)

        eventsAndUnits = pd.DataFrame({ 'Event': events, 'Unit': unidad })
        eventsAndUnits.dropna(inplace=True)  #drop events that failed or were duplicate

        return eventsAndUnits
    
    def testCsvCompatibility(self):
        self.print_expected_csv_help()
        test_event = CsvEvent.fromCsvEvent(self.df.iloc[0])
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
        event = CsvEvent.fromCsvEvent(x)
        eventName = event.idn
        eventLink = event.links
        if (eventName not in self.eventLinks):
            self.eventLinks[eventName] = set(eventLink) 
        else: 
            self.eventLinks[eventName].update(eventLink)
            self.__duplicatesToIgnore[eventName] = self.__duplicatesToIgnore.get(eventName, 0) + 1

    def _createEventIfNotDuplicate(self, x):
        event = CsvEvent.fromCsvEvent(x)
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

class EventReader:
    def __init__(self, eventJson):
        self.data = json.loads(eventJson)
