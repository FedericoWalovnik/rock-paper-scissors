import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import OptionsPage from './pages/options/options.component';
import ResultsPage from './pages/results/results.component';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      score: 0,
      options: ['rock', 'paper', 'scissors'],
      playerOption: '',
      computerOption: ''
    };
  }

  editScore = (result) => {
    if (result === 'win') {
      console.log('toy en win');
      this.setState({ score: this.state.score + 1 });
    } else if (result === 'lose' && this.state.score > 0) {
      console.log('toy en lose');
      this.setState({ score: this.state.score - 1 });
    }
  };

  whoWon = () => {
    let result;
    const computer = this.state.computerOption;
    const player = this.state.playerOption;

    if (computer === player) {
      result = 'draw';
    } else if (player === 0) {
      if (computer === 2) {
        result = 'win';
      } else {
        result = 'lose';
      }
    } else if (player === 1) {
      if (computer === 0) {
        result = 'win';
      } else {
        result = 'lose';
      }
    } else if (player === 2) {
      if (computer === 1) {
        result = 'win';
      } else {
        result = 'lose';
      }
    }

    return result;
  };

  chooseOptionPlayer = (optionChosen) => {
    this.setState({ playerOption: optionChosen });
  };

  optionComputer = (option) => {
    this.setState({ computerOption: option }, () => {
      this.editScore(this.whoWon());
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={`/`} component={Homepage} />
          <Route
            path={`/choose`}
            render={(props) => (
              <OptionsPage
                score={this.state.score}
                options={this.state.options}
                chooseOption={this.chooseOptionPlayer}
              />
            )}
          />
          <Route
            path="/results"
            render={(props) => (
              <ResultsPage
                score={this.state.score}
                options={this.state.options}
                playerOption={this.state.playerOption}
                computerOption={this.state.computerOption}
                optionComputer={this.optionComputer}
                whoWon={this.whoWon}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
