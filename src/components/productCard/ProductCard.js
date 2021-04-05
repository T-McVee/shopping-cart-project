import React, { useState } from 'react';
import { ProductQtyInput } from './ProductQtyInput';

export const ProductCard = props => {
  const { product, children } = props;

  const [qty, setQty] = useState(1);

  return (
    <div className="product-card">
      <div className="card-img">
        <img src={product.image} alt={product.description}/>
      </div>
      <div className="card-details">
        {children}
      <ProductQtyInput qty={1} setQty={setQty} />
      </div>
    </div>
  )
}