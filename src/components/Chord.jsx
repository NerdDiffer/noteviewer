import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeChordTonic, changeChordType, getNotes } from '../actions';
import ChordForm from './ChordForm';

class Chord extends Component {
  constructor(props) {
    super(props);

    this.handleTonicChange = this.handleTonicChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const currType = this.props.type;
    const currTonic = this.props.tonic;
    const nextType = nextProps.type;
    const nextTonic = nextProps.tonic;

    console.log('currType %s', currType);
    console.log('currTonic %s', currTonic);

    if (currType !== nextType || currTonic !== nextTonic) {
      this.handleNotesChange({ type: nextType, tonic: nextTonic });
    }
  }

  handleTonicChange(e) {
    this.props.changeChordTonic(e.target.value)
  }

  handleTypeChange(e) {
    this.props.changeChordType(e.target.value)
  }

  handleNotesChange({ type, tonic }) {
    type = type || this.props.type;
    tonic = tonic || this.props.tonic;

    this.props.getNotes(type, tonic);
  }

  render() {
    const { tonic, type, notes } = this.props;

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
      </div>
    );
  }
}

const mapStateToProps = ({ chord }) => ({ ...chord });

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeChordTonic, changeChordType, getNotes }, dispatch)
);

const ChordContainer = connect(mapStateToProps, mapDispatchToProps)(Chord);
export default ChordContainer;
