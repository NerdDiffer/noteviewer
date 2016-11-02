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

const Nut = ({ color }) => (
  <Grid.Column
    color={color}
    width={1}
    stretched={true}
    className="fretboard nut"
  >
    <span />
  </Grid.Column>
);

// TODO: consider upgrading this to a redux-aware component. Do not need it for
// `cellProps` (that is visual display only), but could use it for tonal-related data.
const FretboardString = props => {
  const { stringName, span, notes, cellProps, showLabels, showNut } = props;

  const renderNotes = () => {
    const notesToRender = [];

    for (let i = 0; i < span; i += 1) {
      const name = notes[i];

      const note = (
        <Note
          key={i}
          name={name}
          cellProps={cellProps}
        />
      );

      notesToRender.push(note);
    }

    return notesToRender;
  };

  return (
    <Grid.Row className="fretboard string">
      {showLabels ? <Name stringName={stringName} cellProps={cellProps} /> : null}
      {showNut ? <Nut color="black" /> : <Nut color={null} />}
      {notes ? renderNotes() : null}
    </Grid.Row>
  );
}

FretboardString.propTypes = {
  stringName: PropTypes.number,
  span: PropTypes.number,
  notes: PropTypes.array,
  cellProps: PropTypes.object,
  showLabels: PropTypes.bool,
  showNut: PropTypes.bool
};

export default FretboardString;
