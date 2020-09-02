import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

const OptionsPage = ({ score, chooseOption }) => {
  return (
    <div>
      <Header score={score} />
      <Link to="/results" onClick={() => chooseOption('rock')}>
        <Option option="rock" />
      </Link>
      <Link to="/results" onClick={() => chooseOption('paper')}>
        <Option option="paper" />
      </Link>
      <Link to="/results" onClick={() => chooseOption('scissors')}>
        <Option option="scissors" />
      </Link>
    </div>
  );
};

export default OptionsPage;
