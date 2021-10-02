import { configureStore } from '@reduxjs/toolkit'
import topicListReducer from './topicListSlice';
import commentListReducer from './commentListSlice';



const store = configureStore({
  reducer: {
    topicList: topicListReducer,
    commentList: commentListReducer,
  },
});

export default store;