import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PollCharts = () => {
    const [data, setData] = useState([]);
    const publicId = localStorage.getItem('publicId');
  
    useEffect(() => {
      fetch(`http://localhost:8080/api/public-polls/user/${publicId}/votes-by-category`)
        .then(response => response.json())
        .then(data => {
          const formattedData = Object.keys(data).map(category => ({
            name: category,
            votes: data[category],
          }));
          setData(formattedData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [publicId]);
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="votes" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
};

export default PollCharts;