import React, { Component } from 'react';
import Chord from './Chord';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Guitar chord diagrams</h1>
        <Chord />
      </div>
    );
  }
}

export default App;
