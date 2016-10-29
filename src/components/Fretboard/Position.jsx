import React, { PropTypes } from 'react';
import { Grid, Label } from 'semantic-ui-react';

const Cell = ({ cellProps, content }) => (
  <Grid.Column
    textAlign={cellProps.textAlign}
    verticalAlign={cellProps.verticalAlign}
    width={cellProps.width}
    stretched={cellProps.stretched}
  >
    {content}
  </Grid.Column>
);

// TODO: remove cell separators, may need to create a whole new Grid for this...
const Position = ({ position, fretSpan, cellProps }) => {
  const PositionLabel = (
    position < 1 ? null : <Label circular color="blue">{position}</Label>
  );

  // TODO: performance improvement? See if you can create just one Grid.Column
  // component, and set its width to be the difference of
  // fretSpan and # of spacer columns.
  const renderBlanks = (fretSpan, cellProps) => {
    const blanks = [];

    for (let i = 1; i < fretSpan; i += 1) {
      blanks.push(<Cell key={i} cellProps={cellProps} />);
    }

    return blanks;
  };

  // The first cell in this row is to align name of note in FretboardString
  // components, which are below this component.
  return (
    <Grid.Row>
      <Cell key="blank" cellProps={cellProps} />
      <Cell cellProps={cellProps} content={PositionLabel} />
      {renderBlanks(fretSpan, cellProps)}
    </Grid.Row>
  );
};

Position.propTypes = {
  position: PropTypes.number,
  fretSpan: PropTypes.number,
  cellProps: PropTypes.object
};

export default Position;
