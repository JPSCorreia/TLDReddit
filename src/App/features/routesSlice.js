import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';
import { ROUTES } from '../routes.js'

export const routesSlice = createSlice({
  name: 'routes',
  initialState: {
    ...ROUTES
  },
  reducers: {},
  extraReducers: {

    // Reducers for getting threads from Reddit API.
    [RedditAPI.addRoute.pending]: (state, action) => {
      state.isLoaded = false
      
    },
    [RedditAPI.addRoute.fulfilled]: (state, action) => {
      // state = {...state, action.payload.data }
      // need to fix
      state.isLoaded = true
      
    },
    [RedditAPI.addRoute.rejected]: (state, action) => {
      state.isLoaded = false
      
    },
  }
})

export default routesSlice.reducer;