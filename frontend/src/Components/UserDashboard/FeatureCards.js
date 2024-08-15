import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FeatureCards.css';
import PollOptions from '../PollOptions';

const FeatureCards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');

    if (loggedInUserId) {
      axios.get(`http://localhost:8080/api/polls/user/${loggedInUserId}`)
        .then(response => {
          const fetchedCards = response.data.map(poll => ({
            pollId: poll.pollId,
            pollType: poll.pollType,
            question: poll.question,
            option1: poll.option1,
            option2: poll.option2,
            option3: poll.option3,
            option4: poll.option4,
            option5: poll.option5,
            fontFamily: poll.fontFamily,
            fontSize: poll.fontSize,
            fontColor: poll.fontColor,
            backgroundColor: poll.backgroundColor,
            pollCategory: poll.pollCategory,
            rating: poll.rating,
            yesValue: poll.yesValue,
            noValue: poll.noValue,
            matrixColumns: poll.matrixColumns,
            matrixRows: poll.matrixRows,
            images: poll.images
          }));
          setCards(fetchedCards);
        })
        .catch(error => {
          console.error('There was an error fetching the polls!', error);
        });
    }
  }, []);

  const handleChange = (pollId) => {
    navigate(`/edit-poll/${pollId}`);
  };

  const handleDelete = (pollId) => {
    axios.delete(`http://localhost:8080/api/polls/${pollId}`)
      .then(() => {
        setCards(cards.filter(card => card.pollId !== pollId));
      })
      .catch(error => {
        console.error('There was an error deleting the poll!', error);
      });
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };


  return (
    <section className="feature-cards">
    {cards.slice(0, visibleCount).map(card => (
      <center key={card.pollId}>
        <div className="polling-card" style={{ fontFamily: card.fontFamily, fontSize: `${card.fontSize}px`, color: card.fontColor, backgroundColor: card.backgroundColor }}>
          <div className="poll-title" style={{ fontSize: `${card.fontSize}px` }}>
              <strong>{card.question}</strong>
            </div>
            <PollOptions pollDetails={card} />
            <div className="card-buttons">
              <button className="change-button" onClick={() => handleChange(card.pollId)}>Change</button>
              <button className="delete-button" onClick={() => handleDelete(card.pollId)}>Delete</button>
            </div>
          </div>
          
        </center>
      ))}
      <button className="show-more" onClick={() => navigate('/DisplayPolls')}>+</button>
    </section>
  );
};

export default FeatureCards;