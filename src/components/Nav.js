import React from 'react';
import {Link} from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="link">
          <h3>Logo</h3>
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/shop" className="link">
          <li>shop</li>
        </Link>
        <Link to="/cart" className="link">
          <li>cart</li>
        </Link>
      </ul>
    </nav>
  )
}
