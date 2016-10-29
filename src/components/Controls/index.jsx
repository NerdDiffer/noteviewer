import React from 'react';
import { Form } from 'semantic-ui-react';
import SelectChordType from './SelectChordType';

const Controls = ({ handleTonicChange, handleTypeChange, handleFretSpanChange, handlePositionChange }) => (
  <Form className="controls">
    <Form.Group widths="equal">
      <Form.Field>
        <label htmlFor="chord_tonic">Tonic</label>
        <Form.Input
          type="text"
          placeholder="Change tonic"
          onChange={handleTonicChange}
          id="chord_tonic"
        />
      </Form.Field>
      <Form.Field>
        <Form.Select
          label="Type"
          control={SelectChordType}
          handleTypeChange={handleTypeChange}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          label="Fret Span"
          type="number"
          min={0}
          max={7}
          step={1}
          onChange={handleFretSpanChange}
        />
      </Form.Field>
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
    </Form.Group>
  </Form>
);

export default Controls;
