import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const topicSlice = createSlice({
  name: 'topic',
  initialState: { 
    title: '',
    clicked: false,
    score: 0,
    subreddit: '',
    author: '',
    visited: false,
    numberOfComments: 0,
    upvoteRatio: 1,
    thumbnail: '' 
  },
  reducers: {
  },
  extraReducers: {

    [RedditAPI.getSingleTopic.pending]: (state, action) => {
      state.title = 'loading...';
      state.author = 'loading...';
    },
    [RedditAPI.getSingleTopic.fulfilled]: (state, action) => {
      state = action.payload;
    },
    [RedditAPI.getSingleTopic.rejected]: (state, action) => {
      state.title = 'failed to load.';
      state.author = 'failed to load.';
    },
  }
})

export default topicSlice.reducer;






