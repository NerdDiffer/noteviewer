import React, { PropTypes } from 'react';
import { Grid, Label } from 'semantic-ui-react';
import { toOrdinal } from 'number-to-words';
import Note from './Note';

const Name = ({ stringName, cellProps }) => {
  const label = `${toOrdinal(stringName)} string`;

  return (
    <Grid.Column
      textAlign={cellProps.textAlign}
      verticalAlign={cellProps.verticalAlign}
      width={cellProps.width}
      stretched={cellProps.stretched}
      className="stringLabel"
    >
      <Label pointing="right">{label}</Label>
    </Grid.Column>
  );
};

const Nut = () => (
  <Grid.Column
    color="black"
    width={1}
    stretched={true}
    className="fretboard nut"
  >
    <span />
  </Grid.Column>
);

// TODO: consider upgrading this to a redux-aware component. Do not need it for
// `cellProps` (that is visual display only), but could use it for tonal-related data.
const FretboardString = ({ fretSpan, fretboardNotes, label, cellProps, stringName, showLabels }) => {
  const renderNotes = () => {
    const notes = [];

    for (let i = 0; i < fretSpan; i += 1) {
      const name = fretboardNotes[i];
      notes.push(<Note key={i} name={name} cellProps={cellProps} />);
    }

    return notes;
  };

  return (
    <Grid.Row className="fretboard string">
      {showLabels ? <Name stringName={stringName} cellProps={cellProps} /> : null}
      <Nut />
      {fretboardNotes ? renderNotes() : null}
    </Grid.Row>
  );
}

FretboardString.propTypes = {
  fretSpan: PropTypes.number,
  label: PropTypes.string,
  cellProps: PropTypes.object,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  showLabels: PropTypes.bool
};

export default FretboardString;
