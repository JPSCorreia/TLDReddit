import { createSlice } from '@reduxjs/toolkit'
import * as RedditAPI from '../RedditAPI';
import { exampleRouteList } from '../routes.js'

export const routeListSlice = createSlice({
  name: 'routeList',
  initialState: {
    data: [...exampleRouteList]
  },
  reducers: {},
  extraReducers: {

    // Reducers for adding route jsx to routeList state.
    [RedditAPI.addToRouteList.pending]: (state, action) => {
    },
    [RedditAPI.addToRouteList.fulfilled]: (state, action) => {
      return {
        data: [
          ...state.data,
          action.payload
        ]
      }
    },
    [RedditAPI.addToRouteList.rejected]: (state, action) => {
    },
  }
})

export default routeListSlice.reducer;