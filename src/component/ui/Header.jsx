import React, { useRef, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { currdata, currid, playaudio } from '../../store/reducers/playerSlice';
import { currsearchdata, setsearchvalue } from '../../store/reducers/searchSlice';

let searchfoucs; 
function Header() {
    const songdata = useSelector((state)=>state.music.arrsong)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let search = useRef(null)
    let [searchdata,setsearchdata] =useState([]);
    let [searchfoucs,setsearchfocus] = useState(false);
    const handleClick = () => {
        if(search.current.value.toLowerCase()){
            setsearchdata(songdata.filter((data)=>{
                return data.audioName.toLowerCase().trim().includes(search.current.value.toLowerCase().trim()) 
            }))
        };
        if(search.current.value.trim()==''){
            setsearchdata([])
            
        }
    }
    const focusfuntion=()=>{
        handleClick()
        setsearchfocus(true)
    }
    const blurfuntion=()=>{
        setTimeout(() => {
            setsearchdata([])
            setsearchfocus(false)
        }, 150)
    }
    const searched=()=>{
        dispatch(setsearchvalue(search.current.value));
        dispatch(currsearchdata(searchdata));
        navigate('Searchpage');
        if(search.current.value === ''){
         blurfuntion()    
        }
        else{
            focusfuntion()
            handleClick()
        }

}

  return (
    <header>
    <div className='container-div '>
        <div className='flex flex-col-reverse gap-3 md:flex-row md:gap-10 lg:gap-28'>
           <div className='absolute top-24 left-12 z-0 md:relative md:top-0 '>
             <nav className=' h-16 flex  items-center md:justify-center   
               gap-1 sm:gap-2 md:gap-10 lg:gap-16 xl:gap-20
               text-lg sm:text-xl md:text-2xl 
            '>
                <NavLink to='All'>
                    {(status)=>{
                        console.log(status.isActive)
                        return <span
                        className={` tracking-widest p-3 px-6 rounded-full ${status.isActive?"text-black bg-white":"text-white bg-black"}`}>
                        All
                        </span>
                    }}
                </NavLink>
                <NavLink to='Music'>
                    {(status)=>{
                        return <span
                        className={` tracking-widest p-3 px-6 rounded-full ${status.isActive?"text-black bg-white":"text-white bg-black"}`}>
                        Music
                        </span>
                    }}
                </NavLink>
                <NavLink to='Podcast'>
                    {(status)=>{
                        return <span
                        className={` tracking-widest p-3 px-6 rounded-full ${status.isActive?"text-black bg-white":"text-white bg-black"}`}>
                        Podcast
                        </span>
                    }}
                </NavLink>
            </nav>

           </div>

            <div className='relative z-10'>
                <div 
            onFocus={focusfuntion} 
            onBlur={blurfuntion} 
            className={`${searchfoucs?' md:w-[90%]  lg:w-[40rem] xl:w-[45rem]  rounded-3xl ':' w-[95%] mx-auto md:w-[90%] lg:w-[40rem] xl:w-[45rem]  rounded-full '} h-auto bg-white   flex items-center justify-center flex-col  `}>
                <div 
                className={`${searchfoucs?'rounded-3xl border-b-2 border-solid border-black':'rounded-full' } w-full h-16 flex items-center  `}>
               
                <input  
                ref={search} 
                onChange={handleClick} 
                className={`w-[80%] md:w-[85%] lg:w-[90%] h-14  rounded-l-full p-4 px-8 text-2xl bg-white placeholder:text-slate-400 `} type="text" placeholder='Search' />

                <button 
                onClick={searched} 
                className='h-14 w-[20%] md:w-[15%] lg:w-[10%] text-3xl rounded-r-full p-4  bg-white text-slate-400 flex items-center justify-center hover:text-black'>
                    <CiSearch />
                </button>
                </div>

                {searchdata.map((data)=>{
                    return (<div key={data.id} 
                    >
                        <div 
                        onClick={()=>{
                         search.current.value=data.audioName
                        
                    }}
                    className='text-2xl w-[45rem] justify-center h-14 flex items-center cursor-pointer relative z-10'>
                        {data.audioName}
                        </div>
                    </div>)
                })}


            </div>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header
