import React from 'react'
import { FcLike } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import { Addtolike, Removetolike } from '../../store/reducers/likeSlice';
import { PiHeartThin } from 'react-icons/pi';

function LikeFunction({data}) {
  const {type,id}=data
  // console.log(data)
  const dispatch = useDispatch();
  const arrLiked = useSelector((state)=>state.like.arrLiked)
  const addorremove =()=>{
    if(arrLiked.some((data)=>data.id == id && data.type == type) ){
        dispatch(Removetolike(data))

    }
    else{
      dispatch(Addtolike(data))

    }
  }

  return (
    <>
    <span className=' bg-white text-white' onClick={()=>{
     addorremove()
    }}>
    {arrLiked.some((data)=>data.id == id && data.type == type)?<FcLike />:<PiHeartThin />}  
    </span>
    </>
  )
}

export default LikeFunction