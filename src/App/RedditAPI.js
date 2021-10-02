import { createAsyncThunk } from '@reduxjs/toolkit'
import permalink from './components/Topic';
const apiURL = 'https://www.reddit.com/r/all.json'
const commentApiURL = `https://www.reddit.com/${permalink}.json`


export const getTopicList = createAsyncThunk(
  'topicList/getTopicList',
  async () => {
    return await fetch(apiURL)
    .then(data => data.json())
    .then(jsonData => {
      return jsonData.data.children;
      }
    )
  }
)

export const getCommentList = createAsyncThunk(
  'commentList/getCommentList',
  async () => {
    return await fetch(commentApiURL)
    .then(data => data.json())
    .then(jsonData => {
      return jsonData.data.children;
      }
    )
  }
)