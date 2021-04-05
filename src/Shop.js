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
        <div className="category" onClick={() => resetFilter()}>All</div>
        <div className="category" onClick={() => filterProducts('men clothing')}>Men's Clothing</div>
        <div className="category" onClick={() => filterProducts('women clothing')}>Women's Clothing</div>
        <div className="category" onClick={() => filterProducts('jewelery')}>Jewlery</div>
        <div className="category" onClick={() => filterProducts('electronics')}>Electronics</div>
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
