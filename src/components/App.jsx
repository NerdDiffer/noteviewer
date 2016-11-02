import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Chord from './Chord';
import Fretboard from './Fretboard';

class App extends Component {
  render() {
    return (
      <Container
        className="app"
        textAlign="center"
      >
        <h1>Guitar chord diagrams</h1>
        <Chord />
        <Divider section />
        <Fretboard />
      </Container>
    );
  }
}

export default App;
