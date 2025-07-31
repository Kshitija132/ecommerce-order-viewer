from flask import Flask
from models import db,Product
app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db.init_app(app)
@app.route('/')
def home():
    return "API Running"
@app.route('/products')
def list_products():
    products=Product.query.limit(5).all()
    return{
        "products":[
            {
                "id":p.id,
                "name":p.name,
                "cost":p.cost,
                "price":p.retail_price
            } for p in products
        ]
    }