import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';

export const commentListSlice = createSlice({
  name: 'commentList',
  initialState: {},
  reducers: {},
  extraReducers: {

    // Reducers for getting comments from Reddit API.
    [RedditAPI.getCommentList.pending]: (state, action) => {
      state.status = 'loading'
      
    },
    [RedditAPI.getCommentList.fulfilled]: (state, action) => {
      state[action.payload.key] = action.payload.data;
      state.status = 'loaded'
      
    },
    [RedditAPI.getCommentList.rejected]: (state, action) => {
      state.status = 'failed to load.'
      
    },
      
  }
})

export default commentListSlice.reducer;