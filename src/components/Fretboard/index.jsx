import React, { Component, PropTypes } from 'react';
import { Grid } from 'semantic-ui-react';
import FretboardString from './String';
import Position from './Position';

class Fretboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Some of these values can either be booleans, or strings.
      // If there is a comment beside a value, semantic-ui accepts it
      gridProps: {
        celled: false, // 'internally',
        divided: false, // 'vertically',
        padded: false, // 'horizontally', 'vertically'
        relaxed: false, // 'very'
        textAlign: 'center',
        verticalAlign: 'middle',
        columns: 'equal',
        stackable: false
      },
      cellProps: {
        color: 'yellow',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: 2,
        stretched: false
      }
    };
  }

  renderStrings(n) {
    const { fretSpan, notes } = this.props.fretboard;

    const strings = [];

    for (let i = 1; i <= n; i += 1) {
      strings.push(
        <FretboardString
          label={i.toString()}
          key={i}
          fretboardNotes={notes[i]}
          fretSpan={fretSpan}
          cellProps={this.state.cellProps}
          stringName={i}
        />
      );
    }

    return strings;
  }

  render() {
    const { numStrings, fretSpan, position, notes } = this.props.fretboard;

    const fretboard = 'fretboard';

    return (
      <Grid id={fretboard} className={fretboard} { ...this.state.gridProps }>
        <Position
          position={position}
          fretSpan={fretSpan}
          cellProps={this.state.cellProps}
        />
        {notes ? this.renderStrings(numStrings) : null}
      </Grid>
    );
  }
}

Fretboard.propTypes = {
  fretboard: PropTypes.shape({
    numStrings: PropTypes.number,
    fretSpan: PropTypes.number,
    position: PropTypes.number
  }),
  scale: PropTypes.array,
  changeFretboardNotes: PropTypes.func
};

export default Fretboard;
