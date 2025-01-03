import threading
from flask import *
from flask.globals import request
import json
import time
import random
import csv
import datetime
from pymongo import MongoClient
import secrets
import os
from dotenv import load_dotenv

load_dotenv()

DBURI = os.getenv('DATABASE_URI')

app = Flask(__name__)


client = MongoClient(DBURI)
db = client["Food"]
collection = db["Data"]


@app.route('/addMeal', methods=['POST'])
def addMeal():
    try:
        data = request.json
        # bullets = data.get("recipe", [])
        # print(data)
        collection.insert_one(data)
        
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/generateList', methods=['GET', 'POST'])
def generateList():
    try:
        data = request.json
        # layout for json
        # {"mealCount: [2, 4, 3], tags: [["quick", "oven"], ["pasta"], ["complex"]]"}

        # approach 1
        # for each row
        # return query results for tags
        # randomly select X amount and put in hashmap
        # do for all of them, making sure there is no duplicate meals

        # approach 2
        # for each row return query
        # get all queries and remove any overlaps / duplicates of meals
        # then randomly select from each one - this makes more sense
        queries = len(data["mealCount"])
        mealsSeen = set()
        for i in range(queries):
            # perform query here
            pass
        


        return -1
    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':

    app.run(debug=True)
