import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { names as getChordTypes } from 'tonal-chord';

const chordTypes = getChordTypes();
const options = chordTypes.map(type => {
  return { text: type, value: type }
});

const SelectChordType = ({ handleTypeChange }) => (
  <Dropdown
    className="icon"
    options={options}
    name="chord_type"
    button
    onChange={handleTypeChange}
    search
    fluid
  />
);

export default SelectChordType;
