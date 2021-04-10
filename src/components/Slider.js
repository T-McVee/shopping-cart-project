import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import uuid from 'react-uuid';
import { StoreProductCard } from './productCard/StoreProductCard';

export const Slider = props => {
  const { products, addToCart } = props;

  const [cardWidth, setCardWidth] = useState(44);
  const [index, setIndex] = useState(0);
  
  const handleRightArrowClick = () => {
    setIndex(index + 1)
  }

  const handleLeftArrowClick = () => {
    setIndex(index - 1)
  }

  const AnimatedStoreProductCard = animated(StoreProductCard);

  const cardStyles = useSpring({
    transform: `translateX(-${index * cardWidth}vw)`,
    width: `calc(${cardWidth}vw - 2vw)`,
  })

  return (
    <div className="product-slider">
      {index > 0 && 
        <div 
          className="arrow arrow-left" 
          onClick={() => handleLeftArrowClick()}
        >
          &lt;
        </div>
      }
      {index < products.length - 2 && 
        <div 
          className="arrow arrow-right" 
          onClick={() => handleRightArrowClick()}
        >
          &gt;
        </div>
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
