import { useState } from 'react';
import uuid from 'react-uuid';
import { StoreProductCardV2 } from './components/productCard/StoreProductCardV2';
import { ProductCardAttributes } from './components/productCard/ProductCardAttributes';
import { ProductCardButtons } from './components/productCard/ProductCardButtons';
import { ProductQtyInput } from './components/productCard/ProductQtyInput';
import { Button } from './components/Button';

export const Shop = props => {
  const {products, addToCart} = props;
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  

  const filterProducts = (x) => {
      const filteredProducts = products.filter(prod => prod.category === x)
      setFilteredProducts(filteredProducts);
    
    return '';
  }

  /* const increaseQty = () => {
    setQty(qty + 1);
  }

  const decreaseQty = () => {
    setQty(qty - 1);
  }  */

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
        <StoreProductCardV2
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
