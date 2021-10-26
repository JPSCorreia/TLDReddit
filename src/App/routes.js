import TopicList from "./components/TopicList";
import { Route} from "react-router-dom";

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

// exports initialState for routes (subreddits as strings to use in subreddit bar)
export const exampleSubredditsURLs = exampleSubreddits.map( element => `/r/${element}`)

// exports initialState for routeList (subreddit routes for react router)
export const exampleRouteList = [];
exampleSubredditsURLs.forEach(element => {
  if (exampleRouteList.length < exampleSubredditsURLs.length) {
    exampleRouteList.push(
      <Route path={element} key={element}>
        <TopicList selectedRoute={element.substr(1)} />
      </Route>
    )
  }
});