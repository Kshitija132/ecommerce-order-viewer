import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <h4 className="card-title">{product.name}</h4>
      <p className="card-brand">{product.brand}</p>
      <p className="card-price">
        ${product.retail_price.toFixed(2)}
      </p>
    </div>
  );
}

export default ProductCard;
