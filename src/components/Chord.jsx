import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Segment, Divider } from 'semantic-ui-react';
import { changeChordTonic, changeChordType, getNotes } from '../actions/chord';
import { changeFretboardNotes } from '../actions/fretboard';
import Controls from './Controls';
import NotesList from './NotesList';
import Fretboard from './Fretboard';
import areArraysEqual from '../utils/areArraysEqual';

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

  handleTypeChange(_proxy, { value }) {
    this.props.changeChordType(value)
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
    changeFretboardNotes
  }, dispatch)
);

const ChordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chord);
export default ChordContainer;
