import React from 'react';
import {Link} from 'react-router-dom';
import { ProductCard } from './components/ProductCard';

export const Shop = props => {
  const {products, addToCart} = props;
  
  return (
    <div id="shop" className="page page-shop">
      <h1>Buy things</h1>
      <section className="categories">
        <div className="category">Men's Clothing</div>
        <div className="category">Women's Clothing</div>
        <div className="category">Jewlery</div>
        <div className="category">Electronics</div>
      </section>
      <section className="product-feed">
        {products.map(prod => <ProductCard product={prod} key={prod.id} addToCart={addToCart}/>)}
      </section>
    </div>
  )
}
