import React, { Component, PropTypes } from 'react';
import FretboardString from './String';

class Fretboard extends Component {
  constructor(props) {
    super(props);
  }

  renderStrings(n) {
    const { fretSpan, notes } = this.props.fretboard;

    if (!notes) { return null; }

    const strings = [];

    for (let i = 1; i <= n; i += 1) {
      strings.push(
        <FretboardString
          label={i.toString()}
          key={i}
          fretboardNotes={notes[i]}
          fretSpan={fretSpan}
        />
      );
    }

    return strings;
  }

  render() {
    const { numStrings } = this.props.fretboard;

    return (
      <div className="fretboard">
        {this.renderStrings(numStrings)}
      </div>
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
