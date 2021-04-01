import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  return (
    <nav>
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
          <Link to="/cart" className="link">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </li>
        <li className="link">
          <a className="link" href="https://github.com/T-McVee/shopping-cart-project" target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </nav>
  )
}
