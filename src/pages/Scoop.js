
import React, { useEffect, useState } from 'react'
const news = {
    headline: "The Vision for Teamfight Tactics:  Vegas Open ",
    location: "Rajkot, Gujarat",
    content: "<p><img src=\"https://c4.wallpaperflare.com/wallpaper/574/1000/943/valorant-video-games-riot-games-yoru-valorant-hd-wallpaper-preview.jpg\" alt=\"\" width=\"300px\"></p><p>512 competitors, 60 Headliners, and 1 champion. Welcome to theTeamfight <strong>Tactics Vegas Open</strong>, a new look for TFT esports. OnDecember 8th, 2023, 512 of the best TFT players in the world will sitdown in Vegas, be separated into lobbies of 8, and battle it out inTFT Set 10: Remix Rumble. They’ll play for the biggest share of a$300,000 prize pool with the winner also receiving a custom in-game emote that no other player will be able to own.&nbsp;</p><p></p><p>“The TFT Vegas Open is our first attempt at a uniquely TFT esportsstrategy that celebrates the opportunity of anybody competing andbeing a TFT champion,” said Michael Sherman, Global Head of TFT,Legends of Runeterra, and Project L Esports. “Players will competeover three days in some of the most high stakes TFT matches in thegame’s history.”</p><p></p><p>While some competitors are familiar faces in the TFT streamingworld and past competitive events, there are also plenty of Masterto Challenger level players taking their first step into the light in LasVegas.</p><p></p><p>The format for the Vegas Open is brand new for TFT but drawsinspiration from strategy games, esports community celebrations,and some of Vegas’ premiere events. Here’s Mortdog to break itdown further:&nbsp;</p>",
    tags: ["Gaming","Valorant", "CounterStrike"]
    //hardcode any other data if needed
}

const Scoop = () => {

  return (
    <div className='font-FF'>
      <span className='bg-red-500 text-white font-semibold tracking-widest text-sm pl-1 pr-10'>SCOOP</span>
      <h1 className='text-[43px] text-text font-extrabold mb-0 relative'>{news?.headline}
       <button className='font-FF text-xs p-0 py-0.5 tracking-widest font-bold px-5 bg-green-600 absolute bottom-4 ml-5'>UPVOTE</button>
      </h1>

      <header className='flex items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
        <g clip-path="url(#clip0_382_1648)">
          <path d="M3 18.42C1.3 18.42 0 17.02 0 15.42V14.42C0 14.32 0.1 14.12 0.1 14.02C0.2 13.92 0.3 13.92 0.5 13.92H2V3.42004C2 1.72004 3.4 0.420044 5 0.420044H17C18.7 0.420044 20 1.82004 20 3.42004V4.92004C20 5.12004 19.8 5.42004 19.5 5.42004H15V15.42C15 17.02 13.7 18.42 12 18.42H3ZM5 1.42004C3.9 1.42004 3 2.32004 3 3.42004V13.92H9.4C9.7 13.92 9.9 14.12 9.9 14.42V15.42C9.9 16.52 10.8 17.42 11.9 17.42C13 17.42 13.9 16.52 13.9 15.42V3.42004C13.9 2.72004 14.1 2.12004 14.6 1.52004L14.7 1.42004H5ZM1 15.42C1 16.52 1.9 17.42 3 17.42H9.7L9.6 17.32C9.2 16.72 9 16.12 9 15.42V14.92H1V15.42ZM17 1.42004C15.9 1.42004 15 2.32004 15 3.42004V4.42004H19V3.42004C19 2.32004 18.1 1.42004 17 1.42004Z" fill="#D1363A"/>
          <path d="M5.7002 9.42004H11.7002V10.42H5.7002V9.42004ZM5.7002 7.42004H11.7002V8.42004H5.7002V7.42004ZM5.7002 5.42004H11.7002V6.42004H5.7002V5.42004Z" fill="#D1363A"/>
        </g>
        <defs>
          <clipPath id="clip0_382_1648">
            <rect width="20" height="18" fill="white" transform="translate(0 0.420044)"/>
          </clipPath>
        </defs>
      </svg>
      <h1 className='text font-extrabold text-base mb-0 mr-5 ml-2'>Dec 8, 2023 / {news?.location}</h1>

      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4.5 0V2H14.1L0 16.1L1.4 17.5L15.5 3.4V13H17.5V0H4.5Z" fill="#D1363A"/>
      </svg>
      <h1 className='text font-extrabold text-base mb-0 ml-2'>{news?.tags.join(", ")}</h1>
      
      </header>
    </div>
    
  )
}

export default Scoop