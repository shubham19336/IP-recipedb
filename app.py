# from tkinter import ANCHOR
from flask import Flask, jsonify, render_template, request
import sqlite3

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

@app.route('/result/rec_info',methods = ['POST', 'GET'])
def result2():
   if request.method == 'GET':
      id=request.args.get('id')
      conn = sqlite3.connect('my_data.db')
      cursor = conn.execute(f"SELECT Recipe_title,img_url FROM recp WHERE Recipe_id = {id}")
      arr = []
      for row in cursor:
         arr.append(row[0])
         arr.append(row[1])

      print(arr)
      return render_template("base.html",data = arr)

@app.route('/recipedb/category/<string:id>',  methods = ['GET', 'POST'])
def category(id):
	con = sqlite3.connect("my_data.db")
	con.row_factory = sqlite3.Row
	query='SELECT * from ing where "CategoryF_DB" like "' + id + '" LIMIT 10'
	query1='SELECT * from ing where "CategoryF_DB" like "' + id + '" LIMIT 20'
	# print(query)
	heading="" + id + ""
	# print(heading)


	def dict_factory(cursor, row):
		d = {}
		for idx, col in enumerate(cursor.description):
			d[col[0]] = row[idx]
		return d
	con.row_factory = dict_factory
	cur = con.cursor()
	cur.execute(query)
	row = cur.fetchall()
	# print(row[0])
	cur.execute(query1)
	row2=cur.fetchall()

	# query2='SELECT * from recipes2 where Recipe_id in (Select Recipe_id from ingredients where ingredient_name="' + row[0]['Ing_name'] + '" OR ingredient_name="' + row[1]['Ing_name'] + '" OR ingredient_name="' + row[2]['Ing_name'] + '" OR ingredient_name="' + row[3]['Ing_name'] + '" LIMIT 21 )'
	# query2='SELECT * from cat_top_recipe where Recipe_id like "' + id + '" '
	# cur.execute(query2)
	# rec2=cur.fetchall()
	# print(rec2)
	# show=len(rec2[0])-2
	# All_recipes=[]
	# for x in range(len(rec2[0])-1):
		# x=''+ str(x) +''
		# print(x)
		# queryX='SELECT * from recipes2 where Recipe_id="' + str(rec2[0][str(x)]) + '"'
		# print(queryX)
		# cur.execute(queryX)
		# All_recipes.append(cur.fetchall())
		# print(All_recipes)
	# queryimg='SELECT cat_Image from cat_Img where "Category" like "' + id + '"'
	# cur.execute(queryimg)
	# print(queryimg)
	# img=cur.fetchone()
	# print(img)
	# print(All_recipes)
	# print(show)
	return render_template("category.html", row=row,heading=heading,row2=row2)

@app.route('/recipedb/ingredient/<string:name>',  methods = ['GET', 'POST'])
def redirect_to_ingredient(name):
	con = sqlite3.connect("my_data.db")
	con.row_factory = sqlite3.Row
	cur = con.cursor()
	cur.execute("select Ing_id from ing where Ing_name like \"{}\"".format(name))
	row = cur.fetchone()
	t = "a_b_" + str(row[0])
	# print(url_for('search_ingre', id=))
	return render_template("ing.html",dt=t)

if __name__ == '__main__':
   app.run(debug = False)