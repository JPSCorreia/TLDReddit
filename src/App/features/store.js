import { configureStore } from '@reduxjs/toolkit'
import topicListReducer from './topicListSlice';
import commentListReducer from './commentListSlice';
import selectedSubredditReducer from './selectedSubredditSlice';


const store = configureStore({
  reducer: {
    topicList: topicListReducer,
    commentList: commentListReducer,
    selectedSubreddit: selectedSubredditReducer,
  },
  // Remove SerializableStateInvariantMiddleware warning.
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
