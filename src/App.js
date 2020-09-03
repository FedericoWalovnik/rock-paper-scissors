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
      this.setState({ score: this.state.score + 1 });
    } else if (result === 'loose') {
      this.setState({ score: this.state.score - 1 });
    }
  };

  chooseOptionPlayer = (optionChosen) => {
    this.setState({ playerOption: optionChosen });
  };

  optionComputer = (option) => {
    this.setState({ computerOption: option });
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
                editScore={this.editScore}
                optionComputer={this.optionComputer}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
