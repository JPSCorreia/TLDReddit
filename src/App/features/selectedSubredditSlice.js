import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const selectedSubredditSlice = createSlice({
  name: 'selectedSubreddit',
  initialState: {
    value: ''
  },
  reducers: {},
  extraReducers: {

    // Reducers for getting threads from Reddit API.
    [RedditAPI.selectSubreddit.pending]: (state, action) => {
      state.isLoaded = false
      
    },
    [RedditAPI.selectSubreddit.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoaded = true
      
    },
    [RedditAPI.selectSubreddit.rejected]: (state, action) => {
      state.isLoaded = false
      
    },
  }
})

export default selectedSubredditSlice.reducer;