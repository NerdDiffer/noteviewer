import React from 'react';
import { Form } from 'semantic-ui-react';

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
        <label htmlFor="chord_type">Type</label>
        <Form.Input
          type="text"
          placeholder="Change type"
          onChange={handleTypeChange}
          id="chord_type"
        />
      </Form.Field>
    </Form.Group>
  </Form>
);

export default Controls;
