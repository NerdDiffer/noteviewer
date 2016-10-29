import React from 'react';
import { Form } from 'semantic-ui-react';
import SelectChordType from './SelectChordType';

const Controls = ({ handleTonicChange, handleTypeChange }) => (
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
    </Form.Group>
  </Form>
);

export default Controls;
