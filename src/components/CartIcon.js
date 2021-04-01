import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartIcon = props => {
  const { cartCount } = props;

  return (
    <>
      {cartCount !== 0 && <div className="circle">{cartCount}</div>}
      <FontAwesomeIcon icon={faShoppingCart} />
    </>
  )
}
