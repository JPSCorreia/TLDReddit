import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const commentListSlice = createSlice({
  name: 'commentList',
  initialState: {},
  reducers: {},
  extraReducers: {

    // Reducers for getting comments from Reddit API.
    [RedditAPI.getCommentList.pending]: (state, action) => {
      state.isLoaded = false
      
    },
    [RedditAPI.getCommentList.fulfilled]: (state, action) => {
      state[action.payload.key] = action.payload.data;
      state.isLoaded = true
      
    },
    [RedditAPI.getCommentList.rejected]: (state, action) => {
      state.isLoaded = false
      
    },
      
  }
})

export default commentListSlice.reducer;