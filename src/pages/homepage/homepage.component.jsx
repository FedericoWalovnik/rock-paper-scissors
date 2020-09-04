import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';
import logo from '../../images/logo.svg';

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <img src={logo} alt="Logo" className="homepage__logo" />
        <h2 className="homepage__credits">
          <span className="homepage__credits-1">
            Developed by Federico Walovnik
          </span>{' '}
          <span className="homepage__credits-2">
            Challenge by FrontendMentor
          </span>
        </h2>
      </header>
      <h1 className="homepage__welcome">Welcome to the game!</h1>
      <Link to="/choose" className="homepage__play-btn">
        Let´s Play
      </Link>
      <a
        className="viewcode"
        href="https://github.com/FedericoWalovnik/rock-paper-scissors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github"></i>View Code
      </a>
    </div>
  );
};

export default Homepage;
