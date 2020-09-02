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
      option: ""
    };
  }

  addScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  chooseOption = (option) => {
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={`/`} component={Homepage} />
          <Route
            path={`/choose`}
            render={(props) => (
              <OptionsPage score={this.state.score} addScore={this.addScore} />
            )}
          />
          <Route
            path="/results"
            render={(props) => <ResultsPage score={this.state.score} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
