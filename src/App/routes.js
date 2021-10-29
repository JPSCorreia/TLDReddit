
// List of subreddits chosen.
export const exampleSubreddits = [
  'all',
  'Astronomy',
  'formula1',
  'Futurology',
  'Games',
  'gifs',
  'movies',
  'pcgaming',
  'pics',
  'ProgrammerHumor',
  'portugal',
  'redditdev',
  'space',
  'science',
  'technology',
  'Twitch',
  'worldnews'
]

// exports initialState for routes (subreddits as strings to use in subreddit bar)
export const exampleSubredditsURLs = exampleSubreddits.map( element => `/r/${element}`)
