import React from 'react'
import { ProductCard } from './ProductCard';

export const ShopProductCard = props => {
  const { product, addToCart } = props;
  

  return (
    <>
    <div className="shop-product-card">
      <ProductCard product={product}/>
      <div className="buttons">
        <div className="product-qty">
          <div className="qty-btn left">-</div>
          <input type="number" name="qty" id="productQty" className="qty-input" value="1"/>
          <div className="qty-btn right">+</div>
        </div>
        <div className="add-to-cart-btn" onClick={() => addToCart(product, 1)}>
          Gimmie!
        </div>
      </div>
    </div>
    </>
  )
}