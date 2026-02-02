import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currdata, currid, playaudio } from '../store/reducers/playerSlice';
import LikeFunction from '../component/ui/likeFunction';


function Searchpage() {
    const searchdata = useSelector((state)=>state.search.currsearchdata)
    const searchvalue = useSelector((state)=>state.search.searchvalue)
    const songdata = useSelector((state)=>state.music.arrsong)
    const dispatch = useDispatch();
  return (
    <div className='container' >
          <h1 className='mt-2 mb-6 ml-10 font-bold text-[1.7rem] sm:text-[2rem] md:text-[2.5rem]'>{searchvalue===''?'Please search something ':searchdata.length===0?'Result not found ':`Result for ${searchvalue.toLowerCase()}`}</h1> 
            <div className='grid  gap-3 
         grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 '>
              {searchdata.map((data)=>{
                const {image,audioName,artist,id,type} = data;
                return (
                  <div onClick={()=>{
                        dispatch(currid(id))
                        dispatch(currdata(songdata))
                        dispatch(playaudio())
                    }}  className='  flex flex-col  items-center justify-center py-8 px-2 mx-4 rounded-3xl hover:bg-[#1f1f1f]' key={id}>
                      <div className=' relative  flex items-center rounded-3xl overflow-hidden'>
                       <img className='aspect-square h-44 sm:h-48 md:h-56 lg:h-64 rounded-3xl object-cover object-center hover:scale-[1.04] transition-all duration-300 ease-in ' 
                          src={image} alt={audioName + 'song'} />
                    <span className='absolute bottom-[6%] right-[8%] z-0  text-2xl md:text-3xl lg:text-4xl '
                    onClick={(e)=> e.stopPropagation()}>
                      < LikeFunction  data={data}/>
                    </span>
                    </div>
                <div className='text-start px-1 sm:p-6 md:p-4 lg:p-2'>
              <h4 className='mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl'>{audioName.length<12?audioName:audioName.slice(0,12) + "..."}</h4>
              <p className='text-slate-300 text-xs sm:text-sm md:text-lg lg:text-xl'>{artist.length<20?artist:artist.slice(0,20) + "..."}</p>
            </div>
              </div>
                )
              })}
            </div>
      </div>
      )
}

export default Searchpage
