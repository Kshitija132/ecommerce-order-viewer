from flask_sqlalchemy import SQLAlchemy
db=SQLAlchemy()
class Department(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100),
                   unique=True,nullable=False)
class Product(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(200),nullable=False)
    retail_price=db.Column(db.Float,nullable=False)
    cost=db.Column(db.Float,nullable=False)
    category=db.Column(db.String(100))
    brand=db.Column(db.String(100))
    sku=db.Column(db.String(100))
    distribution_center_id=db.Column(db.String(10))
    department_id=db.Column(db.Integer,db.ForeignKey('department.id'))
    department=db.relationship('Department',backref='products')