import React, { PropTypes } from 'react';

const Note = ({ name }) => {
  return (
    <div className="fretboard note">
      {name}
    </div>
  );
}

Note.propTypes = {
  // if string, then something like: 'E', 'G#', 'Db'
  // if number, then it's a finger number (on guitar it's 1, 2, 3, 4)
  // name: PropTypes.oneOf(['string', 'number'])
};

export default Note;
