#!/usr/bin/env python3

# Standard library imports
from flask import Flask, make_response, jsonify
# Remote library imports
from flask import request
from flask_restful import Resource, Api
from flask_migrate import Migrate
import os
# Local imports
from config import app, db, api
# Add your model imports
from models import db, Product_Category, Product, Cart_Item, Shopping_Session, User, User_Payment

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)

# Views go here!

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5000, debug=True)

