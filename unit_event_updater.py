from timeline_event_parser import EventsCsvParser
from timeline_event_parser import EventWriter
import pandas as pd
import re
import argparse

def get_numeric_input(msg):
    var_input = input("{}: ".format(msg))
    while not re.match("\d+",var_input):
        print ("Error! El orden debe ser un número")
        var_input = input("{}: ".format(msg))

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