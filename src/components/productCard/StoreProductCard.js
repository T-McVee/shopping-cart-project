import { useState } from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductQtyInput } from './ProductQtyInput';
import { Button } from '../Button';

export const StoreProductCard = (props) => {
  const { product, position, addToCart, initialQty,  } = props;

  const [qty, setQty] = useState(initialQty);

  return (
    <div className="product-card" style={position} >
      <ProductCardImage product={product}/>
      <div className="card-details">
        <div className="product-card-attributes">
          <div className="product-title">{product.title}</div>
          <div className="product-price">${product.price.toFixed(2)}</div>
        </div>
        <div className="buttons">
          <ProductQtyInput 
            qty={qty} 
            updateQty={setQty}
          />
          <Button 
            classNameArr={["add-to-cart-btn"]}
            handleClick={addToCart}
            handleClickArgs={[product, qty]}
            annimactionClass="fade"
          >
            Gimmie!
          </Button>
        </div>
      </div>
    </div>
  )
}
