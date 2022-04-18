# https://stackoverflow.com/questions/2887878/importing-a-csv-file-into-a-sqlite3-database-table-using-python
import pandas as pd
import sqlite3
conn=sqlite3.connect('my_data.db')
cur=conn.cursor()
# cur.execute('''DROP TABLE IF EXISTS recp;''')
# cur.execute(''' CREATE TABLE recp ("Recipe_index", "Recipe_id", "cook_time", "prep_time", "Recipe_title", "url", "servings", "Source", "img_url", "Adjusted Protein (g)", "Alanine (g)", "Alcohol, ethyl (g)", "Arginine (g)", "Ash (g)", "Aspartic acid (g)", "Beta-sitosterol (mg)", "Betaine (mg)", "Caffeine (mg)", "Calcium, Ca (mg)", "Campesterol (mg)", "Carbohydrate, by difference (g)", "Carotene, alpha (g)", "Carotene, beta (g)", "Cholesterol (mg)", "Choline, total (mg)", "Copper, Cu (mg)", "Cryptoxanthin, beta (g)", "Cystine (g)", "Dihydrophylloquinone (g)", "Energy (kJ)", "Energy (kcal)", "Fatty acids, total monounsaturated (g)", "Fatty acids, total polyunsaturated (g)", "Fatty acids, total polyunsaturated 15:0 (g)", "Fatty acids, total polyunsaturated 16:1 c (g)", "Fatty acids, total polyunsaturated 16:1 t (g)", "Fatty acids, total polyunsaturated 17:0 (g)", "Fatty acids, total polyunsaturated 17:1 (g)", "Fatty acids, total polyunsaturated 18:1 c (g)", "Fatty acids, total polyunsaturated 18:1 t (g)", "Fatty acids, total polyunsaturated 18:2 CLAs (g)", "Fatty acids, total polyunsaturated 18:2 i (g)", "Fatty acids, total polyunsaturated 18:2 n-6 c,c (g)", "Fatty acids, total polyunsaturated 18:2 t not further defined (g)", "Fatty acids, total polyunsaturated 18:2 t,t (g)", "Fatty acids, total polyunsaturated 18:3 n-6 c,c,c (g)", "Fatty acids, total polyunsaturated 20:2 n-6 c,c (g)", "Fatty acids, total polyunsaturated 20:3 undifferentiated (g)", "Fatty acids, total polyunsaturated 22:1 c (g)", "Fatty acids, total polyunsaturated 22:1 t (g)", "Fatty acids, total polyunsaturated 24:0 (g)", "Fatty acids, total polyunsaturated 24:1 c (g)", "Fatty acids, total saturated (g)", "Fatty acids, total saturated 10:0 (g)", "Fatty acids, total saturated 12:0 (g)", "Fatty acids, total saturated 14:0 (g)", "Fatty acids, total saturated 14:1 (g)", "Fatty acids, total saturated 16:0 (g)", "Fatty acids, total saturated 16:1 undifferentiated (g)", "Fatty acids, total saturated 18:0 (g)", "Fatty acids, total saturated 18:1 undifferentiated (g)", "Fatty acids, total saturated 18:2 undifferentiated (g)", "Fatty acids, total saturated 18:3 undifferentiated (g)", "Fatty acids, total saturated 18:4 (g)", "Fatty acids, total saturated 20:0 (g)", "Fatty acids, total saturated 20:1 (g)", "Fatty acids, total saturated 20:4 undifferentiated (g)", "Fatty acids, total saturated 20:5 n-3 (EPA) (g)", "Fatty acids, total saturated 22:0 (g)", "Fatty acids, total saturated 22:1 undifferentiated (g)", "Fatty acids, total saturated 22:5 n-3 (DPA) (g)", "Fatty acids, total saturated 22:6 n-3 (DHA) (g)", "Fatty acids, total saturated 4:0 (g)", "Fatty acids, total saturated 6:0 (g)", "Fatty acids, total saturated 8:0 (g)", "Fatty acids, total trans (g)", "Fatty acids, total trans-monoenoic (g)", "Fatty acids, total trans-polyenoic (g)", "Fatty acids, total trans-polyenoic 13:0 (g)", "Fatty acids, total trans-polyenoic 15:1 (g)", "Fatty acids, total trans-polyenoic 18:1-11 t (18:1t n-7) (g)", "Fatty acids, total trans-polyenoic 18:3 n-3 c,c,c (ALA) (g)", "Fatty acids, total trans-polyenoic 18:3i (g)", "Fatty acids, total trans-polyenoic 20:3 n-3 (g)", "Fatty acids, total trans-polyenoic 20:3 n-6 (g)", "Fatty acids, total trans-polyenoic 20:4 n-6 (g)", "Fatty acids, total trans-polyenoic 21:5 (g)", "Fatty acids, total trans-polyenoic 22:4 (g)", "Fiber, total dietary (g)", "Fluoride, F (g)", "Folate, DFE (g)", "Folate, food (g)", "Folate, total (g)", "Folic acid (g)", "Fructose (g)", "Galactose (g)", "Glucose (dextrose) (g)", "Glutamic acid (g)", "Glycine (g)", "Histidine (g)", "Hydroxyproline (g)", "Iron, Fe (mg)", "Isoleucine (g)", "Lactose (g)", "Leucine (g)", "Lutein + zeaxanthin (g)", "Lycopene (g)", "Lysine (g)", "Magnesium, Mg (mg)", "Maltose (g)", "Manganese, Mn (mg)", "Menaquinone-4 (g)", "Methionine (g)", "Niacin (mg)", "Pantothenic acid (mg)", "Phenylalanine (g)", "Phosphorus, P (mg)", "Phytosterols (mg)", "Potassium, K (mg)", "Proline (g)", "Protein (g)", "Retinol (g)", "Riboflavin (mg)", "Selenium, Se (g)", "Serine (g)", "Sodium, Na (mg)", "Starch (g)", "Stigmasterol (mg)", "Sucrose (g)", "Sugars, total (g)", "Theobromine (mg)", "Thiamin (mg)", "Threonine (g)", "Tocopherol, beta (mg)", "Tocopherol, delta (mg)", "Tocopherol, gamma (mg)", "Tocotrienol, alpha (mg)", "Tocotrienol, beta (mg)", "Tocotrienol, delta (mg)", "Tocotrienol, gamma (mg)", "Total lipid (fat) (g)", "Tryptophan (g)", "Tyrosine (g)", "Valine (g)", "Vitamin A, IU (IU)", "Vitamin A, RAE (g)", "Vitamin B-12 (g)", "Vitamin B-12, added (g)", "Vitamin B-6 (mg)", "Vitamin C, total ascorbic acid (mg)", "Vitamin D (D2 + D3) (g)", "Vitamin D (IU)", "Vitamin D2 (ergocalciferol) (g)", "Vitamin D3 (cholecalciferol) (g)", "Vitamin E (alpha-tocopherol) (mg)", "Vitamin E, added (mg)", "Vitamin K (phylloquinone) (g)", "Water (g)", "Zinc, Zn (mg)", "Utensils", "Processes", "Calories", "total_time", "Continent", "Region", "Sub_region");''')
# df=pd.read_csv("Recipes6.csv",encoding='latin-1')
# df.to_sql("recp",conn,if_exists='append', index=False)
import os
import sys
from io import BytesIO, IOBase

# sys.stdout = open('unique.txt', 'w',encoding="utf-8")


df=pd.read_sql(f"SELECT Processes FROM recipes2 ",conn)
# print(df.shape)
l=list(df['Processes'])
# print(l)
st=set()
for i in l:
    if len(i)==0:
        continue
    if i.count("|")==0:
        st.add(i)
        continue
    
    temp=i.split("||")
    # print(temp)
    for j in temp:
        st.add(j)

print(st)
print(len(st))
    
