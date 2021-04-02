import React from 'react'
import { ProductCard } from './ProductCard';

export const CartProductCard = props => {
  const { product, removeFromCart } = props;

  return (
    <div className="cart-product-card">
      <ProductCard product={product}/>
      <div className="modify-btns">
        <div className="remove-item" onClick={() => removeFromCart(product)}>x</div>
      </div>
    </div>
  )
}
