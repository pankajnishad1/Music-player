import React from 'react'
import { useRouteError } from 'react-router-dom';
import { BiError } from "react-icons/bi";

function Errorpage() {
    const error = useRouteError()
    console.log(error);
  return (
    <div className='h-auto mx-28 my-16 flex gap-[15rem] '>
        <div>
            <h1 className='text-[5rem]'>Oops! This page not found</h1>
            <h2 className='text-3xl'>{error&&<p className='text-3xl'>{error.data}</p>}</h2> 
        </div>
        <div>
            <BiError className='text-[25rem] text-rose-500' />
        </div>
    </div>
  )
}

export default Errorpage
