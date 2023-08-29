from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
from sqlalchemy import MetaData
from sqlalchemy.orm import validates, relationship
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt

# metadata = MetaData(naming_convention={
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
# })

# db = SQLAlchemy(metadata=metadata)

# Models go here!
# class Product_Category(db.Model):
#     __tablename__ = 'category'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255))
#     desc = db.Column(db.String(255))    

class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    desc = db.Column(db.String(255))
    sku = db.Column(db.Integer)
    copy = db.Column(db.String(500))
    price = db.Column(db.Float)
    inventory = db.Column(db.Integer)
    # product_category_id = db.Column(db.Integer)
    # user_id=db.Column(db.Integer,db.ForeignKey('users.id'))
    # category_relationship = db.relationship('Category', back_populates="product_relationship", cascade="all, delete")
    user_relationship = db.relationship('User', back_populates="product_relationship", cascade="all, delete")
    # cart_relationship = db.relationship('Cart_Item', back_populates="product_relationship",cascade="all, delete")

    serialize_rules = ('-user_relationship',)

class Cart_Item(db.Model, SerializerMixin):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    qty = db.Column(db.Integer, nullable=False)

    product_id=db.Column(db.Integer,db.ForeignKey('products.id'))
    user_id=db.Column(db.Integer,db.ForeignKey('users.id'))
    # session_id=db.Column(db.Integer,db.ForeignKey('shopping_sessions.id'))

    product_relationship = db.relationship('Product', back_populates="cart_relationship")
    user_relationship = db.relationship('User', back_populates="cart_relationship",primaryjoin="Product.user_id==User.id")
    session_relationship = db.relationship('Shopping_Session', back_populates="cart_relationship")
    

    serialize_rules = ('-session_relationship', '-product_relationship',)

class Shopping_Session(db.Model, SerializerMixin):
    __tablename__ ='shopping_sessions'

    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.Float)

    user_id=db.Column(db.Integer,db.ForeignKey('users.id'))
    cart_id = db.Column(db.Integer,db.ForeignKey('cart_items.id'))

    user_relationship = db.relationship('User', back_populates="session_relationship")
    cart_relationship = db.relationship('Cart_Item', back_populates="session_relationship")

    serialize_rules = ('-user_relationship', '-cart_relationship',)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable = False, unique = True)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    email = db.Column(db.String(255))
    phone = db.Column(db.Integer)
    role = db.Column(db.String(255))
    # product_id=db.Column(db.Integer,db.ForeignKey('products.id'))
    _password_hash = db.Column(db.String, nullable=False)

    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        # utf-8 encoding and decoding is required in python 3
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    def __repr__(self):
        return f"<User {self.username}>"

    user_payment_id=db.Column(db.Integer,db.ForeignKey('payments.id'))

    product_relationship = db.relationship('Product', back_populates="user_relationship", cascade="all, delete")
    payment_relationship = db.relationship('User_Payment', back_populates="user_relationship", cascade="all, delete")

    serialize_rules = ('-payment_relationship','product_relationship',)


class User_Payment(db.Model, SerializerMixin):
    __tablename__ = 'payments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    payment_type = db.Column(db.String(255))
    provider = db.Column(db.String(100))
    account_no = db.Column(db.Integer())
    expiry = db.Column(db.Date)
    user_relationship = db.relationship('User', back_populates="payment_relationship")