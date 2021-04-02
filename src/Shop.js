import React, { useState } from 'react';
import uuid from 'react-uuid';
import { ShopProductCard } from './components/ShopProductCard';

export const Shop = props => {
  const {products, addToCart} = props;
  
  const [category, setCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (x) => {
    // only display products from selected category
    
      const filteredProducts = products.filter(prod => prod.category === x)
      setFilteredProducts(filteredProducts);
    

    return '';
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
        {filteredProducts.map(prod => <ShopProductCard product={prod} key={uuid()} addToCart={addToCart}/>)}
      </section>
    </div>
  )
}
