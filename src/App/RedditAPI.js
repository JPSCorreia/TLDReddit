
const apiURL = 'https://www.reddit.com/r/all.json'


const RedditAPI = {

  fetchFirstTitle() {
    fetch(apiURL)
    .then(data => data.json())
    .then(jsonData => {
      return jsonData.data.children[0].data.title
    })
  },

  fetchTitle(id) {
    fetch(apiURL)
    .then(data => data.json())
    .then(jsonData => {
      return jsonData.data.children[id].data.title
    })
  },

  fetchTopicInfo(id) {
    fetch(apiURL)
    .then(data => data.json())
    .then(jsonData => {
      return {
        title: jsonData.data.children[id].data.title,
        clicked: jsonData.data.children[id].data.clicked,
        score: jsonData.data.children[id].data.score,
        subreddit: jsonData.data.children[id].subreddit,
        author: jsonData.data.children[id].author,
        visited: jsonData.data.children[id].visited,
        numberOfComments: jsonData.data.children[id].num_comments,
        upvoteRatio: jsonData.data.children[id].upvote_ratio,
        thumbnail: jsonData.data.children[id].thumbnail,
      }
    })
  },

}

export default RedditAPI;