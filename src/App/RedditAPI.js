import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTopicList = createAsyncThunk(
  "topicList/getTopicList",
  async (url) => {
    return await fetch(`https://www.reddit.com/${url}.json`)
      .then((data) => data.json())
      .then((jsonData) => {
        return { data: jsonData.data.children , key: url };
      });
  }
);

export const getCommentList = createAsyncThunk(
  "commentList/getCommentList",
  async (url) => {
    return await fetch(`https://www.reddit.com/${url}.json`)
      .then((data) => data.json())
      .then((jsonData) => {
        console.log(url);
        // jsonData[0] is the post
        // jsonData[1] is the comments
        return { data: jsonData[1].data.children , key: url };
      });
  }
);
