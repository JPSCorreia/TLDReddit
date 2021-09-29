import { createAsyncThunk } from '@reduxjs/toolkit'
const apiURL = 'https://www.reddit.com/r/all.json'

// Return all thread names from APIURL.
export const getTopicList = createAsyncThunk(
  'topicList/getTopicList',
  async () => {
    return await fetch(apiURL)
    .then(data => data.json())
    .then(jsonData => {

      const arrayOfTopics = [];

      for (let i = 0; i < 25; i++) {
        arrayOfTopics.push( 
          //
          jsonData.data.children[i].data.title,
          // author: jsonData.data.children[i].data.author,
          //subreddit: jsonData.data.children[i].data.subreddit
          //
        )
      };

      return arrayOfTopics;

      }
    )
  }
)

// Return thread with #id from APIURL.
export const getSingleTopic = createAsyncThunk(
  'topic/getSingleTopic',
  async (id) => {
    return await fetch(apiURL)
    .then(data => data.json())
    .then(jsonData => {
      return jsonData.data.children[id].data
    })
  }
)

export const getConsoleTopics = createAsyncThunk(
  'topic/getConsoleTopics',
  async () => {
    return await fetch(apiURL)
    .then(data => data.json())
    .then(jsonData => {
      return console.log(jsonData.data.children.data)
    })
  }
)


// More selective data fetching:
// export function fetchTopicInfo(id) {
//   fetch(apiURL)
//   .then(data => data.json())
//   .then(jsonData => {
//     return {
//       title: jsonData.data.children[id].data.title,
//       clicked: jsonData.data.children[id].data.clicked,
//       score: jsonData.data.children[id].data.score,
//       subreddit: jsonData.data.children[id].subreddit,
//       author: jsonData.data.children[id].author,
//       visited: jsonData.data.children[id].visited,
//       numberOfComments: jsonData.data.children[id].num_comments,
//       upvoteRatio: jsonData.data.children[id].upvote_ratio,
//       thumbnail: jsonData.data.children[id].thumbnail,
//     }
//   })
// }