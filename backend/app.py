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

    return -1


if __name__ == '__main__':

    app.run(debug=True)