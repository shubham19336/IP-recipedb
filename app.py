# from tkinter import ANCHOR
from flask import Flask, jsonify, render_template, request
import sqlite3
import pandas as pd

df = pd.read_csv("Recipes.csv")
recp_column = (df.iloc[0]).tolist()
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')


@app.route('/result',methods = ['POST', 'GET'])
def result():
   
   # if request.method == 'POST':
   conn = sqlite3.connect('my_data.db')
   result = request.form
   print(result)

      # populating required operands and values for queries
   keys=['ccontinent','cregion','ccountry','crecipe']
   operands=['=']*4
   vals=['']*4
   for i in range(4):
      k=keys[i]
      vals[i]=result[k]
      if vals[i]=='':
         operands[i]='!='
      
   str = f"SELECT Recipe_id,Recipe_title,Region,Sub_region,servings,Calories,[Protein (g)],[Total lipid (fat) (g)] FROM recp WHERE Continent {operands[0]} '{vals[0]}' and Region {operands[1]} '{vals[1]}' and Sub_region {operands[2]} '{vals[2]}' and Recipe_title {operands[3]} '{vals[3]}'"
   print(str)
   cursor = conn.execute(str)
   value = render_template("result.html",data = cursor)
   conn.close()
   return value

@app.route('/advresult',methods = ['POST', 'GET'])
def advresult():
   
   if request.method == 'POST':
      conn = sqlite3.connect('my_data.db')
      result = request.form
      
      print(result)
      value = render_template("temp.html",data = "hello")
      conn.close()
      return value

@app.route('/nutresult',methods = ['POST', 'GET'])
def nutresult():
   
   if request.method == 'POST':
      conn = sqlite3.connect('my_data.db')
      result = request.form
      
      print(result)
      value = render_template("temp.html",data = "hello")
      conn.close()
      return value

@app.route('/result/rec_info/<string:id>',methods = ['POST', 'GET'])
def result2(id):
   if request.method == 'GET':
		# id=request.args.get('id')
      conn = sqlite3.connect('my_data.db')
      cursor = conn.execute(f"SELECT * FROM recp WHERE Recipe_id = {id}")
      arr = []
		# print(cursor)
      for row in cursor:
         arr.append(row)
      table_arr = []
      table_arr.append(recp_column) 
      table_arr.append(list(arr[0]))
      table_dict1=dict()
      table_dict2=dict()
      table = []
      for i in range(9):
         table_dict2[table_arr[0][i]]=table_arr[1][i]
      for i in range(len(table_arr[0])-7,len(table_arr[0])):
         table_dict2[table_arr[0][i]]=table_arr[1][i]
      print(table_dict2['Processes'])
      print(table_dict2['Utensils'])
      if table_dict2['Processes'] == None:
         table_dict2['Processes'] = "Processes not available"
      if table_dict2['Utensils'] == None:
         table_dict2['Utensils'] = "Utensils not available"
      table_dict2['Processes'] = table_dict2['Processes'].split("||")
      table_dict2['Utensils'] = table_dict2['Utensils'].split("||")
      table.append(table_dict2)
      for i in range(9,len(table_arr[0])-7):
         table_dict1[table_arr[0][i]]=table_arr[1][i]
      table.append(table_dict1)
      value = render_template("base.html",data = table)
      conn.close()
      return value

@app.route('/recipedb/category/<string:id>',  methods = ['GET', 'POST'])
def category(id):
   conn = sqlite3.connect("my_data.db")
   cursor = conn.execute(f"SELECT Ing_name FROM ing WHERE CategoryF_DB = '{id}' ORDER BY freq DESC LIMIT 10")
   value = render_template("category.html", data = cursor)
   conn.close()
   return value

@app.route('/recipedb/ingredient/<string:name>',  methods = ['GET', 'POST'])
def redirect_to_ingredient(name):
   conn = sqlite3.connect("my_data.db")
   conn.row_factory = sqlite3.Row
   cur = conn.cursor()
   cur.execute("select Ing_id from ing where Ing_name like \"{}\"".format(name))
   row = cur.fetchone()
   t = "a_b_" + str(row[0])
   value = render_template("ing.html",dt=t)
   conn.close()
   return value

if __name__ == '__main__':
   app.run(debug = False)