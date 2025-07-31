function ProductCard({product}){
    return(
        <div className="card">
            <h4>{product.name}</h4>
            <p>{product.brand}</p>
            <p>{product.retail_price}</p>
        </div>
    );}
}