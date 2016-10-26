import React from 'react';
import { Grid } from 'semantic-ui-react';

const renderNote = (note, ind) => (<Grid.Column key={ind}>{note}</Grid.Column>);
const renderNotesInChord = notes => notes.map(renderNote);

const NotesList = ({ notes }) => (
  <Grid textAlign="center">
    <Grid.Row>
      <Grid.Column>Notes:</Grid.Column>
      {renderNotesInChord(notes)}
    </Grid.Row>
  </Grid>
);

export default NotesList;
