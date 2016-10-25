import React from 'react';

const ChordForm = (props) => {
  const { handleTonicChange, handleTypeChange } = props;

  return (
    <div className="controls">
      <label htmlFor="chord_tonic">Tonic</label>
      <input
        type="text"
        placeholder="Change tonic"
        onChange={handleTonicChange}
        id="chord_tonic"
      />
      <br />
      <label htmlFor="chord_type">Type</label>
      <input
        type="text"
        placeholder="Change type"
        onChange={handleTypeChange}
        id="chord_type"
      />
    </div>
  );
}

export default ChordForm;
