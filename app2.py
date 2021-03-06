import pandas as pd
import numpy as np
import sqlalchemy
from sqlalchemy import create_engine, inspect
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import sqlite3
import json
import requests
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# read csv & clean data
lifecsv = pd.read_csv("Life Expectancy (years) by Country.csv", encoding='latin1')

lifecsv = lifecsv.drop(columns=['Series Name','Series Code'])

lifecsv = lifecsv.rename(columns={'1999 [YR1999]':'1999','2000 [YR2000]':'2000','2001 [YR2001]':'2001','2002 [YR2002]':'2002','2003 [YR2003]':'2003','2004 [YR2004]':'2004','2005 [YR2005]':'2005','2006 [YR2006]':'2006','2007 [YR2007]':'2007','2008 [YR2008]':'2008','2009 [YR2009]':'2009','2010 [YR2010]':'2010','2011 [YR2011]':'2011','2012 [YR2012]':'2012','2013 [YR2013]':'2013','2014 [YR2014]':'2014','2015 [YR2015]':'2015','2016 [YR2016]':'2016','2017 [YR2017]':'2017'})

lifecsv = lifecsv.dropna()

# connect to db

engine = create_engine("sqlite:///life.sqlite")
conn = engine.connect()

session = Session(engine)

Base = automap_base()

Base.prepare(engine, reflect=True)

Life = Base.classes.life

life_db = pd.read_sql("SELECT * FROM life", conn)

# Flask setup

app = Flask(__name__)

@app.route ("/")
def home():
    return render_template("index3.html")


@app.route("/api/v1.0/lifedata")
def data():
    session = Session(engine)
    results = session.query(Life.Country_Name, Life.Country_Code, Life.Yr1999, Life.Yr2000,Life.Yr2001,Life.Yr2002,Life.Yr2003,Life.Yr2004,Life.Yr2005,Life.Yr2006,Life.Yr2007,Life.Yr2008,Life.Yr2009,Life.Yr2010,Life.Yr2011,Life.Yr2012,Life.Yr2013,Life.Yr2014,Life.Yr2015,Life.Yr2016,Life.Yr2017).all()

    country_data = []
    for name, code, y99, y00, y01, y02, y03, y04, y05, y06,y07,y08,y09,y10,y11,y12,y13,y14,y15,y16,y17 in results:
        country_dict = {}
        country_dict['Country Name'] = name
        country_dict['Country Code'] = code
        country_dict['1999'] = y99
        country_dict['2000'] = y00
        country_dict['2001'] = y01
        country_dict['2002'] = y02
        country_dict['2003'] = y03
        country_dict['2004'] = y04
        country_dict['2005'] = y05
        country_dict['2006'] = y06
        country_dict['2007'] = y07
        country_dict['2008'] = y08
        country_dict['2009'] = y09
        country_dict['2010'] = y10
        country_dict['2011'] = y11
        country_dict['2012'] = y12
        country_dict['2013'] = y13
        country_dict['2014'] = y14
        country_dict['2015'] = y15
        country_dict['2016'] = y16
        country_dict['2017'] = y17
        country_data.append(country_dict)

    return jsonify(country_data)

@app.route("/api/v1.0/incomedata")
def incomedata():

    country_codes = []
    for row in life_db['Country_Code']:
        country_codes.append(row)

    country_names = []
    for row in life_db['Country_Name']:
        country_names.append(row)

    count = 0

    income_list = []

    for code in country_codes:
        country_code = code
        url = 'http://api.worldbank.org/v2/country/'+ country_code + '?format=json'
        response = requests.get(url).json()
        income_dict = {}
        if response[1][0]['incomeLevel']['value'] != 'Aggregates':
            income_dict['Country_Name'] = country_names[count]
            income_dict['Income_Level'] = response[1][0]['incomeLevel']['value']
            income_dict['Lat'] = response[1][0]['latitude']
            income_dict['Lng'] = response[1][0]['longitude']
            income_list.append(income_dict)
        count +=1
    
    return jsonify(income_list)

@app.route("/api/v1.0/<country>")
def country(country):
    session = Session(engine)
    liferesults = session.query(Life.Country_Name, Life.Country_Code, Life.Yr1999, Life.Yr2000,Life.Yr2001,Life.Yr2002,Life.Yr2003,Life.Yr2004,Life.Yr2005,Life.Yr2006,Life.Yr2007,Life.Yr2008,Life.Yr2009,Life.Yr2010,Life.Yr2011,Life.Yr2012,Life.Yr2013,Life.Yr2014,Life.Yr2015,Life.Yr2016,Life.Yr2017).filter(Life.Country_Code == country)

    country_data = []
    for name, code, y99, y00, y01, y02, y03, y04, y05, y06,y07,y08,y09,y10,y11,y12,y13,y14,y15,y16,y17 in liferesults:
        if code == country:
            country_dict = {}
            country_dict['Country_Name'] = name
            country_dict['Country_Code'] = code
            country_dict['Yr1999'] = y99
            country_dict['Yr2000'] = y00
            country_dict['Yr2001'] = y01
            country_dict['Yr2002'] = y02
            country_dict['Yr2003'] = y03
            country_dict['Yr2004'] = y04
            country_dict['Yr2005'] = y05
            country_dict['Yr2006'] = y06
            country_dict['Yr2007'] = y07
            country_dict['Yr2008'] = y08
            country_dict['Yr2009'] = y09
            country_dict['Yr2010'] = y10
            country_dict['Yr2011'] = y11
            country_dict['Yr2012'] = y12
            country_dict['Yr2013'] = y13
            country_dict['Yr2014'] = y14
            country_dict['Yr2015'] = y15
            country_dict['Yr2016'] = y16
            country_dict['Yr2017'] = y17

    country_codes = []
    for row in life_db['Country_Code']:
        country_codes.append(row)

    for code in country_codes:
        if code == country_dict['Country_Code']:
            url = 'http://api.worldbank.org/v2/country/'+ code + '?format=json'
            response = requests.get(url).json()

            if response[1][0]['incomeLevel']['value'] != 'Aggregates':
                country_dict['Income_Level'] = response[1][0]['incomeLevel']['value']
                country_dict['Lat'] = response[1][0]['latitude']
                country_dict['Lng'] = response[1][0]['longitude']

            country_data.append(country_dict)

    return jsonify(country_data)

@app.route("/map")
def map():
    return render_template('index2.html')

@app.route("/chart")
def chart():
    return render_template('index4.html')

if __name__ == "__main__":
    app.run()
