import { useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'
import uuid from 'react-uuid';
import { StoreProductCard } from './productCard/StoreProductCard';

export const Slider = props => {
  const { products, addToCart } = props;

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

  const transitionLeftArrow = useTransition(showLeftArrow, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {
      clamp: true,
    }
  });
  
  const transitionRightArrow = useTransition(showRightArrow, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {
      clamp: true,
    }
  });

  return (
    <div className="product-slider">
      {transitionLeftArrow((style, item) => 
      item && <animated.div 
          style={style}
          className="arrow arrow-left" 
          onClick={() => handleLeftArrowClick()}
        >
          &lt;
        </animated.div>
      )}
      {transitionRightArrow((style, item) =>
        item && <animated.div 
        style={style}
        className="arrow arrow-right" 
        onClick={() => handleRightArrowClick()}
      >
        &gt;
      </animated.div>
      )
        
        }
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
  )
}
