
import React from 'react'
import Carousell from '../components/Carousell';

const Home = () => {
  const cardDetails =[{
    "img":"https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3",
    "Title":"How to Drive a Car Safely",
    "Desc":"Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them."
    },
    {"img":"https://images.unsplash.com/photo-1557315360-6a350ab4eccd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Title":"How to Make Dance Music",
      "Desc":"Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
    },
    {
      "img":"/Users/harshsingh/repos/Scoop-Frontend/image.png",
      "Title":"Why I Stopped Using Multiple Monitor",
      "Desc":"A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like"
     }]
  return (<>
  <h1>HOME</h1>  
  <Carousell />       
  </>
    
  )
}

export default Home