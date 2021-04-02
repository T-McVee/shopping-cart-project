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
  }

  const addToCart = (product, qty) => {
    const newCart = cart
    
    for (let i = 0; i < qty; i++) {
      newCart.push(product)
    }
    
    setCart(newCart)
    setCartCount(cart.length)
    cartTotal()
  }

  const removeFromCart = (product) => {
    const newCart = cart;
    const itemToRemove = newCart.findIndex(item => item.id === product.id);
    newCart.splice(itemToRemove, 1)
    
    setCart(newCart)
    setCartCount(cart.length)
    cartTotal();
  }
  
  
  const cartTotal = () => {
    const itemValues = cart.map(item => item.price);
    let cartTotalValue = 0;

    if (itemValues > 0.01) {
      cartTotalValue = itemValues.reduce((total, current) => {
        return total + current
      }).toFixed(2);
    }

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
