import pandas as pd
import app as app
from models import db,Product
df=pd.read_csv("C:\Users\Newpc\Downloads\archive\archive\products.csv")
with app.app_context():
    for _,row in df.iterrows():
        product=Product(
            id=int(row['id']),
            name=row['name'],
            cost=float(row['cost']),
            retail_price=float(row['retail_price']),
            category=row.get('category'),
            brand=row.get('brand'),
            department=row.get('department'),
            sku=row.get('sku'),
    distribution_center_id=str(row.get('distribution_center_id'))        
        )
        db.session.add(product)
        db.session.commit()
        print("loaded!")