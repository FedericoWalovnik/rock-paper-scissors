import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Option from '../../components/option/option.component';

import './results.styles.scss';

class Results extends React.Component {
  computerPlay = () => {
    const randomOption = Math.floor(Math.random() * Math.floor(3));
    this.props.optionComputer(randomOption);
  };

  componentWillMount() {
    this.computerPlay();
  }

  componentDidMount() {
    this.props.editScore('loose');
  }

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
