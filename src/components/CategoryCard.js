import React from 'react';
import {Box, Card, CardMedia, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
export default function Card1(props)
{ 
  return(
    <Card sx={{ 
        width: 170,
      height:48,
      borderRadius: '15px',
      marginX: '1.5rem'
      }}>    
     <Box sx={{ position: 'relative',borderRadius: '15px' }}>
     <CardMedia
        sx={{ borderRadius: '15px',filter: 'blur(3px)' }}
        component="img"
        height="48"
        src={props.img}     
      />
     <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: 0,
          right:0,
          mx: 'auto'
          
        
        }}
      >
          <Typography 
          sx={
            {   
            textAlign: 'center',
              variant: "h5",
              color: 'white',
              fontSize: 25,
              textWeight: 'bold' 
            }
          }
          fontFamily='Roboto'
          >
            {props.Title}
          </Typography>             
        </Box>
   </Box>
    </Card>
  )
}
