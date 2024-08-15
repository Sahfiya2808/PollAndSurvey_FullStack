import React, { useState, useEffect } from 'react';
import './UserDetails.css';
import { useNavigate } from 'react-router-dom';

const fontFamilies = [
  'Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Comic Sans MS', 'Arial Black', 'Tahoma', 'Impact'
];

function UserDetails({ pollDetails, onPollDetailsChange }) {
  const [localPollDetails, setLocalPollDetails] = useState(pollDetails);

  useEffect(() => {
    setLocalPollDetails(pollDetails);
  }, [pollDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      style: {
        ...prevDetails.style,
        [name]: value,
      },
    }));
  };

  const handleOptionsChange = (e, index) => {
    const newOptions = [...localPollDetails.options];
    newOptions[index] = e.target.value;
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      options: newOptions,
    }));
  };

  const handleAddOption = () => {
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      options: [...prevDetails.options, ''],
    }));
  };

  const handlePollTypeChange = (e) => {
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      pollType: e.target.value,
      options: [], // Reset options when poll type changes
    }));
  };

  const handleSaveChanges = () => {
    onPollDetailsChange(localPollDetails);
  };
   
  const navigate= useNavigate();
  const handlebackhome = () =>{
    navigate('/userDashboard')
  }

  return (
    <div className="wholeback">
      <h2 className='poll-details-heading'>Poll Details</h2>
      <div className="user-details">
        <div className="form-group">
          <label className="user-label" htmlFor="pollType">Poll Type</label>
          <select className="tag" id="pollType" name="pollType" value={localPollDetails.pollType} onChange={handlePollTypeChange}>
            <option value="">Select Poll Type</option>
            <option value="Single Choice Polls">Single Choice Polls</option>
            <option value="Multiple Choice Polls">Multiple Choice Polls</option>
            <option value="Rating Polls">Rating Polls</option>
            <option value="Yes/No Polls">Yes/No Polls</option>
            <option value="Ranking Polls">Ranking Polls</option>
            <option value="Open-Ended Polls">Open-Ended Polls</option>
            <option value="Matrix Polls">Matrix Polls</option>
            <option value="Demographic Polls">Demographic Polls</option>
            <option value="Poll with Comments">Poll with Comments</option>
            <option value="Image Polls">Image Polls</option>
            <option value="Time-based Polls">Time-based Polls</option>
            <option value="Conditional Polls">Conditional Polls</option>
          </select>
        </div>
        <div className="form-group">
          <label className="user-label" htmlFor="question">Question</label>
          <input
            className="tag"
            type="text"
            id="question"
            name="question"
            value={localPollDetails.question}
            onChange={handleChange}
          />
        </div>
        {(localPollDetails.pollType === 'Multiple Choice Polls' || localPollDetails.pollType === 'Single Choice Polls') && (
          <div>
            <label className="user-label">Options</label>
            {localPollDetails.options.slice(0, 5).map((option, index) => (
              <div key={index} className="input-container">
                <input
                  className='tag'
                  key={index}
                  type="text" 
                  value={option}
                  onChange={(e) => handleOptionsChange(e, index)}
                />
              </div>
            ))}
            {localPollDetails.options.length >= 5 && (
              <div style={{color:"red"}} className="option-limit-message">Option limit reached</div>
            )}
            <center>
              <button
                className='buttonm add-option-button'
                onClick={handleAddOption}
                disabled={localPollDetails.options.length >= 5}
              >
                Add Option
              </button>
            </center>
          </div>
        )}
        
        <center><button className="buttonm" onClick={handleSaveChanges}>Save</button></center>
        <center><button className="goback" onClick={handlebackhome}>Back</button></center>
      </div>
    </div>
  );
}

export default UserDetails;
