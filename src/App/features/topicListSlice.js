import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const topicListSlice = createSlice({
  name: 'topicList',
  initialState: {},
  reducers: {},
  extraReducers: {

    // Reducers for getting threads from Reddit API.
    [RedditAPI.getTopicList.pending]: (state, action) => {
      state.status = 'loading'
      
    },
    [RedditAPI.getTopicList.fulfilled]: (state, action) => {
      state[action.payload.key] = action.payload.data;
      state.status = 'loaded'
      
    },
    [RedditAPI.getTopicList.rejected]: (state, action) => {
      state.status = 'failed to load.'
      
    },
  }
})

export default topicListSlice.reducer;