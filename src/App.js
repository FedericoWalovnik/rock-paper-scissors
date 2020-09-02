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
      option: ''
    };
  }

  addScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  chooseOption = (optionChosen) => {
    this.setState({ option: optionChosen });
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
                addScore={this.addScore}
                chooseOption={this.chooseOption}
              />
            )}
          />
          <Route
            path="/results"
            render={(props) => (
              <ResultsPage
                score={this.state.score}
                option={this.state.option}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
