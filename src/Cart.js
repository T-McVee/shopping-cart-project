import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { CartProductCard } from './components/CartProductCard';
import { ProductCard } from './components/productCard/ProductCard';
import { ProductCardAttributes } from './components/productCard/ProductCardAttributes';
import { ProductCardButtons } from './components/productCard/ProductCardButtons';

export const Cart = props => {
  const { cart, cartValue, removeFromCart } = props;

  

  return (
    <div className="page">
      <h1>Your cart</h1>

      <section className="cart-contentse">
        {cart.map(item => (
          <ProductCard 
            product={item.product} 
            removeFromCart={removeFromCart} 
            key={uuid()} 
          >
            <ProductCardAttributes>
              <div className="cart-product-qty">{item.qty}</div> 
              <div className="cart-product-value">${item.value}</div> 
            </ProductCardAttributes>
            <ProductCardButtons>
            <div className="remove-item" onClick={() => removeFromCart(item.product)}>x</div>
            </ProductCardButtons>
          </ProductCard>
        ))}
      </section>

      <section className="cart-summary">
        <div className="total">
          Cart Total: ${cartValue}
        </div>
      </section>
    </div>
  )
}
