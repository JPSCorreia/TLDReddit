import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const topicListSlice = createSlice({
  name: 'topicList',
  // initialState: { value: {
  //   data: {
  //     title: '...'
  //   }
  // }},
  initialState: {
    value: []
  },
  reducers: {},
  extraReducers: {
    [RedditAPI.getTopicList.pending]: (state, action) => {
      state.status = 'loading'
      
    },
    [RedditAPI.getTopicList.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = 'loaded'
      
    },
    [RedditAPI.getTopicList.rejected]: (state, action) => {
      state.status = 'failed to load.'
      
    },
  }
})

export default topicListSlice.reducer;