import { useState, useEffect } from 'react';
import useDebounceEffect from '../helpers/useDebounceEffect'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { CartIcon } from './CartIcon';


export const Nav = props => {
  const { cartCount } = props;

  const [prevScrollPosition, setPrevScrollPosition] = useState(window.pageYOffset)
  const [currentScrollPosition, setCurrentScrollPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    console.log(cartCount)
  }, []);

  useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   
   return () => {
     window.removeEventListener('scroll', handleScroll);
   }
  })

  const handleScroll = () => {
     setCurrentScrollPosition(window.pageYOffset);
    if (prevScrollPosition >= currentScrollPosition) {
      //setVisible(true)
      setVisible(true)
    } else {
      //setVisible(false);
      setVisible(false)
    }

    setPrevScrollPosition(currentScrollPosition);
  };
  
  


  return (
    <nav className={visible ? "sticky-nav" : "sticky-nav hidden"}>
      <div className="logo">
        <Link to="/" className="link">
          <h3>Logo</h3>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/shop" className="link">
          shop
          </Link>  
        </li>
        <li>
          <Link to="/cart" className="link cart-icon">
            <CartIcon cartCount={cartCount}/>
          </Link>
        </li>
        <li className="link">
          <a className="link" href="https://github.com/T-McVee/shopping-cart-project" target="blank">
            <FontAwesomeIcon icon={faGithub} className="icon"/>
          </a>
        </li>
      </ul>
    </nav>
  )
}
