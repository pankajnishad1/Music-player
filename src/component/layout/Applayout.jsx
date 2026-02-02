import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../ui/Header'
import Sidebar from '../ui/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { currdata} from '../../store/reducers/playerSlice'
import Playerbar from '../ui/Playerbar'
function Applayout() {
    const values = useSelector((state)=>state.music.arrsong)
  const dispatch = useDispatch();
  dispatch(currdata(values))
  
  return (
    <>
    <div className='h-auto main-con m-auto flex flex-col 2xl:flex-row 2xl:w-[1272px]'> 

    <div className='w-full 2xl:w-[75%] h-[100%]'>
        <div className='h-[14vh] md:h-[10vh] relative z-10 '>
            <Header />
        </div>
        <div className='  content-section h-[74vh] sm:h-[71vh] md:h-[72vh] 2xl:h-[90vh] overflow-y-auto   '>
             <div className='relative mt-5 2xl:hidden '>
               <NavLink to='YourLibrary'>
                    {(status)=>{
                        return <span
                        className={` tracking-widest p-3 px-6  ml-14 rounded-full  border border-solid border-1  ${status.isActive?"text-black bg-white":"text-white bg-black"}`}>
                        Your Library
                        </span>
                    }}
                </NavLink>
             </div>
            <Outlet/>
        </div>
    </div>

    <div className=' w-0 2xl:w-[25%] hidden 2xl:block'>
        <Sidebar/>
    </div>
     <div className='fixed w-[100vw] bottom-0 h-[14vh] sm:h-[15vh] md:h-[18vh]  2xl:hidden '>
        <Playerbar/>
    </div>
    </div>
    </>
  )
}

export default Applayout
