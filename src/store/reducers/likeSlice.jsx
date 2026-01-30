import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   arrLiked: [],
   podcastlikeddata:[],
   songlikeddata:[]

}

export const likeSlice = createSlice({
  name: 'Like',
  initialState,
  reducers: { 
    Addtolike:(state,action)=>{
      state.arrLiked.push(action.payload)
      if(action.payload.type==='Music'){
        state.songlikeddata.push(action.payload)
      }
      else{
        state.podcastlikeddata.push(action.payload)
      }
      // console.log(state.arrLiked,state.podcastlikeddata,state.songlikeddata)
    },
    Removetolike:(state,action)=>{
      state.arrLiked.some((data,index)=>{
        if(data.id == action.payload.id && data.type == action.payload.type){
          state.arrLiked.splice(index,1)
        }})
        if(action.payload.type==='Music'){
        state.songlikeddata.some((data,index)=>{
        if(data.id == action.payload.id && data.type == action.payload.type){
          state.songlikeddata.splice(index,1)
        }})
      }
      else{
        state.podcastlikeddata.some((data,index)=>{
        if(data.id == action.payload.id && data.type == action.payload.type){
          state.podcastlikeddata.splice(index,1)
        }})
      }
    },
    // Addtolikepodcast:(state,action)=>{
    //     state.podcastlikeddata.push(action.payload)
    // },
    // Removetolikepodcast:(state,action)=>{
    //     state.podcastlikeddata.splice(action.payload,1)
    // }
    
  },
  
})

// Action creators are generated for each case reducer function
export const { Addtolike,Removetolike,Addtolikepodcast,Removetolikepodcast} = likeSlice.actions

export default likeSlice.reducer