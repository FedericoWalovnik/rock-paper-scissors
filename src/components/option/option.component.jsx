import React from 'react';

import './option.styles.scss';

const Option = ({ option }) => {
  return (
    <div className={`option ${option}`}>
      <div className="option__icon-background">
        <img
          src={`../../images/icon-${option}.svg`}
          alt={option}
          className="option__icon"
        />
      </div>
    </div>
  );
};

export default Option;
