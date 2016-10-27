import React, { PropTypes } from 'react';
import { Grid } from 'semantic-ui-react';
import Note from './Note';

const FretboardString = ({ fretSpan, fretboardNotes, label, cellProps }) => {
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
      {fretboardNotes ? renderNotes() : null}
    </Grid.Row>
  );
}

FretboardString.propTypes = {
  fretSpan: PropTypes.number,
  label: PropTypes.string,
  cellProps: PropTypes.object
};

export default FretboardString;
