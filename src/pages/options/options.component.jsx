import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

const OptionsPage = ({ score, addScore }) => {
  return (
    <div>
      <Header score={score} />
      <button onClick={addScore}>Agregar punto</button>
      <Link to="/results">
        <Option option="rock" />
      </Link>
      <Link to="/results">
        <Option option="paper" />
      </Link>
      <Link to="/results">
        <Option option="scissors" />
      </Link>
    </div>
  );
};

export default OptionsPage;
