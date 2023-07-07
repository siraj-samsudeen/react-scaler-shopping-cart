import React from 'react';
export function Product({ image, title, price }) {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <p className="product-title">{title}</p>
      <p>Rs. {price}</p>
    </div>
  );
}
