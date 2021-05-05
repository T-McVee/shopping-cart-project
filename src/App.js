import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';
import { Nav } from './components/Nav';
import { Home } from './Home';
import { Shop } from './Shop';
import { Cart } from './Cart';

function App() {

  const [cart, setCart] = useState({
    contents:[], 
    itemCount: () => cart.contents.reduce((total, item) => {
      return total + item.qty
    }, 0),
    cartTotal: () => cart.contents.reduce((total, item) => {
      return total + item.value
    }, 0).toFixed(2),
  });
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
 
  const getProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    setProducts(products);
  }

  const getCategories = async () => {
    const data = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await data.json();
    categories.unshift("all")
    setCategories(categories);
  }

  
  const addToCart = (product, qty) => {
    const newCart = {}
    Object.assign(newCart, cart);
    
    // check if product is already in cart
    const itemIndex = newCart.contents.findIndex(item => item.product.id === product.id)
    
    if (itemIndex < 0) {
      // if no - create object containing props for product and qty
      newCart.contents.push({
        product: product,
        qty: qty,
        value: product.price * qty,
      })

    } else {
      // if yes - update qty
      newCart.contents[itemIndex].qty += qty;
      newCart.contents[itemIndex].value = product.price * newCart.contents[itemIndex].qty;
    }
    
    setCart(newCart);
  }

  const removeFromCart = (product) => {
    const newCart = {};
    Object.assign(newCart, cart);

    const itemToRemove = newCart.contents.findIndex(item => item.product.id === product.id);
    newCart.contents.splice(itemToRemove, 1)
    
    setCart(newCart);
  }

  const updateProductQty = (product, newQty) => {
    const newCart = {};
    Object.assign(newCart, cart)

    const itemIndex = newCart.contents.findIndex(item => item.product.id === product.id)
    
    newCart.contents[itemIndex].qty = newQty;
    newCart.contents[itemIndex].value = product.price * newCart.contents[itemIndex].qty;

    if (newCart.contents[itemIndex].qty < 1) {
      removeFromCart(product);
    }

    setCart(newCart);
  }


  return (
    <Router>
      <div className="App">
        <Nav cartCount={cart.itemCount()} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/shop">
              <Shop products={products} categories={categories} addToCart={addToCart} />
            </Route>
            <Route path="/cart">
              <Cart
                cart={cart} 
                removeFromCart={removeFromCart} 
                updateProductQty={updateProductQty}
              />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
