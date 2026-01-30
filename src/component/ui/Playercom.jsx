import React, { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { IoPlaySkipBackSharp, IoPlaySkipForward } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import {  nextaudio, pauseaudio, playaudio, previousaudio } from '../../store/reducers/playerSlice.jsx' ;
import LikeFunction from './likeFunction.jsx';

export let audio;

function Playercom() {
  const dispatch = useDispatch();
  const data =useSelector((state)=>state.player)
  const {currid,currdata,playstatus} = data;
 audio = useRef(new Audio());
  const [isplaying,setisplaying] =useState(0);
  const [duration,setduration] = useState(0);
  const [progress,setprogress] = useState(0)

  const calculatetime = (second)=>{
    const min = Math.floor(second/60);
    const sec = Math.floor(second%60);
    const sec00 = sec <10 ?'0'+sec:sec;
   return min+':'+sec00
}
const progresscal = ()=>{
const Tduration = audio.current.duration
const cduration = audio.current.currentTime
currentduration()
setprogress(Math.floor(cduration /Tduration *100))
}
const currentduration=()=>{
  let currentDurationOfSong =calculatetime(audio.current.currentTime);
  setisplaying(currentDurationOfSong)
  return currentDurationOfSong
} 
const totalduration = ()=>{
 const duration=calculatetime(audio.current.duration)
 setduration(duration)
 return duration
}



useEffect(() => {
  audio.current.src = currdata[currid].audio;
  audio.current.addEventListener('loadedmetadata', () => {
  currentduration()
  totalduration()
  progresscal()
   });
  if (playstatus) {
    audio.current.play();
  }
}, [currid, currdata]);
const nextsongplayonend=()=>{
dispatch(nextaudio())
}
  return (
    <>

      <div className='container bg-rose-600  rounded-3xl  '>
            <div className='flex flex-col items-center '>
              <audio ref={audio} onTimeUpdate={progresscal} 
              preload="auto"
              onEnded={nextsongplayonend} 
                ></audio>
                <h3 className='text-2xl mb-2'>Now Playing</h3>
                <div className=' w-96 h-72  m-2 relative  flex items-center rounded-3xl overflow-hidden'>
                   <img className=' w-96 h-72 rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in ' 
            src={currdata[currid].image} alt={currdata[currid].audioName} />
            <span className='absolute bottom-[6%] right-[8%]'>
                  < LikeFunction data={currdata[currid]}/>
                </span>
                </div>
                {/* <img className='rounded-3xl' src= alt= /> */}
                <div>
                    <h3 className='font-bold text-center'>{currdata[currid].audioName}</h3>
                    <p className='text-center'>{currdata[currid].artist}</p>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center my-8 text-white gap-3  '>
                    <span >
                        <p>{isplaying}</p>
                    </span>
                    

                    <div className='w-[100%] h-3 rounded-xl bg-slate-700 overflow-hidden'>
                    <div
                      style={{width:`${progress}%`,
                    }
                  }
                     className={` bg-white h-3`}
                    >
                    </div>
                    </div>
                    <span >
                        <p>{
                          duration
                          }</p>
                    </span>
                </div>
                <div className='flex items-center justify-center my-4 text-white gap-6'>
                    <button 
                    onClick={()=>{
                                    dispatch(previousaudio())
                                    dispatch(playaudio())
                                    
                                  
                                  }}
                    className='flex justify-center items-center  text-3xl  p-3'>
                        <IoPlaySkipBackSharp />
                    </button>
                    <button 
                    onClick={()=>{ 
                        playstatus?dispatch(pauseaudio())
                        :dispatch(playaudio())
                    }}
                    className='flex justify-center items-center rounded-xl text-3xl bg-[#00000089] p-3'>
                        { playstatus?<FaPause />:<FaPlay />}
                    </button>
                    <button
                    onClick={()=>{
                                    dispatch(nextaudio())
                                    dispatch(playaudio())
                                    }}
                    className='flex justify-center items-center  text-3xl  p-3'>
                        <IoPlaySkipForward />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Playercom