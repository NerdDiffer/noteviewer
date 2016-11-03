import React from 'react';
import { Form } from 'semantic-ui-react';

const FretboardControls = ({ handlePositionChange, handleFretSpanChange }) => (
  <Form className="controls">
    <Form.Group widths="equal">
      <Form.Field>
        <Form.Input
          label="Position"
          type="number"
          min={0}
          max={15}
          step={1}
          onChange={handlePositionChange}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          label="Fret Span"
          type="number"
          min={0}
          max={6}
          step={1}
          onChange={handleFretSpanChange}
        />
      </Form.Field>
    </Form.Group>
  </Form>
);

export default FretboardControls;
