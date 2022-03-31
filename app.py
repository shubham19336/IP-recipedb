from tkinter import ANCHOR
from flask import Flask, jsonify, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def student():
   return render_template('index.html')


@app.route('/result',methods = ['POST', 'GET'])
def result():
   if request.method == 'POST':
      conn = sqlite3.connect('my_data.db')
      result = request.form
      print(result)
      str = "SELECT Recipe_title,Region,Sub_region,servings,Calories,[Protein (g)],[Total lipid (fat) (g)] FROM recp WHERE Continent = '"
      str += result['ccontinent']
      str += "'"
      cursor = conn.execute(str)
      return render_template("result.html",data = cursor)

@app.route('/result/rec_info', methods = ['POST','GET'])
def result2():
   print(result)
   return render_template("base.html",result = result)
if __name__ == '__main__':
   app.run(debug = False)