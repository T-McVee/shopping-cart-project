import React from 'react';
import {Link} from 'react-router-dom';


export const Home = () => {
  return (
    <div id="home" className="page page-home">
      <section className="splash">
        <div className="splash-text">
          <h1>Catchy headline</h1>
          <span>Persausive text to spike your interest</span>
          <Link to="/shop" className="link">
          <div className="btn">Consume</div>
          </Link>
        </div>
      </section>

    </div>
  )
}
