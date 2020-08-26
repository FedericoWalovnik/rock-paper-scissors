import React from 'react';

import './App.css';

class App extends React.Component {
  
  constructor(props){
    super();

    this.state = {
      points: 0
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hola</h1>
      </div>
    );
  }
}

export default App;
