import uuid from 'react-uuid';
import { CartProductCardV2 } from './components/productCard/CartProductCardV2';
import { ProductCard } from './components/productCard/ProductCard';
import { ProductCardAttributes } from './components/productCard/ProductCardAttributes';
import { ProductCardButtons } from './components/productCard/ProductCardButtons';
import { ProductQtyInput } from './components/productCard/ProductQtyInput';

export const Cart = props => {
  const { 
    cart, 
    cartValue, 
    removeFromCart, 
    updateProductQty, 
  } = props;

  const increaseQty = (itemQty) => {
    
  }

  const decreaseQty = (e) => {

  }

  return (
    <div className="page">
      <h1>Your cart</h1>

      <section className="cart-contentse">
        {cart.map(item => (
          <CartProductCardV2 
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
