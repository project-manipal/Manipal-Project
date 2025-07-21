import React, { useState } from 'react';
import './MouseChange.css';

const MouseChange = () => {
  const [inputValue, setInputValue] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleReset = () => {
    setInputValue('');
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="pro-container" onMouseMove={handleMouseMove}>
      <div className="tracker-card">
        <h2>🚀 Karthik  MFLP-14: useState & Mouse Tracker</h2>

        <input
          type="text"
          placeholder="Type anything here..."
          value={inputValue}
          onChange={handleChange}
          className="tracker-input"
        />
        {/* <button onClick={handleReset} className="reset-button">🔁 Reset</button> */}
        <div className="info-box">
          <p><span>📝 Input:</span> {inputValue}</p>
          <p><span>🖱️ Mouse:</span> X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>
        <br></br>
        <button onClick={handleReset} className="reset-button">🔁 Reset</button>
      </div>
      
    </div>
    
  );
};

export default MouseChange;
