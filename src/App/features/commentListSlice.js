import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const commentListSlice = createSlice({
  name: 'commentList',
  initialState: {
    value: []
  },
  reducers: {},
  extraReducers: {
    [RedditAPI.getCommentList.pending]: (state, action) => {
      state.status = 'loading'
      
    },
    [RedditAPI.getCommentList.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = 'loaded'
      
    },
    [RedditAPI.getCommentList.rejected]: (state, action) => {
      state.status = 'failed to load.'
      
    },
  }
})

export default commentListSlice.reducer;