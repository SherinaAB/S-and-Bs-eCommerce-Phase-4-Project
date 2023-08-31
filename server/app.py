#!/usr/bin/env python3

# Standard library imports
from flask import Flask
# Remote library imports
from flask import request, make_response, jsonify, session
from flask_restful import Api, Resource
# from flask_login import LoginManager, login_required, current_user
# Local imports
from config import app, db, api
from models import db, User, Product, Cart_Item, Shopping_Session, User_Payment
# Add your model imports


# Views go here!

# login_manager = LoginManager(app)
# login_manager.login_view = 'login'

# users = current_user.get_id()

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'

class Users(Resource):
    def get(self):
        users = [u.to_dict() for u in User.query.all()]
        return make_response(users, 200)
    
    def post(self):

        fields = request.get_json()

        try:
            username = fields['username']
            password = fields['password']
            email = fields['email']
            if username and password and email:
                new_user = User(username=username, password=password, email=email)
                new_user.password_hash = password
                
                db.session.add(new_user)
                db.session.commit()

                session['user_id'] = new_user.id
            
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 422)
        return make_response(new_user.to_dict(), 201)
    
    # def delete(self, id):
    #     user = User.query.filter_by(id=id).first()
    #     if user:
    #         db.session.delete(user)
    #         db.session.commit()
    #         return make_response(user.to_dict(), 200)
    #     else:
    #         return make_response({"errors": ["user not found"]}, 404)
        
class UserById(Resource):
    def get(self, id):
        user_by_id = User.query.filter_by(id=id).first()

        if user_by_id == None:
            user_by_id_dict = {"errors": ["user not found"]}
            return make_response(user_by_id_dict, 404)
        else:
            return make_response(user_by_id.to_dict(), 200)
    
    def patch(self, id):
        user_by_id = User.query.filter_by(id=id).first()

        if user_by_id == None:
            user_by_id_dict = {"errors": ["user not found"]}

            return make_response(user_by_id_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(user_by_id, attr, fields[attr])
                    db.session.add(user_by_id)
                    db.session.commit()
                return make_response(user_by_id.to_dict(), 200)    
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    
    def delete(self, id):
        user_by_id = User.query.filter_by(id=id).first()

        if user_by_id == None:
            user_by_id_dict = {"errors": ["user not found"]}

            return make_response(user_by_id_dict, 404)
        else:
            db.session.delete(user_by_id)
            db.session.commit()
            user_by_id_dict = {}
            return make_response(user_by_id.to_dict(), 200)

class Login(Resource):
    def post(self):
        login = request.get_json()
        username = login['username']
        password = login['password']
        user = User.query.filter(User.username == username).first()
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200
        return {'error': 'Unauthorized'}, 401
    
class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {'message':'204: No Content'}
    
class Products(Resource):
    def get(self):
        products = [p.to_dict() for p in Product.query.all()]
        return make_response(products, 200)
    
    def post(self):
        fields = request.get_json()

        try:
            name = fields['name']
            desc = fields['desc']
            sku = fields['sku']
            long_desc = fields['long_desc']
            price = fields['price']
            inventory = fields['inventory']
            if name and desc and price:
                new_product = Product(name=name, desc=desc, sku=sku, long_desc=long_desc, price=price, inventory=inventory)
                db.session.add(new_product)
                db.session.commit()
                return make_response(new_product.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 422)
        
class ProductsById(Resource):
    def get(self, id):
        products = Product.query.filter_by(id=id).first()
  
        if products == None:
            products_dict = {"errors": ["user not found"]}
            return make_response(products_dict, 404)
        else:
            return make_response(products.to_dict(), 200)
      
    def patch(self, id):
        products = Product.query.filter_by(id=id).first()

        if products == None:
            products_dict = {"errors": ["user not found"]}

            return make_response(products_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(products, attr, fields[attr])
                    db.session.add(products)
                    db.session.commit()
                return make_response(products.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        products = Product.query.filter_by(id=id).first()

        if products == None:
            products_dict = {"errors": ["user not found"]}

            return make_response(products_dict, 404)
        else:
            db.session.delete(products)
            db.session.commit()
            products_dict = {}
            return make_response(products.to_dict(), 200)

class User_Payments(Resource):
    def get(self):
        payments = [p.to_dict() for p in User_Payment.query.all()]
        return make_response(payments, 200)
    
    def post(self):
        payments = User_Payment.query.filter(User.id == session.get('user_id')).first()
        if payments:
            return payments.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401
    
class User_PaymentsById(Resource):
    def get(self, id):
        payments = User_Payment.query.filter_by(id=id).first() 

        if payments == None:
            payments_dict = {"errors": ["user not found"]}       
            return make_response(payments_dict, 404)
        else:
            return make_response(payments.to_dict(),200)

    def patch(self, id):
        payments = User_Payment.query.filter_by(id=id).first()

        if payments == None:
            payments_dict = {"errors": ["user not found"]}

            return make_response(payments_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(payments, attr, fields[attr])
                    db.session.add(payments)
                    db.session.commit()
                return make_response(payments.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
                
    def delete(self):
        session['user_id'] = None
        return {'message':'204: No Content'}

class Cart_Items(Resource):
    def get(self):
        cart = [c.to_dict() for c in Cart_Item.query.all()]
        return make_response(cart, 200)
    
    def post(self):
        fields = request.get_json()

        try:
            qty = fields['quantity']





            if qty:
                new_qty = Cart_Item(qty=qty)

                db.session.add(new_qty)
                db.session.commit()
                return make_response(new_qty.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 422)
        
class Cart_ItemsById(Resource):
    def get(self, id):
        cart = Cart_Item.query.filter_by(id=id).first()
  
        if cart == None:
            cart_dict = {"errors": ["user not found"]}
            return make_response(cart_dict, 404)
        else:
            return make_response(cart.to_dict(), 200)
      
    def patch(self, id):
        cart = Cart_Item.query.filter_by(id=id).first()

        if cart == None:
            cart_dict = {"errors": ["user not found"]}

            return make_response(cart_dict, 404)
        else: 
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(cart, attr, fields[attr])
                    db.session.add(cart)
                    db.session.commit()
                return make_response(cart.to_dict(), 200)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 422)
            
    def delete(self, id):
        cart = Cart_Item.query.filter_by(id=id).first()

        if cart == None:
            cart_dict = {"errors": ["user not found"]}

            return make_response(cart_dict, 404)
        else:
            db.session.delete(cart)
            db.session.commit()
            cart_dict = {}
            return make_response(cart.to_dict(), 200)
        
api.add_resource(Users, '/users')
api.add_resource(UserById, '/users/<int:id>')
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Logout, '/logout')
api.add_resource(Products, '/products')
api.add_resource(ProductsById, '/products/<int:id>')
api.add_resource(User_Payments, '/user_payments')
api.add_resource(User_PaymentsById, '/user_payments/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)