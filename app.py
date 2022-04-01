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


if __name__ == '__main__':
   app.run(debug = False)