import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

import './results.styles.scss';

class Results extends React.Component {
  computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomOption = Math.floor(Math.random() * Math.floor(3));
    return options[randomOption];
  };

  componentDidMount() {
    this.props.editScore('win');
  }

  render() {
    return (
      <div className="results">
        <Header score={this.props.score} />
        <Option option={this.props.option} />
        <Option option={this.computerPlay()} />
        <Link to={'/choose'}>
          <button className="results__btn">Play Again</button>
        </Link>
      </div>
    );
  }
}

export default Results;
