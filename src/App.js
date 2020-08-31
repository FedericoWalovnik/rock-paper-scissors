import React from 'react';

import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      score: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} />
      </div>
    );
  }
}

export default App;
