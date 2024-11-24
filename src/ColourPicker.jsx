import React, { useState } from 'react';

function ColourPicker() {
    const [colour, setColour] = useState('red');
    function handleColourChange(e) {
        setColour(e.target.value);
    }
  return (
    <div  className="color-picker-container">
      <h1>Colour Picker</h1>
      <div className="color-display" style={ { backgroundColor: colour }}>
        <p>Selected Colour : {colour}</p>
      </div>
        <label> Select any colour</label>
        <input type="color" value={colour} onChange={handleColourChange} />
    </div>
  )
}

export default ColourPicker;