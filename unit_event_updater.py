import pandas as pd
import numpy as np
import unicodedata
import sys
import subprocess
import re

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

def strip_accents(text):
    try:
        text = unicode(text, 'utf-8')
    except NameError: # unicode is a default on python 3 
        pass

    text = unicodedata.normalize('NFD', text)\
           .encode('ascii', 'ignore')\
           .decode("utf-8")

    return str(text)

def sanitizar_nombre(text):
    return strip_accents((text.strip().replace(" ", "_").replace("(","").replace(")","")).lower()).replace('&#34;','').replace('"','')

def get_name(x):
    sanitized = sanitizar_nombre(x[event_col])
    return sanitized[:IDN_SIZE]

# RECIBE FILA DEL DATAFRAME
def obtenerlink(x):
    links = []
    for i in range(link1_col,notes_col):
        if( not pd.isnull(x[i]) ):
            links.append(quote(x[i]))

    return links

def quote(text):
    return '"'+text+'"'

def unquote(text):
    if(text[0]=='"' and text[-1]=='"'):
        return text[1:][:-1]
    return text

# Identify type of timeline event (general information (logo_info) vs tourist information (logo_tour))
def find_type(x):
    if( not pd.isnull(x[tourism_col]) ):
        return "turismo"
    else:
        return "informacion"

def get_start_date(x):
    date=0
    if( pd.isnull(x[start_ac_col]) ):
        # Not a b.C. date
        if(pd.isnull(x[start_y_col])): #No start year (invalid)
            pass
        elif(pd.isnull(x[start_m_col])): #No month or day specified
            date="{}".format(int(x[start_y_col]))
            date=quote(date)
        elif(pd.isnull(x[start_d_col])): #No day specified
            date="{}-{}".format(int(x[start_y_col]),int(x[start_m_col]))
            date=quote(date)
        else: #Full date specified
            date="{}-{}-{}".format(int(x[start_y_col]),int(x[start_m_col]),int(x[start_d_col]))
            date=quote(date)
    else:
        #b.C. date
        if(pd.isnull(x[start_y_col])): #No start year (invalid)
            pass
        else:
            date="new Date(-{},1,1)".format(int(x[start_y_col]))

    if(date==0):
        raise Exception("No start date specified for event: ",x[event_col])

    return date

def get_end_date(x):
    date=0
    if( pd.isnull(x[end_ac_col]) ):
        # Not a b.C. date
        if(pd.isnull(x[end_y_col])): #No start year (no end date specified, valid)
            pass
        elif(pd.isnull(x[end_m_col])): #No month or day specified
            date="{}".format(int(x[end_y_col]))
            date=quote(date)
        elif(pd.isnull(x[end_d_col])): #No day specified
            date="{}-{}".format(int(x[end_y_col]),int(x[end_m_col]))
            date=quote(date)
        else: #Full date specified
            date="{}-{}-{}".format(int(x[end_y_col]),int(x[end_m_col]),int(x[end_d_col]))
            date=quote(date)
    else:
        #b.C. date
        if(pd.isnull(x[end_y_col])): #No end year (no end date specified, valid)
            pass
        else:
            date="new Date(-{},1,1)".format(int(x[end_y_col]))

    return date

def sorter(x):
    return x[unit_col]

# Args: x    a row of the event dataframe
def crear_evento(x):
    idn = get_name(x)
    path_img = quote("0")
    img = 0
    width = 0
    start = get_start_date(x)
    end = get_end_date(x)
    links = []
    name_event = x[event_col].replace("&#34;", '\\"').replace('"','\\"')
        
    if(check_repeats.count(idn)==0):
        #Event is not repeated
        links=obtenerlink(x)
    else:
        if(handled_repeats.count(idn)!=0):
            raise Exception("Event already created") 
        handled_repeats.append(idn) #we only want one event with all the data
        filtro = df['title'].str.contains(x[event_col][:21])
        df_links = df[filtro]
        links = []
        df_links = df_links.apply(obtenerlink,axis=1)
        for item in df_links.iteritems():
            url = item[1]
            links += url
    
    
    img = find_type(x)
    content = quote(name_event) 
    
    if(img!= 0):
        #if there is an image, include image
        path_img = quote('../img/'+img+'.svg')
        content += ", image:"+ path_img 
        
    if(len(links)>1):
        #if there is multiple links, pass list of links
        content += ", links:" + str(links)
    elif(len(links)==1):
        #if there is only one link, pass single link
        content += ", link:" + links[0]
    
    res = "{id: " + quote(idn) + ", content: " + content + ", start: " + start 
    if(end!=0):
        res += ", end: " + end
        
    res += "}"
    return res

def try_create(x):
    try:
        return crear_evento(x)
        # If exception is raised, no return
    except Exception as exc:
        print('[!!!] Evento repetido:',x[event_col])


####################
### Program code ###
####################

if(len(sys.argv) < 2):
    print("Wrong usage!")
    print("Usage: python3 new_unit_event_generator.py <file.csv> [-options]")
    print("Options:")
    print("    -t    Test essential functions against desired .csv to check compatibility with program")
    print("    -e    Execute program on .csv")
    sys.exit()

df = pd.read_csv(sys.argv[1],skiprows=1,index_col=False)

### TEST FUNCTIONS ###
if(len(sys.argv) >= 3 and sys.argv[2]=="-t"):
    print("Expected .csv format: Event_name,#unidad,a.C.?(start),year(start),month(start),day(start),a.C.?(end),year(end),month(end),day(end),Classico?,Turismo?,Link1,Link2,Link3,Link4,Link5")
    print("")
    print("Note: further columns will be ignored. The order of the mentioned columns MUST be mantained, columns should not be skipped.")
    print("Columns marked with '?' should be completed with any value if condition is met, empty otherwise. The same goes for date columns (if exact day of start is unknown or the end date is the same as the start date, the corresponding columns should be left blank.")
    test_event = df.iloc[0]
    print("Identificator size is:",IDN_SIZE)
    print("Test event:")
    print(test_event)
    print("")

    print("ID:",get_name(test_event))
    print("Links:",obtenerlink(test_event))
    print("Type:",find_type(test_event))

    check_repeats = []
    handled_repeats=[]
    print(try_create(test_event))


elif(len(sys.argv) >= 3 and sys.argv[2]=="-e"):
    start_order = input("Evento con menor orden a insertar: ")
    while not re.match("\d+",start_order):
        print ("Error! El orden debe ser un número")
        start_order = input("Evento con menor orden a insertar: ")

    end_order = input("Evento con mayor orden a insertar: ")
    while not re.match("\d+",end_order):
        print ("Error! El orden debe ser un número")
        end_order = input("Evento con mayor orden a insertar: ")

    df = df[(df.iloc[:,order_col]>=int(start_order)) & (df.iloc[:,order_col]<=int(end_order))]

    names = df.apply(get_name,axis=1)
    seen = set()
    check_repeats = []
    for x in names:
        if x not in seen:
            seen.add(x)
        else:
            check_repeats.append(x)
    handled_repeats=[]

    start_line = "var items = new vis.DataSet(["
    end_line = "]);"

    print("Procesando base de datos...")
    df_copy = df.copy()
    events = df_copy.apply(try_create,axis=1)
    unidad = df.copy().apply(sorter,axis=1)

    frame = { 'Event': events, 'Unit': unidad } 
    cosas = pd.DataFrame(frame) 
    cosas = cosas.dropna()

    unit_dict = {}
    for i in range(1,13):
        unidad="{}unidad".format(i)
        events=cosas[cosas['Unit']==unidad]
        if(not events.empty):
            print(events.count())
            unit_dict[unidad] = events

    for unit_name,unit in unit_dict.items():
        print("Procesando {}".format(unit_name))
        #del unit["Unit"]

        f = open("./"+unit_name+"/"+unit_name+"_appendable.js", "a")
        f.write("\n")

        for _,linea in unit[:-1].iterrows():
            #lleno con todos los eventos hasta el anteultimo
            f.write(linea["Event"] + ",\n")

        #La ULTIMA fila debe ir SIN COMA en la base finalizada, y CON COMA en la appendable!
        f.close()
        print("Diferenciando versiones appendable y finalizada")
        command = 'cp ./{}/{}_appendable.js ./{}/{}.js'.format(unit_name,unit_name,unit_name,unit_name)
        process = subprocess.Popen(command.split(), stdout=subprocess.PIPE)
        _, _ = process.communicate()

        f2 = open("./"+unit_name+"/"+unit_name+".js","a")
        #aca va sin coma y con linea finalizadora
        f2.write(unit.iloc[-1]["Event"]+"\n")
        f2.write(end_line)
        f2.close()
        print("Version finalizada creada")

        #La version appendable va con coma y sin linea finalizadora
        f = open("./"+unit_name+"/"+unit_name+"_appendable.js", "a")
        f.write(cosas.iloc[-1]["Event"]+",")
        f.close()
        print("Versión appendable creada")
        print("Finalizado!")

else:
    print("Wrong usage! Use option -e to execute or -t to test.")
    print("Usage: python3 new_unit_event_generator.py <file.csv> [-options]")
    print("Options:")
    print("    -t    Test essential functions against desired .csv to check compatibility with program")
    print("    -e    Execute program on .csv")
    sys.exit()