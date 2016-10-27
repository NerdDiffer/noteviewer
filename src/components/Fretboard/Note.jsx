import React, { PropTypes } from 'react';
import { Grid, Label } from 'semantic-ui-react';

const Note = ({ name, cellProps }) => {
  const color = name ? cellProps.color : null;

  return (
    <Grid.Column
      textAlign={cellProps.textAlign}
      verticalAlign={cellProps.verticalAlign}
      width={cellProps.width}
      stretched={cellProps.stretched}
    >
      <Label circular color={color}>
        {name}
      </Label>
    </Grid.Column>
  );
}

Note.propTypes = {
  // if string, then something like: 'E', 'G#', 'Db'
  // if number, then it's a finger number (on guitar it's 1, 2, 3, 4)
  // name: PropTypes.oneOf(['string', 'number'])
};

export default Note;
