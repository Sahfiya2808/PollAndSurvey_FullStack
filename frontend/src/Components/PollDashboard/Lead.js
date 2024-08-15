import React from 'react';
import './Lead.css'; // Import the CSS file

const users = [
    { name: 'Navitha', votes: 18 },
    { name: 'sahf', votes: 12 },
    { name: 'vishnu', votes: 11 },
    { name: 'ss', votes: 10 },
    { name: 'sree', votes: 9 },
    { name: 'anjana', votes: 8 },
    { name: 'kass', votes: 5 },
];

const Leaderboard = ({ users }) => {
    return (
        <div className="leaderboard-containernew">
            <h2>Top Voters</h2>
            <ol className="leaderboardnew">
                {users.map((user, index) => (
                    <li key={index} className="leaderboard-itemnew">
                        <span className="user-name">{user.name}</span>
                        <span className="vote-count">{user.votes} votes</span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

const Lead = () => {
    return (
        <div>
            <Leaderboard users={users} />
        </div>
    );
};

export default Lead;
