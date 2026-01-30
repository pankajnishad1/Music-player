import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   currsearchdata:[],
   searchvalue:'',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    currsearchdata:(state,action)=>{
        // console.log(action.payload)
        state.currsearchdata=action.payload
    },
    setsearchvalue:(state,action)=>{
        state.searchvalue=action.payload
    }
    
  },
  
})

// Action creators are generated for each case reducer function
export const {currsearchdata,setsearchvalue} = searchSlice.actions

export default searchSlice.reducer