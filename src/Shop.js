import { useState } from 'react';
import { Slider } from './components/Slider'
import { TestSpring } from './components/TestSpring'

export const Shop = props => {
  const { products, addToCart } = props;
  
  const [category, setCategory] = useState('all')
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
      <h2>{category}</h2>
      <section className="product-feed">
        <Slider products={filteredProducts} addToCart={addToCart}/>
      </section>
      <section>
        <TestSpring />
      </section>
    </div>
  )
}
