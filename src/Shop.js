import React, { useState } from 'react';
import uuid from 'react-uuid';
/* import { ShopProductCard } from './components/ShopProductCard'; */
import { ProductCard } from './components/productCard/ProductCard';
import { ProductCardAttributes } from './components/productCard/ProductCardAttributes';
import { ProductCardButtons } from './components/productCard/ProductCardButtons';

export const Shop = props => {
  const {products, addToCart} = props;
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [qty, setQty] = useState(1);

  const filterProducts = (x) => {
      const filteredProducts = products.filter(prod => prod.category === x)
      setFilteredProducts(filteredProducts);
    
    return '';
  }

  const increaseQty = () => {
    setQty(qty + 1);
  }

  const decreaseQty = () => {
    setQty(qty - 1);
  } 

  return (
    <div id="shop" className="page page-shop">
      <h1>Buy things</h1>
      <section className="categories">
        <div className="category" onClick={() => filterProducts('men clothing')}>Men's Clothing</div>
        <div className="category" onClick={() => filterProducts('women clothing')}>Women's Clothing</div>
        <div className="category" onClick={() => filterProducts('jewelery')}>Jewlery</div>
        <div className="category" onClick={() => filterProducts('electronics')}>Electronics</div>
      </section>
      <section className="product-feed">
        {filteredProducts.map(prod => (
        <ProductCard 
          product={prod} 
          key={uuid()} 
          addToCart={addToCart}
        >
          <ProductCardAttributes>
            <div className="product-title">{prod.title}</div>
            <div className="product-price">${prod.price.toFixed(2)}</div>
          </ProductCardAttributes>
          <ProductCardButtons>
            <div className="product-qty">
              <div className="qty-btn left" onClick={() => decreaseQty()}>-</div>
              <input type="number" name="qty" id="productQty" className="qty-input" value={qty} onChange={e => setQty(e.target.value)}/>
              <div className="qty-btn right" onClick={() => increaseQty()}>+</div>
            </div>
            <div className="add-to-cart-btn" onClick={() => addToCart(prod, qty)}>
              Gimmie!
            </div>
          </ProductCardButtons>
        </ProductCard>
        ))}
      </section>
    </div>
  )
}
