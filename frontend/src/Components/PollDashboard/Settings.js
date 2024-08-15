import React, { useEffect, useState } from 'react';
import './Setting.css'; // Import the CSS file

const Settings = () => {
  const [topPolls, setTopPolls] = useState([]);

  useEffect(() => {
    const fetchPollData = async () => {
      try {
        // Fetch data from the public-polls API
        const response = await fetch('http://localhost:8080/api/public-polls');
        const data = await response.json();

        // Process the data to count occurrences of each publicId
        const publicIdCounts = data.reduce((acc, poll) => {
          acc[poll.publicId] = (acc[poll.publicId] || 0) + 1;
          return acc;
        }, {});

        // Sort the publicIds by count in descending order and take the top 5
        const sortedPublicIds = Object.entries(publicIdCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5);

        // Fetch nicknames for the top 5 publicIds
        const topPollsWithNicknames = await Promise.all(
          sortedPublicIds.map(async ([publicId, count], index) => {
            const nameResponse = await fetch('http://localhost:8080/api/public/${publicId}');
            const { nickname } = await nameResponse.json();
            console.log(nickname);
            return { publicId, nickname, count, rank: index + 1 };
          })
        );

        setTopPolls(topPollsWithNicknames);
      } catch (error) {
        console.error('Error fetching poll data:', error);
      }
    };

    fetchPollData();
  }, []);


  return (
    <>
    <h1 className="leaderboard-title">Top 5 Public Polls</h1>
    <div className="leaderboard-container">
      
      <ul className="leaderboard-list">
        {topPolls.map(({ publicId, nickname, count, rank }) => (
          <li key={publicId} className={`leaderboard-item rank-${rank}`
          }>
            <span className="leaderboard-rank">{rank}</span>
            <strong style={{marginLeft:"15%"}}>{nickname}</strong> {count} votes
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Settings;