import React from 'react';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import { ShopProductCard } from './components/ShopProductCard';

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
        {products.map(prod => <ShopProductCard product={prod} key={uuid()} addToCart={addToCart}/>)}
      </section>
    </div>
  )
}
