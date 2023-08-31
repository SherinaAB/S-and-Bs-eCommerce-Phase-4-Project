#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Product, User, Cart_Item, Shopping_Session, User_Payment

def create_database():
 with app.app_context():
        db.create_all()

def create_products():
    products = []
    image = ["https://cdn.shopify.com/s/files/1/0568/1132/3597/products/q1f3ss2bzxpp3l2ubxah_600x600.jpg?v=1691012794",'https://creations.mattel.com/cdn/shop/products/ceifjw9jookgvrixoxbc.jpg?v=1692377787','https://creations.mattel.com/cdn/shop/products/a4v1otoem9ric3p0fbsq.jpg?v=1690567879','https://cdn.shopify.com/s/files/1/0568/1132/3597/files/HYC86_Apliiq_White_Hat_044_600x600.jpg?v=1685497815','https://creations.mattel.com/cdn/shop/files/HYC94_Apliiq_Jean_Jacket_Front_009.jpg?v=1685556765','https://creations.mattel.com/cdn/shop/products/FUNBOY-BARBIE-ICONIC-B-POOL-FLOAT.1-min_1.jpg?v=1689701454','https://creations.mattel.com/cdn/shop/products/urd6b13byyhdhemys53s.jpg?v=1686156891','https://cdn.shopify.com/s/files/1/0568/1132/3597/files/HYM61_Tshirt_HiKen_Blue_02_600x600.jpg?v=1690309476']
    for _ in range(50):
        p = Product(
            name = fake.name(),
            desc = fake.text(),
            sku = fake.ean(length=13),
            long_desc = fake.text(),
            price = randint(1, 1000000),
            inventory = randint(1, 1000000),
            user_id = randint(1, 15),
            image = rc(image),
        )
        products.append(p)
    return products

def create_users():
    users = []
    for _ in range(15):
        u = User(
            username = fake.name(),
            password_hash = "123abc", 
            first_name = fake.name(),
            last_name = fake.name(),
            email = fake.email(),
            phone = fake.phone_number(),
            role = rc(["admin", "user"]),
            user_payment_id = randint(1, 1000000),
        )
        users.append(u)
    return users

def create_shopping_sessions():
    sessions = []
    for _ in range(15):
        s = Shopping_Session(
            total = randint(1, 1000000),
            user_id = randint(1, 15),
            cart_id = randint(1, 50),
        )
        sessions.append(s)
    return sessions

def create_cart_items():
    items = []
    for _ in range(15):
        i = Cart_Item(
            qty = randint(1, 100),
            user_id = randint(1, 15),
            product_id = randint(1, 50),
        )
        items.append(i)
    return items

def create_user_payments():
    payments = []
    for _ in range(15):
        p = User_Payment(
            # amount = randint(1, 1000000),
            payment_type = rc(["credit", "debit"]),
            provider = rc(["stripe", "paypal"]),
            account_no = randint(14, 16),
            expiry = fake.date_between(start_date="today",end_date="+10y"),
            user_id = randint(1, 15),
            )
        payments.append(p)
    return payments



if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        # create_database()
        # for _ in range(15):
        #     u = User(
        #         username = fake.name(),
        #         password_hash = "123abc", 
        #         first_name = fake.name(),
        #         last_name = fake.name(),
        #         email = fake.email(),
        #         phone = fake.phone_number(),
        #         role = rc(["admin", "user"]),
        #     )
        print("Clearing database...")
        Product.query.delete()
        User.query.delete()
        Cart_Item.query.delete()
        Shopping_Session.query.delete()
        User_Payment.query.delete()

        print("Seeding products...")
        products = create_products()
        db.session.add_all(products)
        db.session.commit()

        print("Seeding users...")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print("Seeding shopping sessions...")
        sessions = create_shopping_sessions()
        db.session.add_all(sessions)
        db.session.commit()

        print("Seeding cart items...")
        items = create_cart_items()
        db.session.add_all(items)
        db.session.commit()

        print("Seeding user payments...")
        payments = create_user_payments()
        db.session.add_all(payments)
        db.session.commit()

        print("Done seeding!")