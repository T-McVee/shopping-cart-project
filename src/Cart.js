import React from 'react';
import { CartProductCard } from './components/CartProductCard';

export const Cart = props => {
  const { cart, removeFromCart } = props;

  return (
    <div className="page">
      <h1>Your cart</h1>
      <section className="cart-contentse">
        {cart.map(item => <CartProductCard product={item} removeFromCart={removeFromCart} key={item.id} />)}
      </section>
    </div>
  )
}
