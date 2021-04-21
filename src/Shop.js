import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { Slider } from './components/Slider';

export const Shop = props => {
  const { products, categories, addToCart } = props;
  
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    setSelectedCategory(categories);
    
  }, [categories])

  const filterCategories = (category) => {
    if (category !== 'all') {
      setSelectedCategory([category])
    } else {
      setSelectedCategory(categories)
    }
  }
  
  const categoryTitlesList = [
    {all: "All"},
    {electronics: "Electronics"},
    {jewelery: "Jewlery"},
    {"men's clothing": "Men's Clothing"},
    {"women's clothing": "Women's Clothing"},
  ]
  
  const getTitleFromList = (list, key) => {
    const item = list.find(item => item[key]);
    return item[key];
  }

  return (
    <div id="shop" className="page page-shop">
      <header>
        <h1>Buy things</h1>
      </header>
      <main>
        <section className="categories">
          <ul className="categories-list">
            {categories.map(cat => (           
              <li 
                className="category" 
                onClick={() => filterCategories(cat)} key={cat}
                key={uuid()}
              >
                <p>{getTitleFromList(categoryTitlesList, cat)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="product-feed">
          {selectedCategory.map(cat => (
            cat === 'all' ? 
              <Slider 
                products={products} 
                category="All" 
                addToCart={addToCart}
                key={uuid()}
              /> 
            :
              <Slider 
                products={products.filter(prod => prod.category === cat)} 
                category={getTitleFromList(categoryTitlesList, cat)} 
                addToCart={addToCart}
                key={uuid()}
              />
          ))}
        </section>
      </main>
    </div>
  )
}
