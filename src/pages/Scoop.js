
import React, { useEffect, useState } from 'react'
const news = {
    headline: "The Vision for Teamfight Tactics:  Vegas Open ",
    location: "Rajkot, Gujarat",
    content: "<p><img src=\"https://www.riotgames.com/darkroom/1440/d888b43fd7b5208c68ffac964c6ffd97:a796c7970f60d1a7a736bbb136c0fd8f/alt-kv-tft-character-rgb-16x9-10-09-23.png\" alt=\"\" ></p><p>512 competitors, 60 Headliners, and 1 champion. Welcome to theTeamfight <strong>Tactics Vegas Open</strong>, a new look for TFT esports. OnDecember 8th, 2023, 512 of the best TFT players in the world will sitdown in Vegas, be separated into lobbies of 8, and battle it out inTFT Set 10: Remix Rumble. They’ll play for the biggest share of a$300,000 prize pool with the winner also receiving a custom in-game emote that no other player will be able to own.&nbsp;</p><p></p><p>“The TFT Vegas Open is our first attempt at a uniquely TFT esportsstrategy that celebrates the opportunity of anybody competing andbeing a TFT champion,” said Michael Sherman, Global Head of TFT,Legends of Runeterra, and Project L Esports. “Players will competeover three days in some of the most high stakes TFT matches in thegame’s history.”</p><p></p><p>While some competitors are familiar faces in the TFT streamingworld and past competitive events, there are also plenty of Masterto Challenger level players taking their first step into the light in LasVegas.</p><p></p><p>The format for the Vegas Open is brand new for TFT but drawsinspiration from strategy games, esports community celebrations,and some of Vegas’ premiere events. Here’s Mortdog to break itdown further:&nbsp;</p>",
    tags: ["Gaming","Valorant", "CounterStrike"]
    //hardcode any other data if needed
}
const scoops=[
  {label:"news",date:"Dec 13, 2023",img:"https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt35a9c1355e1316d1/6573accb9c56812d4c786859/Worlds-Viewer-Guide--Banner.jpg",text:"The Winners of the 2023 Charity Voting Campaign"},
  {label:"news",date:"Dec 11, 2023",img:"https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt35a9c1355e1316d1/6573accb9c56812d4c786859/Worlds-Viewer-Guide--Banner.jpg",text:"A View to Worlds"},
  {label:"news",date:"Dec 4, 2023",img:"https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt35a9c1355e1316d1/6573accb9c56812d4c786859/Worlds-Viewer-Guide--Banner.jpg",text:"TFT Vegas Open: Everything You Need to Know"},
  {label:"news",date:"Nov 29, 2023",img:"https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt35a9c1355e1316d1/6573accb9c56812d4c786859/Worlds-Viewer-Guide--Banner.jpg",text:"Marc Merrill Takes on New Role as Chief Product Officer at Riot Games "},
  {label:"inside riot",date:"Dec 28, 2023",img:"https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt35a9c1355e1316d1/6573accb9c56812d4c786859/Worlds-Viewer-Guide--Banner.jpg",text:"Riot Games Soical Impact Fund Crosses $50M Raised"},

]

const CommentCard=({pfp,username,time,comment})=>
{
  return (
    <li className='bg-white pt-7 pb-6 pl-20 pr-6 rounded-lg space-y-4'>
    <section className='flex justify-start items-center space-x-4'>
      <img src={pfp} className='w-8 h-8 rounded-full'/>
      <h3 className='text-base font-semibold text-Dark_Blue font-FF'>{username}</h3>
      <p className='text-base text-Grayish_Blue'>{time}</p>
    </section>
    <p className='text-Grayish_Blue max-w-[618px]'>{comment}</p>
  </li>
  )
}

const NewComment=({pfp})=>
{
  return (
    <li className='bg-white p-6 flex justify-between rounded-lg space-x-4 mt-9'>
      <img src={pfp} className='w-10 h-10 rounded-full'/>
      <textarea className='grow px-6 border rounded-lg resize-none h-24' placeholder='Add a comment...'/>
      <button className='bg-[#5357B6] self-start border rounded-lg py-3 px-7 font-medium'>SEND</button>
    </li>
  )
}

const ScoopCard=({label,img,date,text})=>
{
  return (
    <li>
      <img src={img} className=''/>
      <aside className=' space-x-6 mt-3 mb-4'>
      <span className='bg-red-600 uppercase text-white font-medium tracking-widest text-xs px-3 py-1 pt-2'>{label}</span>
      <small className='text-gray-600 tracking-widest'>{date}</small>
      </aside>
      <h1 className='text-2xl font-bold text-text'>{text}</h1>
    </li>
  )
}

const Scoop = () => {

  return (
    <div className='font-FF flex justify-center items-center bg-[#DBD9D6] pt-16 pl-80 pr-64 max-sm:px-6'>
      <div className=' flex space-x-32 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-10'>
        <section className='mt-9 grow'>
          <span className='bg-red-500 text-white font-semibold tracking-widest text-xs pl-1 py-0.5 pr-10'>SCOOP</span>
          <h1 className='text-[43px] leading-[48px] text-text max-w-4xl font-extrabold mb-4 relative'>{news?.headline}
            <button className='font-FF text-xs p-0 py-0.5 tracking-widest font-bold px-5 bg-green-600 absolute bottom-2 ml-5'>UPVOTE</button>
          </h1>

          <header className='space-y-2 mb-3'>
            <section className='flex items-center'>
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
          </section>
            <section className='flex justify-start space-x-1 items-center'>
              {/* Enter actual profile img here instead of svg */}
              <svg className='-ml-5' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="url(#paint0_linear_382_1652)"/>
                <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#ADACAA"/>
                <path d="M27.3002 25C26.7002 25 26.3002 25.5 26.3002 26C26.3002 26.6 26.8002 27 27.3002 27C27.8002 27 28.3002 26.5 28.3002 26C28.3002 25.5 27.9002 25 27.3002 25ZM23.7002 26C23.7002 25.4 23.2002 25 22.7002 25C22.2002 25 21.7002 25.5 21.7002 26C21.7002 26.6 22.2002 27 22.7002 27C23.2002 27 23.7002 26.6 23.7002 26ZM27.1002 28.4C26.7002 28.8 25.7002 29 25.0002 29C24.3002 29 23.4002 28.8 22.9002 28.4C22.8002 28.3 22.6002 28.3 22.5002 28.4C22.4002 28.5 22.4002 28.7 22.5002 28.8C23.2002 29.5 24.6002 29.6 25.0002 29.6C25.4002 29.6 26.8002 29.6 27.5002 28.8C27.6002 28.7 27.6002 28.5 27.5002 28.4C27.4002 28.3 27.2002 28.3 27.1002 28.4Z" fill="#2B2A29"/>
                <defs>
                <linearGradient id="paint0_linear_382_1652" x1="21.5997" y1="-0.443918" x2="22.648" y2="50.5621" gradientUnits="userSpaceOnUse">
                <stop offset="0.495" stop-color="#DBD9D6"/>
                <stop offset="0.505" stop-color="#D1363A"/>
                </linearGradient>
                </defs>
              </svg>
              <h3 className='text-base font-extrabold'>Om Buddhadev</h3>
              </section>
          </header>
          <main className='space-y-7 mb-6' dangerouslySetInnerHTML={{ __html: news.content }}></main>
          <span className='bg-red-600 text-white font-medium tracking-widest text-xs px-3 pt-1 pb-0.5'>COMMENTS</span>
          <ul className='mt-2 space-y-5'>
            <CommentCard pfp={"https://i.pinimg.com/236x/d9/21/4a/d9214ad661353dffe8846da342e1a004.jpg"} username={"amyrobson"} time={"1 month ago"} 
            comment={"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well."}/>
            <CommentCard pfp={"https://i.pinimg.com/236x/d9/21/4a/d9214ad661353dffe8846da342e1a004.jpg"} username={"maxblagun"} time={"2 weeks ago"} 
            comment={"Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"}/>
          </ul>
          <NewComment pfp={"https://i.pinimg.com/236x/d9/21/4a/d9214ad661353dffe8846da342e1a004.jpg"} />
        </section>

        <section className=''>
          <h1 className='text-text w-full text-[40px] font-FF font-extrabold font-'>Latest Scoop</h1>
          <ul className='space-y-9'>
            {scoops?.map((scoop,index)=>(
              <ScoopCard key={index} label={scoop.label} 
              img={scoop.img}
              date={scoop.date}
              text={scoop.text} />
            ))}
          </ul>
        </section>
      </div>
    </div>
    
  )
}

export default Scoop