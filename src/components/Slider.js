import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import uuid from 'react-uuid';
import { StoreProductCard } from './productCard/StoreProductCard';
import { SliderArrow } from './slider/SliderArrow'

export const Slider = props => {
  const { products, category, addToCart } = props;

  const [cardWidth, setCardWidth] = useState(44);
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
    width: `calc(${cardWidth}vw - 2vw)`,
    config: {
      mass: 10,
      tension: 380,
      friction: 120,
      clamp: true
    }
  })

  return (
    <>
      <div className="container">
        <h2>{category}</h2>
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
              key={uuid()} 
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
