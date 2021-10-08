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
        // jsonData[0] is the post
        // jsonData[1] is the comments
        return { data: jsonData[1].data.children , key: url, isShowingComments: false };
      });
  }
);

export const selectSubreddit = createAsyncThunk(
  "selectedSubreddit/selectSubreddit",
  async (sub) => {
    return sub;
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