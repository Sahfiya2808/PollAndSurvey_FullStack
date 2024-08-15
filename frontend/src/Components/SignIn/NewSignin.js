import React, { useState } from 'react';
import './NewSignin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import addServices from '../../Service/AddServices';

const NewSignin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await addServices.fetchUsers();
      const user = response.find((user) => user.username === username);
      if (user) {
        if (user.password === password) {
          localStorage.setItem('loggedInUserId', user.userId);
          setSuccess(true);
          navigate('/userDashboard'); // Redirect to dashboard on successful login
        } else {
          setError('Invalid username or password');
          setSuccess(false);
        }
      } else {
        setError('Invalid username or password');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while logging in. Please try again later.');
      setSuccess(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left-side">
        <img src="https://img.freepik.com/free-vector/man-taking-break-from-work_23-2148508516.jpg?ga=GA1.1.1089435049.1721976240&semt=ais_user" alt="Illustration" />
      </div>
      <div className="signin-right-side">
        <div className="sign-in-box">
          <h2 className="signinh2">Sign in</h2>
          <form onSubmit={handleSubmit}>
            <div className="email-login">
              <div className="input-group">
                <h3 className="input-label">Username</h3>
                <input
                  type="text"
                  
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group">
                <h3 className="input-label">Password</h3>
                <input
                  type="password"
                  
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="sign-in-btn">
                Sign In
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <p className="signup-link">
              Don't have an account? <a href="/NewSignup">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSignin;
