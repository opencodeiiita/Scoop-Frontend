import React from 'react';
import {Box, Card, CardMedia, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
export default function Card1(props)
{
  return(
    <Card sx={{ 
      height:{
        xs:4,
        sm:452,
        md:452,
        lg:452,
        xl:452
      },
      borderRadius: '15px',
      marginX: '1.5rem'
      }}>    
     <Box sx={{ position: 'relative',borderRadius: '15px' }}>
     <CardMedia
        sx={{ borderRadius: '15px' }}
        component="img"
        height="452"
        src={props.img}
        alt="Driving Tips"
      />
     <Box
        sx={{
          position: 'absolute',
          
          bottom: '5%',
          left: 0,
          right:0,
          mx: 'auto',
          height: '8rem',
          width: '95%',
          bgcolor: 'rgba(0, 0, 0, 0.54)',
          color: 'white',
          boxShadow: 3,
          backgroundColor: '#fff',
          borderRadius: '10px', 
          paddingX: '1.5rem',
          paddingY: '0.2rem',
          overflow: 'Hidden',
          opacity: '0.75'
        
        }}
      >
          <Typography 
          sx={
            {
              variant: "h5",
              color: 'black',
              fontSize: 25,
            
            }
          }
          fontFamily='Roboto'
          >
            {props.Title}
          </Typography>
        
          <Typography 
          sx={{ 
              textOverflow: 'ellipsis', 
              
            }} 
          variant="body2" color='black' fontSize={14} fontFamily='Roboto' noWrap
          >
            {props.Desc}
          </Typography>      
        </Box>
     </Box>
    </Card>
  )
}
