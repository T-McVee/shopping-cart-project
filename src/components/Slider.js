import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { StoreProductCard } from './productCard/StoreProductCard';
import { SliderArrow } from './slider/SliderArrow';

export const Slider = props => {
  const { products, category, addToCart } = props;
  
  // eslint-disable-next-line no-unused-vars
  const [cardWidth, setCardWidth] = useState(34);
  const [index, setIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleRightArrowClick = () => {
    if (index <= products.length - 3) {
      setIndex(index + 1)
    }
    
    if (index === products.length - 3) {
      setShowRightArrow(false)
    } else {
      setShowLeftArrow(true)
    }   
  }

  const handleLeftArrowClick = () => {
    if (index > 0) {
      setIndex(index - 1)
    }

    if (index - 1 === 0) {
      setShowLeftArrow(false)
    } else {
      setShowRightArrow(true)
    }
  }

  const AnimatedStoreProductCard = animated(StoreProductCard);

  const cardStyles = useSpring({
    transform: `translateX(-${index * cardWidth}vw)`,
    width: `calc(${cardWidth}vw - 6vw)`,
    config: {
      mass: 10,
      tension: 380,
      friction: 120,
      clamp: true
    }
  })

  return (
    <>
      <div className="slider-container">
        <div className="slider-title">
          <h2>{category}</h2>
          <span className="slider-item-count">{products.length} items</span>
        </div> 
        <div className="product-slider">
          <SliderArrow 
            show={showLeftArrow}
            direction="<"
            handleClick={handleLeftArrowClick}
          />
          <SliderArrow 
            show={showRightArrow}
            direction=">"
            handleClick={handleRightArrowClick}
          />

            {products.map(prod => (
            <AnimatedStoreProductCard
              product={prod} 
              key={prod.id} 
              addToCart={addToCart}
              initialQty={1}
              cardStyles={cardStyles}
            />
            ))}
        </div>
      </div>  
    </>
  )
}
 
