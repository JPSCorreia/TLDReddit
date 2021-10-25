import { createAsyncThunk } from "@reduxjs/toolkit";

// Get topic list from url Action
export const getTopicList = createAsyncThunk(
  "topicList/getTopicList",
  async (url) => {
      return await fetch(`https://www.reddit.com/${url}.json`)
      .then((data) => data.json())
      .then((jsonData) => {
        return { data: jsonData.data.children , key: url, before: jsonData.data.before, after: jsonData.data.after, indexPageNumber: 1, beforeCounter: 26, afterCounter: 0 };
      });
 

  }
);

// Get About from subreddit, ie: https://www.reddit.com/r/formula1/about.json
export const getAbout = createAsyncThunk(
  "about/getAbout",
  async (url) => {
      return await fetch(`https://www.reddit.com/${url}/about.json`)
      .then((data) => data.json())
      .then((jsonData) => {
        return { data: jsonData.data, key: url };
      });
  }
);

// Get after topic list from url Action
export const getTopicListAfter = createAsyncThunk(
  "topicList/getTopicListAfter",
  async (url) => {
      return await fetch(url[0])
      .then((data) => data.json())
      .then((jsonData) => {
        return { data: jsonData.data.children , key: url[1], before: jsonData.data.before, after: jsonData.data.after, indexPageNumber: url[2], beforeCounter: url[3], afterCounter: url[4] };
      });
  }
);

// Get before topic list from url Action
export const getTopicListBefore = createAsyncThunk(
  "topicList/getTopicListBefore",
  async (url) => {
      console.log(url)
      return await fetch(url[0])
      .then((data) => data.json())
      .then((jsonData) => {
        return { data: jsonData.data.children , key: url[1], before: jsonData.data.before, after: jsonData.data.after, indexPageNumber: url[2], beforeCounter: url[3], afterCounter: url[4] };
      });
  }
);






// Get comment list from url Action
export const getCommentList = createAsyncThunk(
  "commentList/getCommentList",
  async (url) => {
    return await fetch(`https://www.reddit.com/${url.slice(-1) === '/'? url.slice(0, -1) : url}.json`) // remove '/' at end of the url in urls that have it.
      .then((data) => data.json())
      .then((jsonData) => {
        // jsonData[0] is the post
        // jsonData[1] is the comments
        return { data: jsonData[1].data.children , key: url, isShowingComments: false };
      });
  }
);

// Select subreddit sub Action
export const selectSubreddit = createAsyncThunk(
  "selectedSubreddit/selectSubreddit",
  async (sub) => {
    return sub;
  }
)

// Toggle preview image for a topic with property id=id Action
export const preview = createAsyncThunk(
  "previewImage/preview",
   async (id) => {
    return { id: id };
    }
)

// Toggle comments showing for a topic with property id=id Action
export const toggle = createAsyncThunk(
  "toggleComments/toggle",
   async (id) => {
    return { id: id };
    }
)

// Select subreddit sub Action
export const setSearchItem = createAsyncThunk(
  "searchItem/setSearchItem",
  async (searchItem) => {
    return searchItem;
  }
)

// Add route to routes Action
export const addRoute = createAsyncThunk(
  "routes/addRoute",
  async (route) => {
    return route;
  }
)


  /* 
    REDDIT API INFO

  post_hint: 
    'link' para link para uma external source, 
    'image' para imagem

  url_overridden_by_dest: 
    tem a url lá dentro no caso de articles ou qlq external source, 
    o link para a imagem no caso de imagem

  post_hint: "hosted:video"
    no caso de ter um video hosted pelo reddit

  secure_media.reddit_video ou media.reddit_video
    tem a data toda do video lá dentro
    secure_media.reddit_video.height e secure_media.reddit_video.width tem as dimensoes do video
    secure_media.reddit_video.fallback_url tem a URL directa do video
    secure_media.reddit_video.is_gif = true or false dependente se for gif ou nao
    secure_media.reddit_video.duration tem a duração em segundos
    quando secure_media key for = null então verificar se ha media key


    is_video: true
      quando é um video


  */