// Card.js
import React from 'react';
import './Card.css';

function Card({ product }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={product.imageUrl || "https://via.placeholder.com/150"} className='card-image' alt="Product" />
        <h1 className='card-title'>₹{product.price}</h1>
        <p className='text-sm'>{product.name}</p>
        <p className='card-description text-sm text-gray-500'>{product.description}</p>
      </div>
    </div>
  );
}

export default Card;
