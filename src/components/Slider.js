import { useState } from 'react'
import uuid from 'react-uuid';
import { StoreProductCard } from './productCard/StoreProductCard';

export const Slider = props => {
  const { products, addToCart } = props;

  const [sliderPosition, setSliderPosition] = useState(0);

  const handleRightArrowClick = () => {
    const newPosition = sliderPosition + 42;
    setSliderPosition(newPosition);

  }

  const productCardPosition = {
    right: sliderPosition + 'vw',
  }
  
  return (
    <div className="product-slider">
      <div className="arrow arrow-right" onClick={() => handleRightArrowClick()}>&gt;</div>
        {products.map(prod => (
        <StoreProductCard
          product={prod} 
          key={uuid()} 
          addToCart={addToCart}
          initialQty={1}
          position={productCardPosition}
        />
        ))}
    </div>
  )
}
