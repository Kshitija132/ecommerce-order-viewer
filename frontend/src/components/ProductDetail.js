import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="container mt-4">
      <h3>{product.name}</h3>
      <p><strong>Cost:</strong> R{product.cost}</p>
      <p><strong>Retail Price:</strong> R{product.retail_price}</p>
      <p><strong>Department:</strong> {product.department}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <Link to="/products" className="btn btn-secondary">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
