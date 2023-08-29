#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User

def create_database():
 with app.app_context():
        db.create_all()

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        # create_database()
        for _ in range(15):
            u = User(
                username = fake.name(),
                password_hash = "123abc", 
                first_name = fake.name(),
                last_name = fake.name(),
                email = fake.email(),
                phone = fake.phone_number(),
                role = rc(["admin", "user"]),
            )
            db.session.add(u)
            db.session.commit()