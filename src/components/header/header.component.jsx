import React from 'react';
import logo from '../../images/logo.svg';

import './header.styles.scss';

const Header = (score) => {
  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <div className="score-block">
        <p className="label">SCORE</p>
        <p className="score">{score}</p>
      </div>
    </div>
  );
};

export default Header;
