from flask import Flask,request,jsonify
from flask_cors import CORS
from models import db,Product
app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db.init_app(app)
CORS(app)
@app.route('/')
def home():
    return "API Running"
@app.route('/products',methods=['GET'])
def get_products():
    limit=request.args.get('limit',10,type=int)
    offset=request.args.get('offset',0,type=int)
    products=Product.query.offset(offset).limit(limit).all()
    return jsonify({
        "count":len(products),
        "products":[
            {
                "id":p.id,
                "name":p.name,
                "cost":p.cost,
                "retail_price":p.retail_price,
                "brand":p.brand,
                "department":p.department.name if p.department else None
            } for p in products 
        ],
    }),200
@app.route('/products/,int:products_id>',
           methods=['GET'])
def get_product_by_id(product_id):
    product=Product.query.get(product_id)
    if not product:
        return jsonify({"error":"product not found"}),404

    return jsonify({
                
                "name":product.name,
                "cost":product.cost,
                "retail_price":product.retail_price,
                "id":product.id,
                "brand":product.brand,
                "category":product.category,
                "department":product.department
    }),200
if __name__=='__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)    