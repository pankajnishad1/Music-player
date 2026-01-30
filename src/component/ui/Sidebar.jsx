import React from 'react'
import { NavLink } from 'react-router-dom'
import Playercom from './Playercom'
import { LuLibrary } from 'react-icons/lu'

function Sidebar() {
  return (
    <div className=' max-h-[1580px] px-10 py-8 h-screen  flex flex-col justify-between'>
        <div className='my-5'>
            <h3 className='text-slate-500 '>YOUR COLLECTION</h3>
                 <NavLink to='YourLibrary' >
                    {(status)=>{
                        return <div className={[`h-14 flex gap-3 items-center text-2xl tracking-widest mt-5 p-2 rounded-xl ${status.isActive?"bg-white":"text-slate-300"} ${status.isActive?"text-black font-semibold":""} `].join(' ')}>
                            <button className=' text-3xl'>
                                <LuLibrary />
                            </button>
                        <span>
                        Your Library
                        </span>
                        </div>
                    }}
                </NavLink>
        </div>

        {/* <div className='container'>
            <h3 className='text-slate-500 '>RECENT SONGS </h3>
        </div> */}

        <Playercom />

    </div>
  )
}

export default Sidebar
