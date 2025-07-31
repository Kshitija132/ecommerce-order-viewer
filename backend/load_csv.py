import pandas as pd
from app import app
from models import db,Product,Department
df=pd.read_csv("products.csv")
df=df[df['department'].notna()]
with app.app_context():
    db.session.query(Product).delete()
    db.session.query(Department).delete()
    department_names=df["department"].unique()
    dept_map={}
    for name in department_names:
        dept=Department(name=name)
        db.session.add(dept)
        db.session.flush()
        dept_map[name]=dept.id
    for _,row in df.iterrows():
        dept_id=dept_map.get(["department"])
        if not dept_id:
            continue
        product=Product(
            id=int(row['id']),
            name=row['name'],
            cost=float(row['cost']),
            retail_price=float(row['retail_price']),
            category=row.get('category'),
            brand=row.get('brand'),
            sku=row.get('sku'),
    distribution_center_id=str(row.get('distribution_center_id')) ,
    department_id=dept_id       
        )
        db.session.add(product)
        db.session.commit()
        print("Departments loaded!")