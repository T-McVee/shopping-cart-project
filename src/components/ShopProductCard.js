import React, { useState } from 'react'
import { ProductCard } from './ProductCard';

export const ShopProductCard = props => {
  const { product, addToCart } = props;
  
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty(qty + 1);
  }

  const decreaseQty = () => {
    setQty(qty - 1);
  } 

  return (
    <>
    <div className="shop-product-card">
      <ProductCard product={product}/>
      <div className="buttons">
        <div className="product-qty">
          <div className="qty-btn left" onClick={() => decreaseQty()}>-</div>
          <input type="number" name="qty" id="productQty" className="qty-input" value={qty} onChange={e => setQty(e.target.value)}/>
          <div className="qty-btn right" onClick={() => increaseQty()}>+</div>
        </div>
        <div className="add-to-cart-btn" onClick={() => addToCart(product, qty)}>
          Gimmie!
        </div>
      </div>
    </div>
    </>
  )
}