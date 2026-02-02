import { createSlice } from '@reduxjs/toolkit'
import Playercom, { audio } from '../../component/ui/Playercom';
const initialState = {
  playstatus:false,
  currdata:[],
  currid:0,
  currentaudiostatus:0,
  totaldurationaudio:0,
  audioprogress:0,
}
export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {

    
  currid:(state,action)=>{
    state.currid =action.payload
  },
  currdata:(state,action)=>{
    state.currdata=action.payload;
  },
   playaudio:(state)=>{
    audio.current.play();
    state.playstatus=true;
  },
  pauseaudio:(state)=>{
  audio.current.pause()
  state.playstatus=false;
  },
  nextaudio:(state)=>{
    if(state.currid<state.currdata.length-1 ){
      state.currid++;
    }
    else{
      state.currid=0;
    }
  },
  previousaudio:(state)=>{
    if(state.currid!=0 ){
      state.currid--;
    }
    else{
      state.currid=state.currdata.length-1;
    }
  },
  setcurrentaudiostatus:(state,action)=>{
    state.currentaudiostatus=action.payload;
  },
  settotaldurationaudio:(state,action)=>{
    state.totaldurationaudio=action.payload;
  },
  setaudioprogress:(state,action)=>{
    state.audioprogress=action.payload;
  }
},

})

// Action creators are generated for each case reducer function
export const { currdata , currid ,playaudio,previousaudio,nextaudio,pauseaudio,setcurrentaudiostatus,settotaldurationaudio,setaudioprogress} = playerSlice.actions

export default playerSlice.reducer