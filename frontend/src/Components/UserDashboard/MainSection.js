import React from 'react';
import './MainSection.css';
import { useNavigate } from 'react-router-dom';

const MainSection = () => {
  const navigate = useNavigate();
  const handleClick = (path) => () => {
    navigate(path);
  };

  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className="mmmain-section">
        <div className="intro-text">
          <h1>Start A Poll, Spark a Conversation</h1>
          <p>Poll your audience and spark a conversation that leads to innovative solutions, as people come together to discuss and brainstorm new ideas.</p>
          <button className="sign-up-free" onClick={handleClick('/main')}>+ Create </button>
        </div>
        <div className="intro-image">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/group-discussion-8470108-6666398.png?f=webp" />
        </div>
      </section>

      <section className="how-to-make-poll">
        <h2>How to Make a Poll</h2>
        <div className="steps-container">
          <div className="step-box">
            <h3>Step 1</h3>
            <p>Define your poll question and the options you want to provide.</p>
          </div>
          <div className="step-box">
            <h3>Step 2</h3>
            <p>Customize your poll with images or additional settings as needed.</p>
          </div>
          <div className="step-box">
            <h3>Step 3</h3>
            <p>As soon as a vote is cast, the results are updated in real time and can be exported at any time.</p>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="image-text-container">
          <div className="info-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGswItL2c1qSI9PpCcTwQjs5-Bp__yAW9HhQWaSFgS3HXX8iHn" />
          </div>
          <div className="info-text">
            <h2>Learn what people actually think in less time</h2>
            <p>Our live Polls allow you to hear the voice of thousands without bias, vote manipulation or going down in times of high traffic. Ask your question and see answers in vibrant, live and reliable graphs. No coding, no messing about just results in real time.</p>
          </div>
        </div>
      </section>  

      <section className="info-section reversed">
        <div className="image-text-container">
          <div className="info-text">
            <h2>Manage all your Polls, Surveys and Quizzes</h2>
            <p>Log straight into the Dashboard to start managing your polls in one place. Set start and end dates, view IP and voter information or fix the typo you missed. You can also create your own surveys and quizzes when you need to ask more than one question.</p>
          </div>
          <div className="info-image">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2ZV73QVnouQRS-aqLRw4OVMj7iYtHqHTF2xjL1h7bzyqAHTN5" />
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="image-text-container">
          <div className="info-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWqaSf-qwXXYi252nGOJL4RCFebFDw44UxA&s" />
          </div>
          <div className="info-text">
            <h2>Easy to Customize and Embed</h2>
            <p>Create a poll on your website, Facebook, or all at once. Simply share your link or copy and paste the embed code, results from all platforms will be integrated. Tailor the look and feel of your poll with custom themes, backgrounds, and more by using our simple point-and-click editor in the themes tab above.</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(0)}>
            <h3>What categories are available?</h3>
            <span className={`arrow ${activeIndex === 0 ? 'expanded' : ''}`}>▼</span>
          </div>
          <div className={`faq-answer ${activeIndex === 0 ? 'show' : ''}`}>
            <p>Categories include education, social media, government, entertainment, sports, healthcare, and technology.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(1)}>
            <h3>What type of polls are available?</h3>
            <span className={`arrow ${activeIndex === 1 ? 'expanded' : ''}`}>▼</span>
          </div>
          <div className={`faq-answer ${activeIndex === 1 ? 'show' : ''}`}>
            <p>We offer multiple types of polls including multiple choice, single choice, yes/no, demographic, polls with comments, ranking polls, and more.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(2)}>
            <h3>Is this poll app free?</h3>
            <span className={`arrow ${activeIndex === 2 ? 'expanded' : ''}`}>▼</span>
          </div>
          <div className={`faq-answer ${activeIndex === 2 ? 'show' : ''}`}>
            <p>Yes, the app is absolutely free, but we do offer premium options to enhance your poll activity.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(3)}>
            <h3>How do I create a new poll?</h3>
            <span className={`arrow ${activeIndex === 3 ? 'expanded' : ''}`}>▼</span>
          </div>
          <div className={`faq-answer ${activeIndex === 3 ? 'show' : ''}`}>
            <p>To create a new poll, navigate to the dashboard and click on the "Create Poll" button. Follow the prompts to define your poll question, set options, and customize the poll settings.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(4)}>
            <h3>Can I delete a poll after it's been created?</h3>
            <span className={`arrow ${activeIndex === 4 ? 'expanded' : ''}`}>▼</span>
          </div>
          <div className={`faq-answer ${activeIndex === 4 ? 'show' : ''}`}>
            <p>Yes, you can delete your poll at any time. Go to your dashboard, select the poll you want to delete, and make the necessary changes.</p>
          </div>
        </div>
      </section>

      <section className="letsgo">
        <div className="letsgo-content">
           <h2>Start Getting Poll Results Now</h2>
           <button className="lets-create" onClick={handleClick('/main')}>Let's Create</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>SurveySphere</h3>
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainSection;
