import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export const Home = () => {
  return (
    <div id="home" className="page page-home">
      <section className="splash">
        <div className="splash-text">
          <h1>Catchy headline</h1>
          <span>Intriguing text to spike your interest</span>
          <Link to="/shop" className="link">
          <div className="btn">Consume</div>
          </Link>
        </div>
        <div className="splash-img"></div>
      </section>
    </div>
  )
}
