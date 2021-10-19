import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const topicListSlice = createSlice({
  name: 'topicList',
  initialState: {
    isLoading: true,
  },
  reducers: {},
  extraReducers: {



    // Reducers for getting threads from Reddit API.

    [RedditAPI.getTopicList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [RedditAPI.getTopicList.fulfilled]: (state, action) => {
      state[action.payload.key] = action.payload.data
      state[action.payload.key].after = action.payload.after;
      state[action.payload.key].before = action.payload.before;
      state[action.payload.key].indexPageNumber = action.payload.indexPageNumber
      state[action.payload.key].beforeCounter = action.payload.beforeCounter;
      state[action.payload.key].afterCounter = action.payload.afterCounter;
      state.isLoading = false;
    },
    [RedditAPI.getTopicList.rejected]: (state, action) => {
      state.isLoading = true;
    },

    [RedditAPI.getTopicListAfter.pending]: (state, action) => {
      state.isLoading = true;
    },
    [RedditAPI.getTopicListAfter.fulfilled]: (state, action) => {
      state[action.payload.key] = action.payload.data
      state[action.payload.key].after = action.payload.after;
      state[action.payload.key].before = action.payload.before;
      state[action.payload.key].indexPageNumber = action.payload.indexPageNumber
      state[action.payload.key].beforeCounter = action.payload.beforeCounter;
      state[action.payload.key].afterCounter = action.payload.afterCounter;

      state.isLoading = false;   
    },
    [RedditAPI.getTopicListAfter.rejected]: (state, action) => {
      state.isLoading = true;  
    },

    [RedditAPI.getTopicListBefore.pending]: (state, action) => {
      state.isLoading = true;
    },
    [RedditAPI.getTopicListBefore.fulfilled]: (state, action) => {
      state[action.payload.key] = action.payload.data
      state[action.payload.key].after = action.payload.after;
      state[action.payload.key].before = action.payload.before;
      state[action.payload.key].indexPageNumber = action.payload.indexPageNumber;
      state[action.payload.key].beforeCounter = action.payload.beforeCounter;
      state[action.payload.key].afterCounter = action.payload.afterCounter;

      state.isLoading = false;   
    },
    [RedditAPI.getTopicListBefore.rejected]: (state, action) => {
      state.isLoading = true;  
    }
    
  }
})

export default topicListSlice.reducer;