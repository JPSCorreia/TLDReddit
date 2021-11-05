import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';


export const ToggleThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: true
  },
  reducers: {},
  extraReducers: {

    // Reducers for getting threads from Reddit API.
    [RedditAPI.toggleTheme.pending]: (state, action) => {
      state.isLoaded = false
      
    },
    [RedditAPI.toggleTheme.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoaded = true
      
    },
    [RedditAPI.toggleTheme.rejected]: (state, action) => {
      state.isLoaded = false
      
    },
  }
})

export default ToggleThemeSlice.reducer;