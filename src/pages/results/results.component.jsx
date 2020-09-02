import React from 'react';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

import './results.styles.scss';

const Results = ({ score }) => {
  return (
    <div className="results">
      <Header score={score} />
      <Option option="rock" />
    </div>
  );
};

export default Results;
