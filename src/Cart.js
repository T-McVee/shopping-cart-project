import uuid from 'react-uuid'
import { CartProductCard } from './components/productCard/CartProductCard'

export const Cart = props => {
  const { 
    cart, 
    removeFromCart, 
    updateProductQty, 
  } = props;

  return (
    <div id="cart" className="page page-cart">
      <header>
        <h1>Your cart</h1>
      </header>
      <main>
        <section className="cart-contentse">
          {cart.contents.map(item => (
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
            Cart Total: ${cart.cartTotal()}
          </div>
          <div className="btn btn-lg" onClick={() => alert('Oops')}>Checkout</div>
        </section>
      </main>
    </div>
  )
}
