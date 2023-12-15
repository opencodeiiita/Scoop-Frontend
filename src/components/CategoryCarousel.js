import React, { useState } from 'react';
import { Box, CardContent, Typography, Stack } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const imageUrls = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1664541337092-81ad747fc1f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1415604934674-561df9abf539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc29yfGVufDB8fDB8fHww',
  'https://placement.iiita.ac.in/assets/aboutImage.webp'
];

const categories = ["Food", "Animals", "Nature", "Tech", "People", "Objects", "Professor", "IIITA"];

const CardCarousel = () => {
  const renderCard = (category, index) => (
    <Box
      sx={{
        width: 200,
        borderRadius: 5,
        boxShadow: 3,
        backgroundImage: `url(${imageUrls[index]})`,
        backgroundSize: 'cover',
        color:'#ffffff'
      }}
    >
      <CardContent sx={{ textAlign: 'center', padding: 2 }}>
        <Typography variant="h5">#{category}</Typography>
      </CardContent>
    </Box>
  );

  return (
    <Box sx={{width:'100vw',overflow:'hidden'}}>
      <Carousel animation="slide" sx={{position:'absolute', width: '120vw' }}>
        <Stack direction="row" spacing={1}>
          {categories.map((category, index) => renderCard(category, index))}
        </Stack>
      </Carousel>
    </Box>
  );
};

export default CardCarousel;
