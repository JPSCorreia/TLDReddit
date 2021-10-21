import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const searchItemSlice = createSlice({
  name: 'searchItem',
  initialState: {
    isLoading: true,
    value: ''
  },
  reducers: {},
  extraReducers: {

    // Reducers for getting threads from Reddit API.
    [RedditAPI.setSearchItem.pending]: (state, action) => {
      state.isLoaded = false
      
    },
    [RedditAPI.setSearchItem.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoaded = true
      
    },
    [RedditAPI.setSearchItem.rejected]: (state, action) => {
      state.isLoaded = false
      
    },
  }
})

export default searchItemSlice.reducer;