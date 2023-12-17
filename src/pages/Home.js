
import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Carousell from '../components/Carousell'
import PopularPost from '../components/PopularPost'


const Home = () => {
   
  return (<>

  <h1>HOME</h1>
  <Navbar></Navbar>
  <Carousell />
  <PopularPost></PopularPost>
 </>
    
  )
}

export default Home