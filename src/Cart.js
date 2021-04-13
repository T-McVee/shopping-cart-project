import uuid from 'react-uuid';
import { CartProductCard } from './components/productCard/CartProductCard';

export const Cart = props => {
  const { 
    cart, 
    cartValue, 
    removeFromCart, 
    updateProductQty, 
  } = props;

  return (
    <div id="cart" className="page page-shop">
      <header>
        <h1>Your cart</h1>
      </header>
      <section className="cart-contentse">
        {cart.map(item => (
          <CartProductCard 
            product={item} 
            removeFromCart={removeFromCart} 
            updateProductQty={updateProductQty}
            key={uuid()} 
          />
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
