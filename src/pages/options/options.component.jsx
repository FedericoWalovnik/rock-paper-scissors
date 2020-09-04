import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

import './options.style.scss';

const OptionsPage = ({ score, options, chooseOption }) => {
  return (
    <div className="options-container">
      <Header score={score} />
      <div className="options-container__options">
        <Link
          className={`options-container__${options[0]}`}
          to="/results"
          onClick={() => chooseOption(0)}
        >
          <Option option={options[0]} />
        </Link>
        <Link
          className={`options-container__${options[2]}`}
          to="/results"
          onClick={() => chooseOption(2)}
        >
          <Option option={options[2]} />
        </Link>
        <Link
          className={`options-container__${options[1]}`}
          to="/results"
          onClick={() => chooseOption(1)}
        >
          <Option option={options[1]} />
        </Link>
      </div>
    </div>
  );
};

export default OptionsPage;
