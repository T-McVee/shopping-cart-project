import { useState } from 'react'
import uuid from 'react-uuid';
import { StoreProductCard } from './productCard/StoreProductCard';

export const Slider = props => {
  const { products, addToCart } = props;

  const [sliderPosition, setSliderPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(44)

  const handleRightArrowClick = () => {
    const newPosition = sliderPosition + cardWidth;
    setSliderPosition(newPosition);
  }

  const handleLeftArrowClick = () => {
    const newPosition = sliderPosition - cardWidth;
    setSliderPosition(newPosition);
  }

  const cardStyle = {
    right: `calc(${sliderPosition}vw)`,
    width: `calc(${cardWidth}vw - 2vw)`,
  }
  
  return (
    <div className="product-slider">
      {sliderPosition > 0 && <div className="arrow arrow-left" onClick={() => handleLeftArrowClick()}>&lt;</div>}
      {sliderPosition + (cardWidth * 3) <= cardWidth * products.length && <div className="arrow arrow-right" onClick={() => handleRightArrowClick()}>&gt;</div>}
        {products.map(prod => (
        <StoreProductCard
          product={prod} 
          key={uuid()} 
          addToCart={addToCart}
          initialQty={1}
          cardStyle={cardStyle}
        />
        ))}
    </div>
  )
}
