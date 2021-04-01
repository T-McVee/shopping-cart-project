import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';
import { Nav } from './components/Nav';
import { Home } from './Home';
import { Shop } from './Shop';

function App() {

  const [cart, setCart] = useState([]);
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

  // addToCart()

  // removeFromCart()
  
  // numberOfItemsInCart()
  
  // totalCart()


  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav cart={cart}/>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop products={products} />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
