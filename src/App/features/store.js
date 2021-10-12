import { configureStore } from '@reduxjs/toolkit'
import topicListReducer from './topicListSlice';
import commentListReducer from './commentListSlice';
import selectedSubredditReducer from './selectedSubredditSlice';
import selectedTopicReducer from './selectedTopicSlice';


const store = configureStore({
  reducer: {
    topicList: topicListReducer,
    commentList: commentListReducer,
    selectedSubreddit: selectedSubredditReducer,
    selectedTopic: selectedTopicReducer
  },
  // Remove SerializableStateInvariantMiddleware warning.
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
