import pandas as pd
import urllib.request
import numpy as np
import requests
import unicodedata
import subprocess
from PIL import Image

def strip_accents(text):
    try:
        text = unicode(text, 'utf-8')
    except NameError: # unicode is a default on python 3 
        pass

    text = unicodedata.normalize('NFD', text)\
           .encode('ascii', 'ignore')\
           .decode("utf-8")

    return str(text)

def sanitizar_nombre(name):
    return strip_accents((name.strip().replace(" ", "_").replace("(","").replace(")","")).lower())

# RECIBE FILA DEL DATAFRAME
# precondición: el campo imagen no es NaN
def obtener_url_img(y):
    url = y[7].split('":"')[1]
    url2 = url.split(",")[0][:-1]
    return url2

# RECIBE FILA DEL DATAFRAME
def obtenerlink(y):
    #print(y)
    url = y[5].split('":"')[1]
    url2 = url2 = url.split(",")[0][:-1]
    return url2

def quote(str):
    return '"'+str+'"'

# ===============================############################ #

df = pd.read_csv("./empresas/new_groups.csv",index_col=False)
df['img'] = df['img'].fillna(0)
df.head(10)


# ====== NUEVAS EMPRESAS ======= #

df = df[df['present']=='No']
#Necesito ver si hay repetidos dentro de las entregas nuevas
#First, we must identify possible repeated events among new entries

def get_name(x):
    return sanitizar_nombre(x[0])

#Generamos lista de elementos repetidos entre los nuevos, contra la que chequearemos para no agregarlos mas de una vez
names = df.apply(get_name,axis=1)
seen = set()
check_repeats = []
for x in names:
    if x not in seen:
        seen.add(x)
    else:
        check_repeats.append(x)
handled_repeats=[]
print("Repeated events among new ones: ",check_repeats)

def parseDate(date):
    numbers = date.split("/")
    return numbers[2]+"-"+numbers[1]+"-"+numbers[0]
  
def crear_evento(x):
    idn = sanitizar_nombre(x[0])
    path_img = quote("0")
    width = 0
    start = quote(parseDate(x[1]))
    name_empresa = x[0]
    count_links = 0
    
    if(not pd.isnull(x[3])):
        if(check_repeats.count(idn)==0):
            #Event is not repeated
            count_links = 1
            links = "["+ quote(x[3]) + "]" 
        else:
            print(handled_repeats)
            if(handled_repeats.count(idn)!=0):
                print('[!!!] Evento repetido:',x[0])
                raise Exception("Event already created") #Cancel processing if event was already created for this enterprise
            handled_repeats.append(idn) #we only want one event with all the data
            count_links = 2 #more than 1 link = more than 1 work on same event
            filtro = df['name'].str.contains(x[0])
            df_links = df[filtro]
            links = "["
            for item in df_links.iteritems():
                print(item)
                raise Exception("Testear que esto funcione") 
                url = item[2]
                links += quote(url) + ","
            links = links[:-1] + "]" #saco la , al pedo y agrego el corchete final
    else:
        links = "["+"]"
    
    if(x[2]!= 0):
        path_img = quote(x[2])
        jupyter_path = "./empresas/img/"+idn+".png"
        im = Image.open(jupyter_path)
        width, height = im.size
        width = int(width*48/height)
    
    content  = "createItem("+ quote(name_empresa) +","+ path_img +","+ str(width) +","+ links + ")"
    
    res = "{id: " + quote(idn) + ", content: " + content + ", start: " + start 
        
    res += "}"
    return res

def try_create(x):
    try:
        return crear_evento(x)
        # If exception is raised, no return
    except Exception as exc:
        print('ERROR '+ x[0])

# ========= UPDATE DATABASE ========= #

start_line = "var items = new vis.DataSet(["
end_line = "]);"

#Necesito vaciar la lsita de repetidos antes de procesar todo el df
handled_repeats = []

subprocess.run(["cp","./empresas/trabajos_appendable.js","./empresas/trabajos_appendable_backup.js"])
subprocess.run(["cp","./empresas/trabajos.js","./empresas/trabajos_backup.js"])
f = open("./empresas/trabajos_appendable.js", "a")
#f.write(start_line)
#f.write("\n")

print("Procesando base de datos...")
df_copy = df.copy()
cosas = df_copy.apply(try_create,axis=1)
cosas = cosas.dropna() #Drop lines that threw exception (repeated enterprise event)
print("Guardando en archivo...")
for linea in cosas[:-1]:
    #Write up to second-to-last event in file
    f.write(linea + ",\n")

#La ULTIMA fila debe ir SIN COMA en la base finalizada, y CON COMA en la appendable!
f.close()
print("Diferenciando versiones appendable y finalizada")
subprocess.run(["cp","./empresas/trabajos_appendable.js","./empresas/trabajos.js"])

f2 = open("./empresas/trabajos.js","a")
#aca va sin coma y con linea finalizadora
f2.write(cosas.iloc[-1]+"\n")
f2.write(end_line)
f2.close()
print("Version finalizada creada")

#La version appendable va con coma y sin linea finalizadora
f = open("./empresas/trabajos_appendable.js", "a")
f.write(cosas.iloc[-1]+",\n")
f.close()
print("Versión appendable creada")
print("Finalizado!")

# === Empresas ya presentes en la linea === #
# Lo que habría que hacer acá es copiar trabajos_appendable.js y reimprimirla modificando las lineas que corresponden.
print("[ERR] PROCESAR EMPRESAS YA PRESENTES NO IMPLEMENTADO")
no_procesados = df[df['present']=='Si'].count()[0]
print(no_procesados,"eventos no procesados.")
