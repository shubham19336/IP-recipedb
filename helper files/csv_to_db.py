# https://stackoverflow.com/questions/2887878/importing-a-csv-file-into-a-sqlite3-database-table-using-python
import pandas as pd
import sqlite3
conn=sqlite3.connect('my_data.db')
cur=conn.cursor()
# cur.execute('''DROP TABLE IF EXISTS ing;''')
# cur.execute(''' CREATE TABLE ing ("Ing_ID","Ing_name","freq","aliases","Wikilink","WikiImage","Doubt","CategoryD_RX","CategoryF_DB","flavordb_link","DietRX_link");''')
# df=pd.read_csv("ing.csv",encoding='latin-1')
# df.to_sql("ing",conn,if_exists='append', index=False)
print(pd.read_sql("SELECT * FROM ing",conn))