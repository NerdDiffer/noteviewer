import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CHORD_TONIC, CHORD_NOTES, CHORD_TYPE } from '../actions';

class Chord extends Component {
  render() {
    const { tonic, type, notes } = this.props;

    return (
      <div className="app">
        <p>Tonic: {tonic}</p>
        <p>Type: {type}</p>
        <p>Notes: {notes}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ chord }) => ({ ...chord });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ CHORD_TONIC, CHORD_NOTES, CHORD_TYPE }, dispatch);
};

const ChordContainer = connect(mapStateToProps, mapDispatchToProps)(Chord);
export default ChordContainer;
