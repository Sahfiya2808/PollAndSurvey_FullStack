import React from 'react';
import { Typography } from '@mui/material';
import PollOptions from './PollOptions';
import './Dashboard.css';

const TrendingPolls = ({ polls, submittedPolls, handleResponseChange, handleSubmit }) => {
  return (
    <section className="trending">
      <Typography variant="h4" gutterBottom className="sectionTitle">
        What's Trending
      </Typography>
      <div className="horizontalScrollContainer">
        {polls.map(poll => {
          const style = {
            fontFamily: poll.fontFamily || 'Arial',
            fontSize: '16px',
            color: poll.fontColor || '#000',
            backgroundColor: poll.backgroundColor || '#fff',
          };
          const isSubmitted = submittedPolls.has(poll.pollId);

          return (
            <div key={poll.pollId} className="poll-item" style={style}>
              <div className="poll-titles">
                <strong>{poll.question}</strong>
              </div>
              <PollOptions pollDetails={poll} onResponseChange={handleResponseChange} />
              <button
                className="submit"
                style={{ width: "150px", marginTop: "10px", backgroundColor: isSubmitted ? "#B0B0B0" : "rgb(12, 57, 82)" }}
                onClick={() => handleSubmit(poll.pollId)}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Submitted' : 'Submit'}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingPolls;
