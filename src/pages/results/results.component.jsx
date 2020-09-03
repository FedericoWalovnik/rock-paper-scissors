import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

import './results.styles.scss';

class Results extends React.Component {
  computerPlay = () => {
    this.props.optionComputer(Math.floor(Math.random() * Math.floor(2)));
  };

  /*whoWon = () => {
    let result;

    if (this.props.computerOption === this.props.playerOption) {
      result = 'draw';
    } else if (this.props.playerOption === 0) {
      if (this.props.computerOption === 2) {
        result = 'win';
      } else {
        result = 'lose';
      }
    } else if (this.props.playerOption === 1) {
      if (this.props.computerOption === 0) {
        result = 'win';
      } else {
        result = 'lose';
      }
    } else if (this.props.playerOption === 2) {
      if (this.props.computerOption === 1) {
        result = 'win';
      } else {
        result = 'lose';
      }
    }

    return result;
  };*/

  didPlayerLose = () => {};

  UNSAFE_componentWillMount() {
    //this.computerPlay();
    this.props.optionComputer(Math.floor(Math.random() * Math.floor(3)));
  }

  componentDidMount() {}

  render() {
    return (
      <div className="results">
        <Header score={this.props.score} />
        <Option option={this.props.options[this.props.playerOption]} />
        <Option option={this.props.options[this.props.computerOption]} />
        <Link to={'/choose'}>
          <button className="results__btn">Play Again</button>
        </Link>
      </div>
    );
  }
}

export default Results;
