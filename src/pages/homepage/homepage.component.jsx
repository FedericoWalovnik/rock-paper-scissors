import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to the game!</h1>
      <Link to="/choose">Play</Link>
    </div>
  );
};

export default Homepage;
