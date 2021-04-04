import React from 'react'

export const ProductCard = props => {
  const { product, children } = props;

  return (
    <div className="product-card">
      <div className="card-img">
        <img src={product.image} alt={product.description}/>
      </div>
      <div className="card-details">
        {children}
      </div>
    </div>
  )
}