import React, { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { IoPlaySkipBackSharp, IoPlaySkipForward } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import {  nextaudio, pauseaudio, playaudio, previousaudio} from '../../store/reducers/playerSlice.jsx' ;
import LikeFunction from './likeFunction.jsx';
import { currentdurationsend, totaldurationsend } from './Playercom.jsx';

export let audio;

function Playerbar() {
    const dispatch = useDispatch();
  const data =useSelector((state)=>state.player)
  const {currid,currdata,playstatus,currentaudiostatus,totaldurationaudio,audioprogress} = data;
  return (
    <>

      <div className='h-full w-[100vw] bg-[#0f0e0e] px-3 py-2'>
        

            <div className='flex items-center '>
             
                <div className=' w-32 sm:w-36 md:w-40 aspect-square  m-2 relative  flex items-center rounded-3xl overflow-hidden'>
                   <img className=' w-full h-full rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in ' 
            src={currdata[currid].image} alt={currdata[currid].audioName} />
            
                </div>
                <div className='relative w-full'> 
                    <h3 className='font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl my-1'>{currdata[currid].audioName}</h3>
                    <p className='text-center text-xs sm:text-sm md:text-lg lg:text-xl'>{currdata[currid].artist}</p>
                          <span className='absolute  top-2 right-8 sm:right-10  md:right-14  text-2xl md:text-3xl lg:text-4xl'>
                  < LikeFunction data={currdata[currid]}/>
                </span>
                <div className='flex items-center justify-center  text-white gap-3 text-xs sm:text-sm md:text-lg lg:text-xl px-1'>
                    <span >
                        <p>{currentaudiostatus}</p>
                    </span>
                    

                    <div className='w-[100%] h-2 rounded-xl bg-slate-700 overflow-hidden '>
                    <div
                      style={{width:`${audioprogress}%`,
                    }
                  }
                     className={` bg-white h-3`}
                    >
                    </div>
                    </div>
                    <span >
                        <p>{
                          totaldurationaudio
                          }</p>
                    </span>
                </div>
                <div className='flex items-center justify-center my-1  text-white gap-6 text-xl sm:text-2xl md:text-2xl py-2'>
                    <button 
                    onClick={()=>{
                                    dispatch(previousaudio())
                                    dispatch(playaudio())
                                    
                                  
                                  }}
                    className='flex justify-center items-center   p-3'>
                        <IoPlaySkipBackSharp />
                    </button>
                    <button 
                    onClick={()=>{ 
                        playstatus?dispatch(pauseaudio())
                        :dispatch(playaudio())
                    }}
                    className='flex justify-center items-center rounded-xl  bg-[#00000089] p-3'>
                        { playstatus?<FaPause />:<FaPlay />}
                    </button>
                    <button
                    onClick={()=>{
                                    dispatch(nextaudio())
                                    dispatch(playaudio())
                                    }}
                    className='flex justify-center items-center  p-3'>
                        <IoPlaySkipForward />
                    </button>
                </div>
                 </div>
            </div>
                
            
        </div>
    </>
  )
}

export default Playerbar
