import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Chord from './Chord';

class App extends Component {
  render() {
    return (
      <Container
        className="app"
        textAlign="center"
      >
        <h1>Guitar chord diagrams</h1>
        <Chord />
      </Container>
    );
  }
}

export default App;
