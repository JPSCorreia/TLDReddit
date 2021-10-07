import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const topicListSlice = createSlice({
  name: 'topicList',
  initialState: {
    isLoading: true
  },
  reducers: {},
  extraReducers: {

    // Reducers for getting threads from Reddit API.
    [RedditAPI.getTopicList.pending]: (state, action) => {
      state.isLoading = true;

      
    },
    [RedditAPI.getTopicList.fulfilled]: (state, action) => {
      state[action.payload.key] = action.payload.data;
      state.isLoading = false;
      
    },
    [RedditAPI.getTopicList.rejected]: (state, action) => {
      state.isLoading = true;
      
    },
  }
})

export default topicListSlice.reducer;