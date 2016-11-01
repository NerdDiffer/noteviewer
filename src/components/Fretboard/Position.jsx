import React, { PropTypes } from 'react';
import { Grid, Label } from 'semantic-ui-react';
import { toOrdinal } from 'number-to-words';
import ToggleLabels from './ToggleLabels';

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

  const renderPositionLabel = position => {
    const label = `${toOrdinal(position)} fret`;
    return <Label pointing="below">{label}</Label>;
  };

  // The first two cells in this row are to align note name in FretboardString
  // components, which are below this component.
  return (
    <Grid.Row>
      <Grid.Column width={3} stretched={true}>
        <ToggleLabels />
      </Grid.Column>
      <Grid.Column {...cellProps} color={null} className="positionLabel">
        {position > 0 ? renderPositionLabel(position) : null}
      </Grid.Column>
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
