import { useState } from 'react';
import { ProductQtyInput } from './ProductQtyInput';
import { Button } from '../Button';

export const StoreProductCardV2 = (props) => {
  const { product, addToCart, initialQty,  } = props;

  const [qty, setQty] = useState(initialQty);

  const increaseQty = () => {
    //if (product) return console.log(product.qty + 1);
    
    setQty(qty + 1);
  }

  const decreaseQty = () => {
    //if (product) return console.log(product.qty - 1);

    setQty(qty - 1);
  } 

  return (
    <div className="product-card">
      <div className="card-img">
        <img src={product.image} alt={product.description}/>
      </div>
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
