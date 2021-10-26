import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';
import { exampleSubredditsURLs } from '../routes.js'

export const routesSlice = createSlice({
  name: 'routes',
  initialState: {
    data: [...exampleSubredditsURLs]
  },
  reducers: {},
  extraReducers: {

    // Reducers for adding route(string) to routes state.
    [RedditAPI.addRoute.pending]: (state, action) => {
    },
    [RedditAPI.addRoute.fulfilled]: (state, action) => {
      return {
        data: [
          ...state.data,
          action.payload
        ]
      }
    },
    [RedditAPI.addRoute.rejected]: (state, action) => {
    },
  }
})

export default routesSlice.reducer;