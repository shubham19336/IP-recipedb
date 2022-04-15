from flask import Flask, jsonify, redirect, render_template, request, url_for, redirect
import sqlite3
import pandas as pd
import json

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

stepsJSON = {}
try:
	with open("clean_recipies.json") as jsonfile:
		stepsJSON = json.load(jsonfile)
except:
	print("instruction json file issue ig")


df = pd.read_csv("Recipes.csv")
recp_column = (df.iloc[0]).tolist()
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')


@app.route('/cuisine_result',methods = ['POST', 'GET'])
def cuisine_result():
   
   # if request.method == 'POST':
   conn = sqlite3.connect('my_data.db')
   result = request.form
   # print(result)

      # populating required operands and values for queries
   keys=['ccontinent','cregion','ccountry','crecipe']
   operands=['=']*4
   vals=['']*4
   for i in range(4):
      k=keys[i]
      vals[i]=result[k]
      if vals[i]=='':
         operands[i]='!='
      
   str = f"SELECT Recipe_id,Recipe_title,Region,Sub_region,Servings,Calories,[Protein(g)],[Totallipid(fat)(g)] FROM recipes2 WHERE Continent {operands[0]} '{vals[0]}' and Region {operands[1]} '{vals[1]}' and Sub_region {operands[2]} '{vals[2]}' and Recipe_title {operands[3]} '{vals[3]}';"
   # print(str)
   cursor = conn.execute(str)
   value = render_template("result.html",data = cursor)
   conn.close()
   return value

@app.route('/ingresult',methods = ['POST', 'GET'])
def ingresult():
   # if request.method == 'POST':
   con = sqlite3.connect('my_data.db')
   result = request.form

   str = f"SELECT Recipe_id,Recipe_title,Region,Sub_region,Servings,Calories,[Protein(g)],[Totallipid(fat)(g)] FROM recipes2 WHERE Recipe_id in (SELECT DISTINCT Recipe_id from ingredients where ingredient_name = '{result['iused']}') AND Recipe_id NOT IN (SELECT DISTINCT Recipe_id from ingredients where ingredient_name = '{result['inotused']}') LIMIT 66000;"
   cursor=con.execute(str)
   value = render_template("result.html",data = cursor)
   con.close()
   return value

@app.route('/catresult',methods = ['POST', 'GET'])
def catresult():
   # if request.method == 'POST':
   con = sqlite3.connect('my_data.db')
   result = request.form
   notused=result['canotused']
   if notused=="":
      notused="zzzz"

   # print(result)

   str = f"""SELECT Recipe_id,Recipe_title,Region,Sub_region,Servings,Calories,[Protein(g)],[Totallipid(fat)(g)] FROM recipes2 WHERE Recipe_id IN
            (SELECT DISTINCT Recipe_id FROM ingredients 
               WHERE Ing_ID IN 
            (SELECT DISTINCT Ing_ID from unique_ingredients where "Category-D_rX" like '%{result['caused']}%') 
               AND Ing_ID NOT IN 
            (SELECT DISTINCT Ing_ID from unique_ingredients where "Category-D_RX" like '%{notused}%')) LIMIT 50;"""

   # print(str)

   cursor=con.execute(str)
   # print(cursor)
   ans=[]
   for row in cursor:
      # print(row)
      ans.append(row)
   value = render_template("result.html",data = ans)
   con.close()
   return value



@app.route('/nutresult',methods = ['POST', 'GET'])
def nutresult():
   
   # if request.method == 'POST':
   conn = sqlite3.connect('my_data.db')
   result = request.form
   energy = f"Energy(kcal) >= {result['enemin']} AND Energy(kcal) <= {result['enemax']}"
   proteins = f"([Protein(g)] BETWEEN {result['promin']} AND {result['promax']})"
   fats = f"([Totallipid(fat)(g)] BETWEEN {result['fatmin']} AND {result['fatmax']})"
   carbo = f"([Carbohydratebydifference(g)] BETWEEN {result['carmin']} AND {result['carmax']})"
   str = f"SELECT Recipe_id,Recipe_title,Region,Sub_region,Servings,Calories,[Protein(g)],[Totallipid(fat)(g)] FROM recipes2 WHERE {energy}"
   cursor= conn.execute(str)
   print(str)
   for row in cursor:
      print(row)
   value = render_template("result.html",data = cursor)
   
   conn.close()
   return value

@app.route('/advresult',methods = ['POST', 'GET'])
def advresult():
   
   if request.method == 'POST':
      conn = sqlite3.connect('my_data.db')
      result = request.form
      
      # print(result)
      value = render_template("temp.html",data = "hello")
      conn.close()
      return value

@app.route('/result/rec_info/<string:id>',methods = ['POST', 'GET'])
def result2(id):
   if request.method == 'GET':
		# id=request.args.get('id')
      con1=sqlite3.connect('my_data.db')
      con1.row_factory=dict_factory
      cur1=con1.cursor()
      cur1.execute("select * from 'Recipe_nutrition_full' where Recipe_id = '" + id + "'")
      full_profile=dict(cur1.fetchone())
      # print(full_profile)

      con2 = sqlite3.connect('my_data.db')
      con2.row_factory=dict_factory
      cur2=con2.cursor()
      cur2.execute(f"SELECT Recipe_title,img_url,Continent,Region,Sub_region,cook_time,prep_time,Source,url,Processes,Utensils FROM recipes2 WHERE Recipe_id = '{id}';")
      out=cur2.fetchall()
      data = {k: v for d in out for k, v in d.items()}

      if data['Processes'] == '':
         data['Processes'] = "Processes not available"
      if data['Utensils'] == '':
         data['Utensils'] = "Utensils not available"
      data['Processes'] = data['Processes'].split("||")
      data['Utensils'] = data['Utensils'].split("||")
      # print(data)

      con3 = sqlite3.connect('my_data.db')
      con3.row_factory=dict_factory
      con4 = sqlite3.connect('my_data.db')
      con4.row_factory=dict_factory
      cur3=con3.cursor()
      cur4=con4.cursor()
      cur3.execute(f"select * from ingredients where Recipe_id = '{id}';")
      cur4.execute(f"select [Recipe_id], [ndb_id], [Carbohydrate, by difference (g)], [Energy (kcal)], [Protein (g)], [Total lipid (fat) (g)] from 'nutrients-new' where Recipe_id = '{id}';")
      all_ing = [dict(k) for k in cur3.fetchall()]
      all_nutr = [dict(k) for k in cur4.fetchall()]

      ing_names = []
      try:
         rows1 = [d for d in all_ing if str(d["Recipe_id"]).strip() == str(id).strip()]
      except:
         rows1 = []
      try:
         rows2 = [d for d in all_nutr if str(d["Recipe_id"]).strip() == str(id).strip()]
      except:
         rows2 = []
      for rp in rows1:
         dict_row = dict(rp)
         ndb_id = rp["ndb_id"]
         nutr = {
            "Carbohydrate, by difference (g)": "-",
            "Energy (kcal)": "-",
            "Protein (g)": "-",
            "Total lipid (fat) (g)": "-",
         }
         for rowl in rows2:
            if str(dict(rowl)["ndb_id"]) == str(ndb_id):
               nutr = dict(rowl)
               break
         dict_row["nutrient_info"] = nutr
         ing_names.append(dict_row)
      # print(ing_names)

      recipeSteps = "Recipe Steps are not available."
      if stepsJSON != {}:
         recipeSteps = next((x['steps'] for x in stepsJSON if x['recipe_id'] == id), "Recipe Steps are not available.")
      
      ins = []
      ans = ""
      for i in recipeSteps:
         if i==';' or i=='.':
            ins.append(ans+'.')
            ans = ""
         else:
            if ans=="":
               if i==' ':
                  continue
               ans+=i.upper()
            else:
               ans += i
      if ans!="":
         ins.append(ans+'.')

      con1.close()
      con2.close()
      con3.close()
      con4.close()
      value = render_template("base.html",data=data,profile=full_profile,instructions=ins, ing_names=ing_names)
      return value

@app.route('/recipedb/category/<string:id>',  methods = ['GET', 'POST'])
def category(id):
   con1 = sqlite3.connect("my_data.db")
   con1.row_factory=dict_factory
   cur1=con1.cursor()
   cur1.execute(f"""SELECT * FROM unique_ingredients WHERE "Category-D_rX" = '{id}' ORDER BY freq DESC LIMIT 20;""")
   ing=cur1.fetchall()
   # print(ing[0])

   con2 = sqlite3.connect("my_data.db")
   con2.row_factory=dict_factory
   cur2=con2.cursor()
   cur2.execute(f"SELECT * FROM cat_top_recipe where Recipe_id = '{id}';")
   recids=cur2.fetchall()
   # print(recids)

   recps=[]
   con = sqlite3.connect("my_data.db")
   con.row_factory=dict_factory
   cur=con1.cursor()
   for x in range(len(recids[0])-1):
      queryX=f"SELECT * from recipes2 where Recipe_id='{str(recids[0][str(x)])}';"
      cur.execute(queryX)
      recps.append(cur.fetchone())
   # print(recps)
   
   queryimg='SELECT cat_Image from cat_Img where "Category" like "' + id + '"'
   cur.execute(queryimg)
   img=cur.fetchone()
   # print(img)

   value = render_template("category.html", cat=id, img = img,ing=ing, recps=recps)
   con1.close()
   con2.close()
   con.close()
   return value

@app.route('/recipedb/ingredient/<string:name>',  methods = ['GET', 'POST'])
def redirect_to_ingredient(name):
   conn = sqlite3.connect("my_data.db")
   conn.row_factory = sqlite3.Row
   cur = conn.cursor()
   cur.execute("select Ing_id from ingredients where ingredient_name like \"{}\"".format(name))
   row = cur.fetchone()
   t = "a_b_" + str(row[0])
   # print(name)
   # t="a_b_"
   value = redirect((url_for('search_ing', id=t)))
   conn.close()
   return value

@app.route('/recipedb/search_ingre/<string:id>',  methods = ['GET', 'POST']) 
def search_ing(id):
   con = sqlite3.connect("my_data.db")
   conn = sqlite3.connect("my_data.db")
   connn = sqlite3.connect("my_data.db")
   con.row_factory = sqlite3.Row
   conn.row_factory = sqlite3.Row
   connn.row_factory = sqlite3.Row
   list_args=id.split('_')
   ndb_id=list_args[0]
   # Recipe_id=list_args[2]
   ingredient_id=list_args[2]
   name_Ingre=list_args[1]

   def dict_factory(cursor, row):
      d = {}
      for idx, col in enumerate(cursor.description):
         d[col[0]] = row[idx]
      return d
   con.row_factory = dict_factory
   connn.row_factory = dict_factory
   cur = con.cursor()
   curr = conn.cursor()
   currr = connn.cursor()
   query = "select * from unique_ingredients where Ing_ID = '{}'".format(ingredient_id)
   cur.execute(query)
   curr.execute("select * from USDA_100_grams natural join (select ndb_id, state, ingredient_name, count(*) as value_occurence from ingredients where Ing_ID = '{}' group by ndb_id,state, ingredient_name having count(ingredient_name)=1 order by value_occurence DESC limit 20)".format(ingredient_id))
   generic_ingredient_info = cur.fetchone()
   forms_info = [dict(k) for k in curr.fetchall()]
   currr.execute("select * from recipes2 natural join ingredients where ingredients.Ing_ID = '{}' group by Recipe_id limit 20".format(ingredient_id))
   recipes_info = [dict(k) for k in currr.fetchall()]
   return render_template("search_ing.html",generic_ingredient_info=generic_ingredient_info, forms_info=forms_info, recipes_info=recipes_info)


if __name__ == '__main__':
   app.run(debug = False,host='127.0.0.1',port=5000)