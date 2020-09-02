import React from 'react';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

import './results.styles.scss';

class Results extends React.Component {
  computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomOption = Math.floor(Math.random() * Math.floor(3));
    return options[randomOption];
  };

  render() {
    return (
      <div className="results">
        <Header score={this.props.score} />
        <Option option={this.props.option} />
        <Option option={this.computerPlay()} />
      </div>
    );
  }
}

export default Results;
