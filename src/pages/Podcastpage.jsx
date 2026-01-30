import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currid, currdata, playaudio } from '../store/reducers/playerSlice';
import LikeFunction from '../component/ui/likeFunction';

function Podcastpage()  {
  const values = useSelector((state)=>state.podcast.arrpodcast)
  const dispatch = useDispatch();

  
  return (
    <div className='container'>
      <h1 className='mt-2 mb-6 font-bold text-[2.5rem]'>Latest Podcasts</h1> 
        <div className='grid grid-cols-4 gap-3'>


          {values.map((data)=>{
            const {image,audioName,artist,id,type} = data;
            return (
              <div onClick={()=>{
                    dispatch(currid(id))
                    dispatch(currdata(values))
                    dispatch(playaudio())
                }}  className='  flex flex-col  items-center justify-center py-8 px-2 mx-4 rounded-3xl hover:bg-[#1f1f1f]' key={id}>
                  <div className=' relative  flex items-center rounded-3xl overflow-hidden'>
                   <img className='h-64 w-64 rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in ' 
            src={image} alt={audioName + 'podcast'} />
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

export default Podcastpage
