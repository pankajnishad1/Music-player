import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../ui/Header'
import Sidebar from '../ui/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { currdata} from '../../store/reducers/playerSlice'
function Applayout() {
    const values = useSelector((state)=>state.music.arrsong)
  const dispatch = useDispatch();
  dispatch(currdata(values))
  
  return (
    <>
    <div className='h-auto main-con m-auto flex  w-[1272px]'>    
    <div className='w-[75%] h-[100%]'>
        <div className='h-[10vh] relative z-10 '>
            <Header />
        </div>
        <div className='  content-section h-[90vh] overflow-y-auto   '>
            <Outlet/>
        </div>
    </div>
    <div className=' w-[25%] bg-[#0f0e0e]'>
        <Sidebar/>
    </div>
    </div>
    </>
  )
}

export default Applayout
