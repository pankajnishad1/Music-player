import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   arrpodcast : [
            
    {
      id:'0',
      type:'Podcast',
      image:'/images/real_life_pakistani_skin_walker.jpg',
      audioName:'REAL LIFE SKINWALKER FROM PAKISTAN',
      audio:'/podcast/＊REAL LIFE SKINWALKER FROM PAKISTAN＊ ｜ आदमखोर [4K].mp3',
      artist:' badmash icon '
    },
      
    {
      id:'1',
      type:'Podcast',
      image:'/images/_jodhpur-mysterious_sound.jpg',
      audioName:'JODHPUR Mysterious Sound 2012',
      audio:'/podcast/JODHPUR Mysterious Sound 2012 _ "The Strange Worldwide Sound" [4K] [VSXtRuPyies].mp3',
      artist:'badmash icon'
    },
      
    {
      id:'2',
      type:'Podcast',
      image:'/images/karna_pishachini_ka_khooni_khel.jpg',
      audioName:'KARNA pishachini Ka KHOONI KHEL',
      audio:'/podcast/KARNA PISHACHINI Ka KHOONI KHEL 😱 _ Subscriber Real Story _ Real Horror Story [P3tuyMJ1QVw].mp3',
      artist:'akshay vashisht'
    },
      
    {
      id:'3',
      type:'Podcast',
      image:'/images/Shaitani_khabis.jpg',
      audioName:'Shaitani Khabis Ka Keher',
      audio:'/podcast/Shaitani Khabis Ka Keher 😱_ Subscriber Real Story _ Real Horror Story 💀 [ciakB7ksrzI].mp3   ',
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