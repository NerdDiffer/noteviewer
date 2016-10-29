import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Segment, Divider } from 'semantic-ui-react';
import { changeChordTonic, changeChordType, getNotes } from '../actions/chord';
import { changeFretboardNotes, changeFretSpan, changePosition } from '../actions/fretboard';
import Controls from './Controls';
import NotesList from './NotesList';
import Fretboard from './Fretboard';
import areArraysEqual from '../utils/areArraysEqual';

class Chord extends Component {
  constructor(props) {
    super(props);

    this.handleTonicChange = this.handleTonicChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleFretSpanChange = this.handleFretSpanChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // trying to update 1 piece of state, at most, per render
    const { type: currType, tonic: currTonic, notes: currNotes } = this.props.chord;
    const { type: nextType, tonic: nextTonic, notes: nextNotes } = nextProps.chord;
    const { position: currPosition, fretSpan: currFretSpan } = this.props.fretboard;
    const { position: nextPosition, fretSpan: nextFretSpan } = nextProps.fretboard;

    if (currType !== nextType || currTonic !== nextTonic) {
      this.handleNotesChange({ type: nextType, tonic: nextTonic });
    } else if (currFretSpan !== nextFretSpan || currPosition !== nextPosition || !areArraysEqual(currNotes, nextNotes)) {
      const nextScale = nextProps.chord.notes;
      this.props.changeFretboardNotes(nextScale, nextPosition, nextFretSpan);
    }
  }

  handleTonicChange(e) {
    this.props.changeChordTonic(e.target.value)
  }

  handleTypeChange(_proxy, { value }) {
    this.props.changeChordType(value)
  }

  handleFretSpanChange(e) {
    const span = parseInt(e.target.value);
    this.props.changeFretSpan(span)
  }

  handlePositionChange(e) {
    const position = parseInt(e.target.value);
    this.props.changePosition(position)
  }

  handleNotesChange({ type, tonic }) {
    type = type || this.props.chord.type;
    tonic = tonic || this.props.chord.tonic;

    this.props.getNotes(type, tonic);
  }

  render() {
    const { notes } = this.props.chord;

    return (
      <Segment className="chord">
        <Controls
          handleTonicChange={this.handleTonicChange}
          handleTypeChange={this.handleTypeChange}
          handleFretSpanChange={this.handleFretSpanChange}
          handlePositionChange={this.handlePositionChange}
        />
        <NotesList notes={notes} />
        <Divider section />
        <Fretboard
          scale={this.props.chord.notes}
          fretboard={this.props.fretboard}
          changeFretboardNotes={this.props.changeFretboardNotes}
        />
      </Segment>
    );
  }
}

const mapStateToProps = ({ chord, fretboard }) => ({
  chord: { ...chord },
  fretboard: { ...fretboard }
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeChordTonic,
    changeChordType,
    getNotes,
    changeFretboardNotes,
    changeFretSpan,
    changePosition
  }, dispatch)
);

const ChordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chord);
export default ChordContainer;
