import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const aboutSlice = createSlice({
  name: 'about',
  initialState: {
  },
  reducers: {},
  extraReducers: {

    // Reducers for getting threads from Reddit API.
    [RedditAPI.getAbout.pending]: (state, action) => {
      state.isLoaded = false
      
    },
    [RedditAPI.getAbout.fulfilled]: (state, action) => {
      state[action.payload.key] = action.payload.data;
      state.isLoaded = true
      
    },
    [RedditAPI.getAbout.rejected]: (state, action) => {
      state.isLoaded = false
      
    },
  }
})

export default aboutSlice.reducer;