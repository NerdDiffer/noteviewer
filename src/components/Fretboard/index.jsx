import React, { Component, PropTypes } from 'react';
import { Grid } from 'semantic-ui-react';
import FretboardString from './String';

class Fretboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridProps: {
        celled: 'internally',
        divided: 'vertically',
        padded: true,
        relaxed: false,
        textAlign: 'center',
        verticalAlign: 'middle',
        columns: 'equal'
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
        />
      );
    }

    return strings;
  }

  render() {
    const { notes, numStrings } = this.props.fretboard;

    return (
      <Grid className="fretboard" { ...this.state.gridProps }>
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
