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

    // Reducers for getting threads from Reddit API.
    [RedditAPI.addRoute.pending]: (state, action) => {
    },
    [RedditAPI.addRoute.fulfilled]: (state, action) => {
      console.log(`Route added: ${action.payload}`)
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