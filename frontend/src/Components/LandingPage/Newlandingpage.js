import React, { useState } from 'react';
import './Newlandingpage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import AddServices from '../../Service/AddServices';

Modal.setAppElement('#root'); // Bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

const LandingPage = () => {
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handlePollSubmit = async () => {
    if (!nickname || !age) {
      setError('Please enter both nickname and age.');
      return;
    }

    try {
      const response = await AddServices.fetchPublicUsers();

      const user = response.find(user => user.nickname === nickname);

      if (user) {
        localStorage.setItem('publicId', user.publicId);
        navigate('/publicdashboard');
      } else {
        const addUserResponse = await AddServices.addUser(nickname,age);
        localStorage.setItem('publicId', addUserResponse.publicId);
        navigate('/publicdashboard');
      }
      closeModal(); // Close modal after successful submission
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleNavigation = (path) => () => {
    setTimeout(() => navigate(path), 1000); // 1-second delay
  };

  return (
    <div className="landcontainer">
      <div className="landgrid">
        <div className="landbox landleft-side">
          <img src="https://img.freepik.com/free-vector/election-referendum-campaign_74855-6386.jpg?t=st=1723023975~exp=1723027575~hmac=bde3f77bf735b7a1c1ea432fd70c494302ad91a6185b38a36141d3887539e052&w=996" alt="Left Side Image" />
          <div className="left-landbox-content">
            <h1 className="landh1">Make Your Opinion Matter</h1>
            <div className="button-container">
              <button
                className="get-landbutton"
                onClick={openModal}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="landbox landright-side">
          <img src="https://img.freepik.com/premium-vector/flat-design-telescope-work-flat-illustration_540641-432.jpg" alt="Right Side Image" />
          <div className="right-landbox-content">
            <h1 className="landh1">Create Your Own Poll</h1>
            <div className="button-container">
              <button
                className="sign-landbutton"
                onClick={handleNavigation('/NewSignin')}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Enter Nickname and Age"
  className={`modal ${modalIsOpen ? 'open' : ''}`}
  overlayClassName={`overlay ${modalIsOpen ? 'open' : ''}`}
      >
        <h2>Enter Nickname and Age</h2>
        <input
          type="text"
          className="landnickname-input"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="text"
          className="landnickname-input"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <div className="button-container">
          <button className="modal-button" onClick={handlePollSubmit}>Submit</button>
          <button className="modal-button" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
