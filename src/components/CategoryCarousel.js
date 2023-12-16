import CategoryCard from './CategoryCard.js';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Box, Card, CardMedia, Typography } from '@mui/material';
export default class CategoryCarousel extends Component {
  render() {
    const cardDetails =[{
      img:"https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3",
      Title:"#Animal",
      Desc:"Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them."
      },
      {img:"https://images.unsplash.com/photo-1557315360-6a350ab4eccd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title:"#Birds",
        Desc:"Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
      },
      {
        img:"https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3",
        Title:"#Music",
        Desc:"A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like"
       },
      
       {
        img:"https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3",
        Title:"#LoremIpsum",
        Desc:"Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them."
        },
        {img:"https://images.unsplash.com/photo-1557315360-6a350ab4eccd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          Title:"#Gaming",
          Desc:"Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
        },
        {
          img:"https://images.unsplash.com/photo-1557315360-6a350ab4eccd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          Title:"#Books",
          Desc:"A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like"
         },
         {
            img:"https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3",
            Title:"#LoremIpsum",
            Desc:"Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them."
            },
            {img:"https://images.unsplash.com/photo-1557315360-6a350ab4eccd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              Title:"#Gaming",
              Desc:"Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
            },
            {
              img:"https://images.unsplash.com/photo-1557315360-6a350ab4eccd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              Title:"#Books",
              Desc:"A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like"
             },
             {
                img:"https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3",
                Title:"#LoremIpsum",
                Desc:"Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them."
                },
                {img:"https://images.unsplash.com/photo-1557315360-6a350ab4eccd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  Title:"#Gaming",
                  Desc:"Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
                },
                {
                  img:"https://images.unsplash.com/photo-1557315360-6a350ab4eccd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  Title:"#Books",
                  Desc:"A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like"
                 }
      ]

    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 7,
      
      cssEase: "linear",
      
      width:752,
      
    };

    return  (
       <Box
       sx={{
        display: { xs: 'none', md: 'block', paddingTop: '20px', paddingBottom: '20px' }
       }}
       >    
       
        <Slider {...settings}>     
        {
        cardDetails.map((item,index)=>(
          <div key={index}>
          <CategoryCard 
            img = {item.img}
            Title = {item.Title}
          />
          </div>
        ))
       }
      </Slider>
      </Box>
    );
  }
}