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
    <div className='container'>
      <button onClick={gobackhandler}>
                          <span className='text-white text-[3rem]'>
                            <IoIosArrowRoundBack />
                          </span>
                        </button>
      <div className='flex gap-5'>
       <NavLink to='likedSongs' >
                    {(status)=>{  currstatesSong=status.isActive 
                        return <>
                          <div className='w-72 flex flex-col  gap-3 items-center justify-center text-2xl tracking-widest mt-5 p-5 rounded-xl'>
                              <div className=' relative  flex items-center rounded-3xl overflow-hidden'>
                                  <div className='h-64 w-64 flex items-center justify-center rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-pink-500 text-white'>
                                      <GiLoveSong size={100}/>
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
                          <div className='w-72 flex flex-col  gap-3 items-center justify-center text-2xl tracking-widest mt-5 p-5 rounded-xl'>
                              <div className=' relative  flex items-center rounded-3xl overflow-hidden'>
                                  <div className='h-64 w-64 flex items-center justify-center rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in bg-gradient-to-t from-stone-500 via-green-900 to-sky-300 text-white'>
                                      <SiPodcastindex size={100} />
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
