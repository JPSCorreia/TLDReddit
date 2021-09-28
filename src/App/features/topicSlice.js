import { createSlice } from '@reduxjs/toolkit'


export const topicSlice = createSlice({
  name: 'topic',
  initialState: { value: { 
    title: 'loading title...',
    clicked: false,
    score: 0,
    subreddit: '',
    author: 'loading author...',
    visited: false,
    numberOfComments: 0,
    upvoteRatio: 1,
    thumbnail: '' 
  } },
  reducers: {
    changeTopic: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { changeTopic } = topicSlice.actions;
export default topicSlice.reducer;









