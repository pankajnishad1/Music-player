import React from 'react'
import { GiLoveSong } from 'react-icons/gi'
import { IoIosArrowRoundBack } from 'react-icons/io'

import { SiPodcastindex } from 'react-icons/si'
import {  NavLink, Outlet, useNavigate } from 'react-router-dom'

function YourLibrary() {
  let currstatesSong;
  let currstatesPodcast;
     const navigate = useNavigate()
    const gobackhandler =()=>{
      navigate(currstatesSong||currstatesPodcast?'/YourLibrary':'/');
    }
  return (
    <div className='container-div'>
      <button onClick={gobackhandler}>
                          <span className='text-white text-[3rem]  ml-10'>
                            <IoIosArrowRoundBack />
                          </span>
                        </button>
      <div className='flex gap-5'>
       <NavLink to='likedSongs' >
                    {(status)=>{  currstatesSong=status.isActive 
                        return <>
                          <div className=' flex flex-col  gap-3 items-center justify-center text-2xl tracking-widest mt-5 p-5 rounded-xl'>
                              <div className=' relative  flex items-center justify-center rounded-3xl overflow-hidden aspect-square h-44 sm:h-56 md:h-64 lg:h-72'>
                                  <div className='aspect-square flex items-center justify-center rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-pink-500 text-white  h-40 sm:h-48 md:h-56 lg:h-64  text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem'>
                                      <GiLoveSong />
                                  </div>
                              </div>
                          <h1>
                          Liked Songs
                          </h1>
                          </div>
                        </>
                    }}
        </NavLink>
       <NavLink to='likedPodcast' >
                    {(status)=>{  currstatesPodcast=status.isActive 
                        return <>
                          <div className=' flex flex-col  gap-3 items-center justify-center text-2xl tracking-widest mt-5 p-5 rounded-xl'>
                              <div className=' relative  flex items-center justify-center rounded-3xl overflow-hidden aspect-square h-44 sm:h-56 md:h-64 lg:h-72'>
                                  <div className='flex items-center justify-center  rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in bg-gradient-to-t from-stone-500 via-green-900 to-sky-300 text-white h-40 sm:h-48 md:h-56 lg:h-64 aspect-square text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem'>
                                      <SiPodcastindex />
                                  </div>
                              </div>
                          <h1>
                          Liked Podcast
                          </h1>
                          </div>
                        </>
                    }}
        </NavLink>
          </div>
             <Outlet/>
    </div>
  )
}

export default YourLibrary
