import React, { PropTypes } from 'react';
import { Radio, Label } from 'semantic-ui-react';

// Toggle labels for showing fretboard position & string name
// TODO: add handlers.
// Make the RH-side be activated (by default) b/c it's colored.
const ToggleLabels = ({ onToggle }) => (
  <Radio toggle label="Toggle Labels" />
);

export default ToggleLabels;
