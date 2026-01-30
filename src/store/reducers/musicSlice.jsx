import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   arrsong : [
    {
      id:'0',
      type:'Music',
      image:'images/Ishq_Hai.jpg',
      audioName:'Ishq hai',
      audio:'songs/Ishq Hai.mp3',
      artist:'Raftaar and Sidharth Malhotra'
    },
      
    {
      id:'1',
      type:'Music',
      image:'images/sahiba.jpg',
      audioName:'Sahiba',
      audio:'songs/Sahiba.mp3',
      artist:'Jasleen Royal & Stebin Ben '
    },
      
    {
      id:'2',
      type:'Music',
      image:'images/ishq.jpg',
      audioName:'Ishq',
      audio:'songs/Ishq.mp3',
      artist:'raj shekhar and vishal mishra'
    },
        
    {
      id:'3',
      type:'Music',
      image:'images/paro.jpg',
      audioName:'Paro',
      audio:'songs/Paro.mp3',
      artist:'bhupinder babbal'
    },
          
    {
      id:'4',
      type:'Music',
      image:'images/Dil_Tu_Jaan_Tu.jpg',
      audioName:'Dil Tu Jaan Tu',
      audio:'songs/Dil Tu Jaan Tu.mp3',
      artist:'shiva choudhary'
    },

    {
      id:'5',
      type:'Music',
      image:'images/Apni_To_Jaise_Taise.jpeg',
      audioName:'Apni To Jaise Taise',
      audio:'songs/SpotifyMate.com - Apni To Jaise Taise - With Dialogue - Kishore Kumar.mp3',
      artist:'Kishore Kumar'
    },
        
    {
      id:'6',
      type:'Music',
      image:'images/ram.jpg',
      audioName:'Ram siya ram',
      audio:'songs/Ram Siya Ram.mp3',
      artist:'sachet tandon'
    },
      
    {
      id:'7',
      type:'Music',
      image:'images/zaroor.jpg',
      audioName:'Zaroor',
      audio:'songs/Zaroor.mp3',
      artist:'kishore kumar and asha bhosle'
    },

    {
      id:'8',
      type:'Music',
      image:'images/Aakhir_Tumhein_Aana_Hai.jpeg',
      audioName:'Aakhir Tumhein Aana Hai',
      audio:'songs/Aakhir Tumhein Aana Hai.mp3',
      artist:' Udit Narayan '
    },
      
    {
      id:'9',
      type:'Music',
      image:'images/Aaye_Ho_Meri Zindagi_Mein.jpeg',
      audioName:'Aaye Ho Meri Zindagi Mein',
      audio:'songs/Aaye Ho Meri Zindagi Mein - Male Version.mp3',
      artist:' Udit Narayan '
    },
      
    {
      id:'10',
      type:'Music',
      image:'images/Mere_Mehboob_Qayamat_Hogi.jpeg',
      audioName:'Mere Mehboob Qayamat Hogi',
      audio:'songs/Mere Mehboob Qayamat Hogi.mp3',
      artist:'kishore kumar'
    },
      
    {
      id:'11',
      type:'Music',
      image:'images/Meri_Bheegi_Bheegi_Si.jpeg',
      audioName:'Meri Bheegi Bheegi Si',
      audio:'songs/Meri Bheegi Bheegi Si.mp3',
      artist:'kishore kumar'
    },
      
    {
      id:'12',
      type:'Music',
      image:'images/Dekhne_Walon_Ne.jpeg',
      audioName:'Dekhne Walon Ne',
      audio:'songs/Dekhne Walon Ne - From __Chori Chori Chupke Chupke__ - Udit Narayan.mp3',
      artist:'Udit Narayan'
    },
      
    {
      id:'13',
      type:'Music',
      image:'images/Asal_Mein.jpeg',
      audioName:'Asal Mein',
      audio:'songs/Asal Mein.mp3',
      artist:'darshan raval'
    },
      
    {
      id:'14',
      type:'Music',
      image:'images/Apa_Fer_Milaange.jpeg',
      audioName:'Apa Fer Milaange',
      audio:'songs/Apa Fer Milaange.mp3',
      artist:'savi kahlon'
    },
            
    {
      id:'15',
      type:'Music',
      image:'images/Ainvayi_Ainvayi.jpeg',
      audioName:'Ainvayi Ainvayi',
      audio:'songs/Ainvayi Ainvayi.mp3',
      artist:'sunidhi and master saleem'
    }
]
}

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {  
  },
  
})

// Action creators are generated for each case reducer function
export const {  } = musicSlice.actions

export default musicSlice.reducer