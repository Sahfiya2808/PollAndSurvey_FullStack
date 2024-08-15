import React from 'react';
import './Numberdisplay.css'; // Import the CSS file
import { Navigate, useNavigate } from 'react-router-dom';

const Numberdisplay = () => {
  const navigate= useNavigate();
  const handlesubmit = (path) => () => {
    navigate(path);
  }
  return (
    <div className="stats-create-container">
      {/* Number Display Section */}
      <div className="number-display-container">
        <div className="number-display-item">
          <h3 className="number-display-number">16</h3>
          <h6 className="number-display-text">Votes Cast</h6>
        </div>
        <div className="number-display-item">
          <h3 className="number-display-number">45</h3>
          <h6 className="number-display-text">Polls Created</h6>
        </div>
        <div className="number-display-item">
          <h3 className="number-display-number">08</h3>
          <h6 className="number-display-text">Categories Available</h6>
        </div>
      </div>

      {/* Create Section */}
      <div className="create-section-container">
        <h3 className="create-section-title">Join the Creator Community</h3>
        <button className="create-button" onClick={handlesubmit('/Newsignin')}>Create</button>
      </div>
    </div>
  );
};

export default Numberdisplay;
