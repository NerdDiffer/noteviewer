import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeChordTonic,
  changeChordType,
  getNotes
} from '../../actions/chord';
import ChordControls from '../Controls/Chord';
import NotesList from './NotesList';

class Chord extends Component {
  constructor(props) {
    super(props);

    this.handleTonicChange = this.handleTonicChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { type: currType, tonic: currTonic, notes: currNotes } = this.props.chord;
    const { type: nextType, tonic: nextTonic, notes: nextNotes } = nextProps.chord;

    if (currType !== nextType || currTonic !== nextTonic) {
      this.handleNotesChange({ type: nextType, tonic: nextTonic });
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
      <div className="chordWrapper">
        <ChordControls
          handleTonicChange={this.handleTonicChange}
          handleTypeChange={this.handleTypeChange}
        />
        <NotesList notes={notes} />
      </div>
    );
  }
}

const mapStateToProps = ({ chord }) => ({
  chord: { ...chord }
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeChordTonic,
    changeChordType,
    getNotes
  }, dispatch)
);

const ChordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chord);
export default ChordContainer;
