// src/components/ProductList.js
import React, { useState } from 'react';
import { addToCart } from '../utils/cartUtils';

// src/components/ProductList.js
import './ProductList.css';
// rest of the ProductList code...

const products = [
  { id: 1, name: 'Product 1', price: 25 },
  { id: 2, name: 'Product 2', price: 40 },
  { id: 3, name: 'Product 3', price: 30 },
];

function ProductList() {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
