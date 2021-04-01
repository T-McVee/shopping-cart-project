import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartIcon = props => {
  const { cart } = props;

  const [cartCount, setCartCount] = useState(1);

  

  return (
    <>
      {cartCount > 0 && <div className="circle">{cartCount}</div>}
      <FontAwesomeIcon icon={faShoppingCart} />
    </>
  )
}
