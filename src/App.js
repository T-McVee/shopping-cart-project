import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';
import { Nav } from './components/Nav';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';

function App() {

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartValue, setCartValue] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

 
  const getProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    setProducts(products);
    //console.log(products);
  }

  const addToCart = (product, qty) => {
    const newCart = cart
    
    // check if product is already in cart
    const itemIndex = newCart.findIndex(item => item.product === product)
    console.log('itemIndex:', itemIndex)

    // if no - create object containing props for product and qty
    if (itemIndex < 0) {
      newCart.push({
        product: product,
        qty: qty,
        value: product.price * qty,
      })

    } else {
      // if yes - update qty
      newCart[itemIndex].qty += qty;
      newCart[itemIndex].value = product.price * newCart[itemIndex].qty;
    }
    
    setCart(newCart)
    cartItemCount();
    cartTotal()
  }

  const removeFromCart = (product) => {
    const newCart = cart;
    const itemToRemove = newCart.findIndex(item => item.product.id === product.id);
    newCart.splice(itemToRemove, 1)
    
    setCart(newCart);
    cartItemCount();
    cartTotal();
  }
  
  const cartItemCount = () => {
    const numberOfItems = cart.reduce((total, item) => {
      return total + item.qty
    }, 0)

    setCartCount(numberOfItems);
  }
  
  const cartTotal = () => {
    /* const itemValues = cart.map(item => item.value);
    let cartTotalValue = 0; */

    const cartTotalValue = cart.reduce((total, item) => {
      return total + item.value
    }, 0).toFixed(2);
    
    console.log('cart value:', cartTotalValue)
    setCartValue(cartTotalValue)
  }


  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav cartCount={cartCount}/>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop products={products} addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} cartValue={cartValue}/>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
