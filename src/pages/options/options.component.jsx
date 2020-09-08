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
        {options.map((option, index) => (
          <Link
            key={index}
            className={`options-container__${option}`}
            to="/results"
            onClick={() => chooseOption(index)}
          >
            <Option option={option} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OptionsPage;
