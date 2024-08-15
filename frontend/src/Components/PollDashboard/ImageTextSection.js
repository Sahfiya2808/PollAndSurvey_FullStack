import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageTextSection.css'

const ImageTextSection = () => {
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        // Fetch the public ID from local storage
        const publicId = localStorage.getItem('publicId');

        if (publicId) {
            // Fetch the list of users from the API
            axios.get('http://localhost:8080/api/public')
                .then(response => {
                    // Find the user with the matching publicId
                    const user = response.data.find(user => user.publicId === parseInt(publicId));
                    if (user) {
                        setNickname(user.nickname);
                    } else {
                        console.error('User not found');
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    return (
        <section className="user-info-section">
            <div className="user-info-container">
                <div className="text-section">
                    <h2>Welcome, {nickname}</h2>
                    <p>This is your personalized page where you can see your details and manage your account. Enjoy exploring Pollify and make the most of the features we offer. Engage with polls, take surveys, and see how your opinions align with others.</p>
                    <div className="button-container">
                    <button className="vote-button">Let's Vote</button>
                    </div>
                </div>
                <div className="image-section">
                <img src="https://img.freepik.com/free-vector/flat-hand-drawn-people-analyzing-growth-charts_23-2148873786.jpg?ga=GA1.1.1089435049.1721976240" alt="User Info" />
                </div>
            </div>
        </section>
    );
};

export default ImageTextSection;
