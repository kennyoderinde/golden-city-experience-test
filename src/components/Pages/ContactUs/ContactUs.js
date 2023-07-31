import React, { useState } from "react";

const DualRangeInput = ({ initialRange1, initialRange2 }) => {
  const [range1, setRange1] = useState(initialRange1 || 50);
  const [range2, setRange2] = useState(initialRange2 || 75);

  const handleRange1Change = (event) => {
    setRange1(parseInt(event.target.value, 10));
  };

  const handleRange2Change = (event) => {
    setRange2(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={range1}
          onChange={handleRange1Change}
          className="slider w-484px"
        />
        <p>Range 1: {range1}</p>
      </div>

      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={range2}
          onChange={handleRange2Change}
          className="slider w-484px"
        />
        <p>Range 2: {range2}</p>
      </div>
    </div>
  );
};

export default DualRangeInput;
