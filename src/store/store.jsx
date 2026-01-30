import { configureStore } from '@reduxjs/toolkit'
import musicSlice from './reducers/musicSlice'
import podcastSlice  from './reducers/podcastSlice'
import  likeSlice  from './reducers/likeSlice'
import  playerSlice  from './reducers/playerslice' 
import  searchSlice  from './reducers/searchSlice'
export const store = configureStore({
  reducer: {
    music:musicSlice,
    podcast:podcastSlice,
    player:playerSlice,
    like:likeSlice,
    search:searchSlice,
  },
})