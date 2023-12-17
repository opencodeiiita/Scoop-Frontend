
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Carousell from '../components/Carousell'
import PopularPost from '../components/PopularPost'

const Home = () => {
   
  return (<>
  <Navbar></Navbar>
  <Carousell />
  <PopularPost></PopularPost>
 </>
    
  )
}

export default Home