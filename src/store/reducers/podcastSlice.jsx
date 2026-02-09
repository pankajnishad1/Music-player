import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   arrpodcast : [
    
    {
      id:'0',
      type:'Podcast',
      image:'/images/Got_a_Job_in_1st_Year_of_College_Unbelievable_Journey_ft._Sheryians_Coding_School_Student_48KBPS (1).jpg',
      audioName:'Got a Job in 1st Year of College Unbelievable Journey',
      audio:'/podcast/Got a Job in 1st Year of College Unbelievable Journey.mp3',
      artist:'Sheryians Coding School'
    },

    {
      id:'1',
      type:'Podcast',
      image:'/images/_jodhpur-mysterious_sound.jpg',
      audioName:'JODHPUR Mysterious Sound 2012',
      audio:'/podcast/JODHPUR Mysterious Sound 2012.mp3',
      artist:'badmash icon'
    },
      
    {
      id:'2',
      type:'Podcast',
      image:'/images/Philadelphia Experiment.jpg',
      audioName:'True Story of Philadelphia Experiment',
      audio:'/podcast/_EXPOSED_True_Story_of_Philadelphia_Experiment_4K_LOW.mp3',
      artist:'badmash icon'
    },
      
    {
     id:'3',
     type:'Podcast',
     image:'/images/real_life_pakistani_skin_walker.jpg',
     audioName:'REAL LIFE SKINWALKER FROM PAKISTAN',
     audio:'/podcast/REAL LIFE SKINWALKER FROM PAKISTAN.mp3',
     artist:' badmash icon '
   },
    {
      id:'4',
      type:'Podcast',
      image:'/images/Shaitani_khabis.jpg',
      audioName:'Shaitani Khabis Ka Keher',
      audio:'/podcast/Shaitani Khabis Ka Keher .mp3   ',
      artist:'akshay vashisht'
    },
      

]
}

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {

    
  },
  
})

// Action creators are generated for each case reducer function
export const {} = podcastSlice.actions

export default podcastSlice.reducer