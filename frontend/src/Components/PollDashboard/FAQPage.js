import React, { useState } from 'react';
import './FAQPage.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import Material-UI icon

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Poll-tastic FAQs</h2>
      <div className="faq-list">
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(0)}>
            <h3>How do I vote in a poll?</h3>
            <ExpandMoreIcon className={`arrow ${activeIndex === 0 ? 'expanded' : ''}`} />
          </div>
          <div className={`faq-answer ${activeIndex === 0 ? 'show' : ''}`}>
            <p>To vote in a poll, simply select your preferred option and click the "Submit" button. Your vote will be counted immediately.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(1)}>
            <h3>Can I change my vote after submitting?</h3>
            <ExpandMoreIcon className={`arrow ${activeIndex === 1 ? 'expanded' : ''}`} />
          </div>
          <div className={`faq-answer ${activeIndex === 1 ? 'show' : ''}`}>
            <p>No, once you have submitted your vote, it cannot be changed. Please make sure you select the correct option before submitting.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(2)}>
            <h3>Is my vote anonymous?</h3>
            <ExpandMoreIcon className={`arrow ${activeIndex === 2 ? 'expanded' : ''}`} />
          </div>
          <div className={`faq-answer ${activeIndex === 2 ? 'show' : ''}`}>
            <p>Yes, all votes are completely anonymous. No personal information is linked to your vote.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(3)}>
            <h3>How can I create my own poll?</h3>
            <ExpandMoreIcon className={`arrow ${activeIndex === 3 ? 'expanded' : ''}`} />
          </div>
          <div className={`faq-answer ${activeIndex === 3 ? 'show' : ''}`}>
            <p>To create your own poll, navigate to the "Create Poll" section, fill in the details of your poll, and click "Submit." Your poll will be published immediately.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(4)}>
            <h3>How are poll results calculated?</h3>
            <ExpandMoreIcon className={`arrow ${activeIndex === 4 ? 'expanded' : ''}`} />
          </div>
          <div className={`faq-answer ${activeIndex === 4 ? 'show' : ''}`}>
            <p>Poll results are calculated in real-time as votes are submitted. You can view the results as they come in.</p>
          </div>
        </div>
      </div>
      <footer className="faq-footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 Pollify. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;
