import { useState } from 'react';
import uuid from 'react-uuid';
import { StoreProductCard } from './components/productCard/StoreProductCard';

export const Shop = props => {
  const { products, addToCart } = props;
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const filterProducts = x => {
    const filteredProducts = products.filter(prod => prod.category === x)
    setFilteredProducts(filteredProducts);
  }

  const resetFilter = () => {
    setFilteredProducts(products)
  }

  return (
    <div id="shop" className="page page-shop">
      <h1>Buy things</h1>
      <section className="categories">
        <ul className="categories-list">
          <li className="category" onClick={() => resetFilter()}>All</li>
          <li className="category" onClick={() => filterProducts('men clothing')}>Men's Clothing</li>
          <li className="category" onClick={() => filterProducts('women clothing')}>Women's Clothing</li>
          <li className="category" onClick={() => filterProducts('jewelery')}>Jewlery</li>
          <li className="category" onClick={() => filterProducts('electronics')}>Electronics</li>
        </ul>
      </section>
      <section className="product-feed">
        {filteredProducts.map(prod => (
        <StoreProductCard
          product={prod} 
          key={uuid()} 
          addToCart={addToCart}
          initialQty={1}
        />
        ))}
      </section>
    </div>
  )
}
