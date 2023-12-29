
import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Carousell from '../components/Carousell'
import PopularPost from '../components/PopularPost'
import { Box } from '@mui/material'
import LatestNews from '../components/LatestNews'
import CategoryCarousel from "../components/CategoryCarousel";

const Home = () => {
   

  return (<Box sx={{ bgcolor: 'black', width: '100vw' }}>
  <Navbar />
 
 <CategoryCarousel />
  <Carousell />
  <PopularPost></PopularPost>
  <LatestNews />
 </Box>
    
  )
}

export default Home