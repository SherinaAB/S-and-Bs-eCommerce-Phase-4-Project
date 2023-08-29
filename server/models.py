from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db  

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

Models go here!
class Product_Category(db.Model):
    __tablename__ = 'category'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    desc = db.Column(db.String(255))
    # products = db.relationship('Product', secondary='', back_populate=db.)

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    desc = db.Column(db.String(255))
    sku = db.Column(db.Integer)
    copy = db.Column(db.String(500))
    price = db.Column(db.Float)
    inventory = db.Column(db.Integer)
    product_category_id = db.Column(db.Integer)

class Cart_Item(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    qty = db.Column(db.Integer, nullable=False)
    session_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)
    product_id = db.Column(db.Integer)

class Shopping_Session(db.Model):
    __tablename__ ='shopping_sessions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    total = db.Column(db.Float)

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255))
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    email = db.Column(db.String(255))
    phone = db.Column(db.Integer)
    role = db.Column(db.String(255))

class User_Payment(db.Model):
    __tablename__ = 'payments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    payment_type = db.Column(db.String(255))
    provider = db.Column(db.String(255))
    account_no = db.Column(db.Integer(100))
    expiry = db.Column(db.Date)




