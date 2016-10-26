import React, { PropTypes } from 'react';
import Note from './Note';

const FretboardString = ({ fretSpan, fretboardNotes, label }) => {
  const renderNotes = () => {
    const notes = [];

    for (let i = 0; i < fretSpan; i += 1) {
      const name = fretboardNotes[i];
      notes.push(<Note key={i} name={name} />);
    }

    return notes;
  };

  return (
    <div className="fretboard string">
      {renderNotes()}
    </div>
  );
}

FretboardString.propTypes = {
  fretSpan: PropTypes.number,
  label: PropTypes.string
};

export default FretboardString;
