import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeChordTonic, changeChordType, getNotes } from '../actions/chord';
import { changeFretboardNotes } from '../actions/fretboard';
import ChordForm from './ChordForm';
import Fretboard from './Fretboard';
import areArraysEqual from '../utils/compareArrays';

class Chord extends Component {
  constructor(props) {
    super(props);

    this.handleTonicChange = this.handleTonicChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // trying to update 1 piece of state, at most, per render
    const { type: currType, tonic: currTonic, notes: currNotes } = this.props.chord;
    const { type: nextType, tonic: nextTonic, notes: nextNotes } = nextProps.chord;

    if (currType !== nextType || currTonic !== nextTonic) {
      this.handleNotesChange({ type: nextType, tonic: nextTonic });
    } else if (!areArraysEqual(currNotes, nextNotes)) {
      const nextScale = nextProps.chord.notes;
      const { position: nextPosition, fretSpan: nextFretSpan } = nextProps.fretboard;
      this.props.changeFretboardNotes(nextScale, nextPosition, nextFretSpan);
    }
  }

  handleTonicChange(e) {
    this.props.changeChordTonic(e.target.value)
  }

  handleTypeChange(e) {
    this.props.changeChordType(e.target.value)
  }

  handleNotesChange({ type, tonic }) {
    type = type || this.props.chord.type;
    tonic = tonic || this.props.chord.tonic;

    this.props.getNotes(type, tonic);
  }

  render() {
    const { tonic, type, notes } = this.props.chord;

    return (
      <div className="app">
        <ChordForm
          handleTonicChange={this.handleTonicChange}
          handleTypeChange={this.handleTypeChange}
        />
        <div className="display">
          <p>Tonic: {tonic}</p>
          <p>Type: {type}</p>
          <p>Notes: {notes}</p>
        </div>
        <Fretboard
          scale={this.props.chord.notes}
          fretboard={this.props.fretboard}
          changeFretboardNotes={this.props.changeFretboardNotes}
        />
      </div>
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
    changeFretboardNotes
  }, dispatch)
);

const ChordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chord);
export default ChordContainer;
