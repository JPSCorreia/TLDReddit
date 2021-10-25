
// List of subreddits chosen.
export const exampleSubreddits = [
  'all',
  'Astronomy',
  'formula1',
  'Futurology',
  'Games',
  'gifs',
  'leagueoflegends',
  'movies',
  'pcgaming',
  'pics',
  'ProgrammerHumor',
  'portugal',
  'redditdev',
  'space',
  'science',
  'technology',
  'Whatcouldgowrong',
  'worldnews'
]

// Get 2 arrays, one to use as keys and another as values for the ROUTES object.
export const exampleSubredditsURLs = exampleSubreddits.map( element => `/r/${element}`)
// export const exampleSubredditsUpperCase = exampleSubreddits.map( element => element.toUpperCase())

// Use both arrays as keys/values to get a ROUTES object.
// eslint-disable-next-line no-sequences
// export const ROUTES = exampleSubredditsUpperCase.reduce( (acc, curr, index) => (acc[curr]=exampleSubredditsURLs[index], acc),{});

