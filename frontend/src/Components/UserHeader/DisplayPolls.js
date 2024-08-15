import React, { useEffect, useState } from 'react';
import './DisplayPolls.css';
import PollOptions from '../PollOptions';
import { useNavigate } from 'react-router-dom';
import addServices from '../../Service/AddServices';
import ResultModel from './ResultModel'; // Import the modal component

const DisplayPolls = () => {
  const [pollsByCategory, setPollsByCategory] = useState({});
  const [selectedPollId, setSelectedPollId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [currentPage, setCurrentPage] = useState(0); // Track current page
  const pollsPerPage = 3; // Display 3 polls per page
  const navigate = useNavigate();


  useEffect(() => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    const fetchPolls = async () => {
      try {
        const polls = await addServices.fetchPollsByUser(loggedInUserId);

        // Group polls by category
        const groupedPolls = polls.reduce((acc, poll) => {
          const category = poll.pollCategory || 'Uncategorized';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(poll);
          return acc;
        }, {});

        setPollsByCategory(groupedPolls);
      } catch (error) {
        console.error('There was an error fetching the polls!', error);
      }
    };

    fetchPolls();
  }, []);

  const openModal = (pollId) => {
    setSelectedPollId(pollId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPollId(null);
  };

  const deletePoll = async (pollId) => {
    const confirmed = window.confirm('Are you sure you want to delete this poll?');
    if (!confirmed) {
      return;
    }

    try {
      await addServices.deletePoll(pollId);
      setPollsByCategory(prevPolls => {
        // Remove the deleted poll from the state
        const updatedPolls = { ...prevPolls };
        for (const category in updatedPolls) {
          updatedPolls[category] = updatedPolls[category].filter(poll => poll.pollId !== pollId);
        }
        return updatedPolls;
      });
    } catch (error) {
      console.error('There was an error deleting the poll!', error);
    }
  };

  const handleNextPage = () => {
    const totalPolls = Object.keys(pollsByCategory).reduce((acc, category) => {
      return acc.concat(pollsByCategory[category]);
    }, []).length;

    if ((currentPage + 1) * pollsPerPage < totalPolls) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get the polls for the current page
  const displayedPolls = Object.keys(pollsByCategory).reduce((acc, category) => {
    return acc.concat(pollsByCategory[category]);
  }, []).slice(currentPage * pollsPerPage, (currentPage + 1) * pollsPerPage);

  return (
    <div className="display-polls-container">
      {Object.keys(pollsByCategory).map(category => (
        <div key={category} className="polls-by-category">
          <div className="category-title-container">
            <h2 className="category-title">{category}</h2>
            <button className="load-more-button" onClick={() => navigate('/main')}>+</button>
          </div>
          <div className="polls-card-list">
            {displayedPolls.map(poll => (
              <div key={poll.pollId} className="poll-card" style={{ fontFamily: poll.fontFamily, fontSize: `${poll.fontSize}px`, color: poll.fontColor, backgroundColor: poll.backgroundColor }}>
                <div className="poll-title" style={{ fontSize: `${poll.fontSize}px` }}>
                  <strong>{poll.question}</strong>
                </div>
                <PollOptions pollDetails={poll} />
                <div className="poll-card-buttons">
                  <button className="poll-change-button" onClick={() => deletePoll(poll.pollId)}>Delete</button>
                  <button className="poll-delete-button" onClick={() => openModal(poll.pollId)}>Result</button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      ))}
      {isModalOpen && <ResultModel pollId={selectedPollId} onClose={closeModal} />}
      <div className="display-navigation-arrows">
        <button className="arrow left-arrow" onClick={handlePreviousPage} disabled={currentPage === 0}>&#8249;</button>
        <button className="arrow right-arrow" onClick={handleNextPage} disabled={displayedPolls.length < pollsPerPage}>&#8250;</button>
      </div>
    </div>
  );
};

export default DisplayPolls;
