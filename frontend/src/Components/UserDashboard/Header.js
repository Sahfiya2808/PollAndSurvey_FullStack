import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  
  const handleClick = (path) => () => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo" >Pollify</div>
      <nav className="nav">
        <span className="nav-link" onClick={handleClick('/Howitworks')}>How it works</span>
        <span className="nav-link" onClick={handleClick('/Explore')}>Explore</span>
        <span className="nav-link" onClick={handleClick('/DisplayPolls')}>List</span>
        <span className="nav-link" onClick={handleClick('/Premium')} style={{ color: "orange" }}>Premium</span>
      </nav>
      <div className="auth-buttons">
        <button className="sign-up" onClick={handleClick('/')}>Log out</button>
      </div>
    </header>
  );
};

export default Header;
