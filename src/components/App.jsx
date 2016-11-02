import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Chord from './Chord';
import Fretboard from './Fretboard';

class App extends Component {
  render() {
    return (
      <Container
        className="app"
        textAlign="center"
      >
        <Segment>
          <h1>Guitar chord diagrams</h1>
          <Chord />
          <Fretboard />
        </Segment>
      </Container>
    );
  }
}

export default App;
