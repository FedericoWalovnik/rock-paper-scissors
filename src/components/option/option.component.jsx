import React from 'react';
import { useSpring, animated } from 'react-spring';

import './option.styles.scss';

const Option = ({ option }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0.2)' },
    to: { opacity: 1, transform: 'scale(1)' }
  });
  return (
    <animated.div style={props} className={`option ${option}`}>
      <div className="option__icon-background">
        <img
          src={`../../images/icon-${option}.svg`}
          alt={option}
          className="option__icon"
        />
      </div>
    </animated.div>
  );
};

export default Option;
