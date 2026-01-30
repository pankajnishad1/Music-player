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
    <div className='container w-full'>
        <div className=' flex gap-32'>
            <nav className=' h-16 flex gap-16 items-center justify-center '>
                <NavLink to='/'>
                    {(status)=>{
                        return <span
                        className={[`text-2xl tracking-widest p-3 px-6 rounded-full ${status.isActive?"text-black":"text-white"} ${status.isActive?"bg-white":"bg-black"} `].join(' ')}>
                        All
                        </span>
                    }}
                </NavLink>
                <NavLink to='Music'>
                    {(status)=>{
                        return <span
                        className={[`text-2xl tracking-widest p-3 px-6  rounded-full ${status.isActive?"text-black":"text-white"} ${status.isActive?"bg-white":"bg-black"} `].join(' ')}>
                        Music
                        </span>
                    }}
                </NavLink>
                <NavLink to='Podcast'>
                    {(status)=>{
                        return <span
                        className={[`text-2xl tracking-widest p-3  px-6  rounded-full ${status.isActive?"text-black":"text-white"} ${status.isActive?"bg-white":"bg-black"} `].join(' ')}>
                        Podcast
                        </span>
                    }}
                </NavLink>
            </nav>
            <div onFocus={focusfuntion} onBlur={blurfuntion} className={`${searchfoucs?' w-[45rem] h-auto rounded-3xl':'w-[35rem] rounded-full h-14 '}  bg-white   flex items-center justify-center flex-col`}>
                <div className={`${searchfoucs?'rounded-3xl':'rounded-full' } h-16 flex items-center  border-solid border-b-2  border-black `}>
                <input  ref={search} onChange={handleClick} className={`${searchfoucs?' w-[40rem]':'w-[30rem] '} h-14  rounded-l-full p-4 px-8 text-2xl bg-white placeholder:text-slate-400`} type="text" placeholder='Search' />
                <button onClick={searched} className='h-14 w-[5rem] rounded-r-full p-4 text-3xl bg-white text-slate-400 flex items-center justify-center hover:text-black'>
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
    </header>
  )
}

export default Header
