import React from 'react'

export const ProductCard = props => {
  const { product } = props;

  return (
    <div className="product-card">
      <div className="card-img">
        <img src={product.image} alt={product.description}/>
      </div>
      <div className="card-text">
        <div className="product-title">{product.title}</div>
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  )
}
