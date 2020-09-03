import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

const OptionsPage = ({ score, options, chooseOption }) => {
  return (
    <div>
      <Header score={score} />
      <Link to="/results" onClick={() => chooseOption(0)}>
        <Option option={options[0]} />
      </Link>
      <Link to="/results" onClick={() => chooseOption(1)}>
        <Option option={options[1]} />
      </Link>
      <Link to="/results" onClick={() => chooseOption(2)}>
        <Option option={options[2]} />
      </Link>
    </div>
  );
};

export default OptionsPage;
