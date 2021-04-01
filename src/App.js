import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';
import { Nav } from './components/Nav';
import { Home } from './Home';
import { Shop } from './Shop';

function App() {

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, []);

 

  const getProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    setProducts(products);
    console.log(products);
  }

  const addToCart = (product) => {
    const newCart = cart
    newCart.push(product)
    setCart(newCart)
    setCartCount(cart.length)
    console.log(cart.length);
  }

  const removeFromCart = () => {
    // remove specified item from cart array
  }
  
  // numberOfItemsInCart()
  
  // totalCart()


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
        </div>
      </Switch>
    </Router>
  );
}

export default App;
