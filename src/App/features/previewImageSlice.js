import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const previewImageSlice = createSlice({
  name: 'previewImage',
  initialState: {
    isLoading: true,
  },
  reducers: {},
  extraReducers: {

    // Reducers for previewing image toggle.
    [RedditAPI.preview]: (state, action) => {
      state.isLoaded = false
    },
    [RedditAPI.preview.fulfilled]: (state, action) => {
      if (state[action.payload.id]) {
        state[action.payload.id] = false
      } else {
        state[action.payload.id] = true
      }
      state.isLoaded = true
    },
    [RedditAPI.preview.rejected]: (state, action) => {
      state.isLoaded = false  
    },
  }
})

export default previewImageSlice.reducer;