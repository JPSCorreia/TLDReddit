import { configureStore } from '@reduxjs/toolkit'
import topicListReducer from './topicListSlice';
import commentListReducer from './commentListSlice';



const store = configureStore({
  reducer: {
    topicList: topicListReducer,
    commentList: commentListReducer,
  },
  // Remove SerializableStateInvariantMiddleware warning.
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;









// list.push(`<p>Comment ${i}</p>`)