import React from 'react'
import { ProductCard } from './ProductCard';

export const ShopProductCard = props => {
  const { product, addToCart } = props;

  return (
    <div className="cart-product-card" onClick={() => addToCart(product)}>
      <ProductCard product={product}/>
      <div className="modify-btns">
        <div className="remove-item">x</div>
      </div>
    </div>
  )
}