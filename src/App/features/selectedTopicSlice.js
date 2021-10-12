import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const selectedTopicSlice = createSlice({
  name: 'selectedTopic',
  initialState: {
  },
  reducers: {},
  extraReducers: {

    // Reducers for getting threads from Reddit API.
    [RedditAPI.previewImage.pending]: (state, action) => {
      state.isLoaded = false
      
    },
    [RedditAPI.previewImage.fulfilled]: (state, action) => {
      
      //state[action.payload.id]= !state[action.payload.id]
      if (state[action.payload.id]) {
        state[action.payload.id] = false
      } else {
        state[action.payload.id] = true
      }
      state.isLoaded = true
    },
    [RedditAPI.previewImage.rejected]: (state, action) => {
      state.isLoaded = false
      
    },
  }
})

export default selectedTopicSlice.reducer;