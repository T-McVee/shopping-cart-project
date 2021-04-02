import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { CartProductCard } from './components/CartProductCard';

export const Cart = props => {
  const { cart, cartValue, removeFromCart } = props;

  

  return (
    <div className="page">
      <h1>Your cart</h1>
      <section className="cart-contentse">
        {cart.map(item => <CartProductCard product={item} removeFromCart={removeFromCart} key={uuid()} />)}
      </section>
      <section className="cart-details">
        <div className="total">
          Cart Total: ${cartValue}
        </div>
      </section>
    </div>
  )
}
