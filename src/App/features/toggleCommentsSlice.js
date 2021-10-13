import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const toggleCommentsSlice = createSlice({
  name: 'toggleComments',
  initialState: {
  },
  reducers: {},
  extraReducers: {

    // Reducers for showing comments toggle.
    [RedditAPI.toggle.pending]: (state, action) => {
      state.isLoaded = false
    },
    [RedditAPI.toggle.fulfilled]: (state, action) => {

      if (state[action.payload.id]) {
        state[action.payload.id] = false
      } else {
        state[action.payload.id] = true
      }
      state.isLoaded = true
    },
    [RedditAPI.toggle.rejected]: (state, action) => {
      state.isLoaded = false  
    },
  }
})

export default toggleCommentsSlice.reducer;