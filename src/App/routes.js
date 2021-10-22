import exampleSubreddits from './exampleSubreddits'

// Get 2 arrays, one to use as keys and another as values for the ROUTES object.
const exampleSubredditsURLs = exampleSubreddits.map( element => `/r/${element}`)
export const exampleSubredditsUpperCase = exampleSubreddits.map( element => element.toUpperCase())

// Use both arrays as keys/values to get a ROUTES object.
// eslint-disable-next-line no-sequences
export const ROUTES = exampleSubredditsUpperCase.reduce( (acc, curr, index) => (acc[curr]=exampleSubredditsURLs[index], acc),{});

