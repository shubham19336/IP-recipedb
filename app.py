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
   
   if request.method == 'POST':
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
      return render_template("result.html",data = cursor)

@app.route('/advresult',methods = ['POST', 'GET'])
def advresult():
   
   if request.method == 'POST':
      conn = sqlite3.connect('my_data.db')
      result = request.form
      
      print(result)
      return render_template("temp.html",data = "hello")

@app.route('/nutresult',methods = ['POST', 'GET'])
def nutresult():
   
   if request.method == 'POST':
      conn = sqlite3.connect('my_data.db')
      result = request.form
      
      print(result)
      return render_template("temp.html",data = "hello")

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
		table_dict=dict()
		
		for i in range(9,len(table_arr[0])-7):
			table_dict[table_arr[0][i]]=table_arr[1][i]

		return render_template("base.html",data = table_dict)

@app.route('/recipedb/category/<string:id>',  methods = ['GET', 'POST'])
def category(id):
	conn = sqlite3.connect("my_data.db")
	cursor = conn.execute(f"SELECT Ing_name FROM ing WHERE CategoryF_DB = '{id}' ORDER BY freq DESC LIMIT 10")
	return render_template("category.html", data = cursor)

@app.route('/recipedb/ingredient/<string:name>',  methods = ['GET', 'POST'])
def redirect_to_ingredient(name):
	con = sqlite3.connect("my_data.db")
	con.row_factory = sqlite3.Row
	cur = con.cursor()
	cur.execute("select Ing_id from ing where Ing_name like \"{}\"".format(name))
	row = cur.fetchone()
	t = "a_b_" + str(row[0])
	return render_template("ing.html",dt=t)

if __name__ == '__main__':
   app.run(debug = False)