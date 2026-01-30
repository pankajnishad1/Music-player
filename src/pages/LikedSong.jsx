import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LikeFunction from '../component/ui/likeFunction';
import { currdata, currid, playaudio } from '../store/reducers/playerSlice';

function LikedSong() {
  const songdata = useSelector((state)=>state.music.arrsong)
  const podcastdata = useSelector((state)=>state.podcast.arrpodcast)
  const likeddata = useSelector((state)=>state.like.arrLiked)
  const podcastlikeddata = useSelector((state)=>state.like.podcastlikeddata)
  const songlikeddata = useSelector((state)=>state.like.songlikeddata)
  const dispatch = useDispatch();
  return (
<div className='container' >
      <h1 className='mt-2 mb-6 font-bold text-[2.5rem]'>Saved Songs</h1> 
        <div className='grid grid-cols-4 gap-8 '>
          {songlikeddata.map((data,index)=>{
            const {image,audioName,artist,id,type} = data;
            return (
              <div onClick={()=>{
                dispatch(currid(index)),
                dispatch(currdata(songlikeddata))
                dispatch(playaudio())
                }}  className='  flex flex-col  items-center justify-center py-8 px-2 mx-4 rounded-3xl hover:bg-[#1f1f1f]' key={id}>
                  <div className=' relative  flex items-center rounded-3xl overflow-hidden'>
                   <img className='h-64 w-64 rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in ' 
            src={image} alt={audioName + 'song'} />
            <span className='absolute bottom-[6%] right-[8%]'
            onClick={(e)=> e.stopPropagation()}>
               < LikeFunction data={data}/>

                </span>
                </div>
            <div className='w-64 text-start'>
              <h4 className='mt-3'>{audioName.length<12?audioName:audioName.slice(0,12) + "..."}</h4>
              <p className='text-slate-300'>{artist.length<20?artist:artist.slice(0,20) + "..."}</p>
            </div>
          </div>
            )
          })}
        </div>
  </div>
  )
}

export default LikedSong