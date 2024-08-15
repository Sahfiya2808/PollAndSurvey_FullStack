import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import './Buzz.css'; // Make sure to create and import the corresponding CSS file

const Buzz = () => {
  return (
    <Container className="buzz-container">
      <Typography variant="h3" className="buzz-title" align="center">
        Buzz
      </Typography>
      <Box className="buzz-images">
        <Box className="buzz-item">
          <Avatar src="image1.jpg" className="buzz-avatar" />
          <Typography variant="body1" className="buzz-feedback">
            "Amazing poll app! Very user-friendly."
          </Typography>
        </Box>
        <Box className="buzz-item">
          <Avatar src="image2.jpg" className="buzz-avatar" />
          <Typography variant="body1" className="buzz-feedback">
            "Great features, highly recommend."
          </Typography>
        </Box>
        <Box className="buzz-item">
          <Avatar src="image3.jpg" className="buzz-avatar" />
          <Typography variant="body1" className="buzz-feedback">
            "Helped us get valuable insights."
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Buzz;
