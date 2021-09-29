import { configureStore } from '@reduxjs/toolkit'
import topicReducer from './topicSlice';
import topicListReducer from './topicListSlice';



const store = configureStore({
  reducer: {
    topic: topicReducer,
    topicList: topicListReducer
  },
});

export default store;