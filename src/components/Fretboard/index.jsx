import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';
import {
  changeFretboardNotes,
  changeFretSpan,
  changePosition
} from '../../actions/fretboard';
import FretboardControls from '../Controls/Fretboard';
import FretboardString from './String';
import Position from './Position';
import areArraysEqual from '../../utils/areArraysEqual';

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
      },
      showLabels: true
    };

    // Application state
    this.handleFretSpanChange = this.handleFretSpanChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);

    // UI state
    this.toggleShowLabels = this.toggleShowLabels.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { notes: currNotes } = this.props.chord;
    const { notes: nextNotes } = nextProps.chord;

    const { position: currPosition, fretSpan: currFretSpan } = this.props.fretboard;
    const { position: nextPosition, fretSpan: nextFretSpan } = nextProps.fretboard;

    if (currFretSpan !== nextFretSpan || currPosition !== nextPosition || !areArraysEqual(currNotes, nextNotes)) {
      const nextScale = nextProps.chord.notes;
      this.props.changeFretboardNotes(nextScale, nextPosition, nextFretSpan);
    }
  }

  handleFretSpanChange(e) {
    const span = parseInt(e.target.value);
    this.props.changeFretSpan(span)
  }

  handlePositionChange(e) {
    const position = parseInt(e.target.value);
    this.props.changePosition(position)
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
          showLabels={this.state.showLabels}
          stringName={i}
        />
      );
    }

    return strings;
  }

  toggleShowLabels() {
    const showLabels = this.state.showLabels;
    this.setState({ showLabels: !showLabels });
  }

  render() {
    const { numStrings, fretSpan, position, notes } = this.props.fretboard;

    const fretboard = 'fretboard';

    return (
      <div className="fretboardWrapper">
        <FretboardControls
          handleFretSpanChange={this.handleFretSpanChange}
          handlePositionChange={this.handlePositionChange}
        />
        <Grid id={fretboard} className={fretboard} { ...this.state.gridProps }>
          <Position
            position={position}
            fretSpan={fretSpan}
            cellProps={this.state.cellProps}
            showLabels={this.state.showLabels}
            toggleShowLabels={this.toggleShowLabels}
          />
          {notes ? this.renderStrings(numStrings) : null}
        </Grid>
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

const mapStateToProps = ({ fretboard, chord }) => ({
  fretboard: { ...fretboard },
  chord: { notes: chord.notes }
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeFretboardNotes,
    changeFretSpan,
    changePosition
  }, dispatch)
);

const FretboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fretboard);

export default FretboardContainer;
