import { useState } from 'react';
import { Slider } from './components/Slider'
import { TestSpring } from './components/TestSpring'

export const Shop = props => {
  const { products, categories, addToCart } = props;
  
  const [displayCategory, setDisplayCategory] = useState(categories);
  
  const filterCategories = (category) => {
    if (category !== 'all') {
      setDisplayCategory([category])
    } else {
      setDisplayCategory(categories)
    }
  }
  
  const categoryTitlesList = [
    {all: "All"},
    {electronics: "Electronics"},
    {jewelery: "Jewlery"},
    {"men clothing": "Men's Clothing"},
    {"women clothing": "Women's Clothing"},
  ]
  
  const getTitleFromList = (list, key) => {
    const item = list.find(item => item[key]);
    return item[key];
  }

  return (
    <div id="shop" className="page page-shop">
      <h1>Buy things</h1>
      <section className="categories">
        <ul className="categories-list">
          {categories.map(cat => (           
            <li 
              className="category" 
              onClick={() => filterCategories(cat)} key={cat}
            >
              {getTitleFromList(categoryTitlesList, cat)}
            </li>
          ))}
        </ul>
      </section>

      <section className="product-feed">
        {displayCategory.map(cat => (
          cat === 'all' ? <Slider products={products} category="All" addToCart={addToCart}/> :
          <Slider products={products.filter(prod => prod.category === cat)} category={getTitleFromList(categoryTitlesList, cat)} addToCart={addToCart}/>
        ))}
      </section>

    </div>
  )
}
