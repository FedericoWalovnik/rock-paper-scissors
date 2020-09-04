import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__welcome">Welcome to the game!</h1>
      <Link to="/choose" className="homepage__play-btn">
        Let´s Play
      </Link>
    </div>
  );
};

export default Homepage;
