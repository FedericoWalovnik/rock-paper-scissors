import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

import './results.styles.scss';

class Results extends React.Component {
  computerPlay = () => {
    this.props.optionComputer(Math.floor(Math.random() * Math.floor(2)));
  };

  didPlayerLose = () => {};

  UNSAFE_componentWillMount() {
    //this.computerPlay();
    this.props.optionComputer(Math.floor(Math.random() * Math.floor(3)));
  }

  componentDidMount() {}

  render() {
    return (
      <div className="results-container">
        <Header score={this.props.score} />
        <div className="results-container__results">
          <div>
            <h2 className="results-container__picked">YOU PICKED</h2>
            <Option option={this.props.options[this.props.playerOption]} />
          </div>
          <div className="results-container__playagain">
            <h1 className="results-container__text-result">
              You {this.props.whoWon()}
            </h1>
            <Link to={'/choose'}>
              <button className="results-container__btn">Play Again</button>
            </Link>
          </div>
          <div className="results-container__computer">
            <h2 className="results-container__picked">THE HOUSE PICKED</h2>
            <Option option={this.props.options[this.props.computerOption]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
