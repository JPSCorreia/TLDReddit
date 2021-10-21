import { configureStore } from '@reduxjs/toolkit'
import topicListReducer from './topicListSlice';
import commentListReducer from './commentListSlice';
import selectedSubredditReducer from './selectedSubredditSlice';
import previewImageReducer from './previewImageSlice';
import toggleCommentsReducer from './toggleCommentsSlice';
import searchItemReducer from './searchItemSlice';

const store = configureStore({
  reducer: {
    topicList: topicListReducer,
    commentList: commentListReducer,
    selectedSubreddit: selectedSubredditReducer,
    previewImage: previewImageReducer,
    toggleComments: toggleCommentsReducer,
    searchItem: searchItemReducer,
  },
  // Remove SerializableStateInvariantMiddleware warning.
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
