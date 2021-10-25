import "../Style/App.css";
import SubredditBar from "./components/SubredditBar";
import TopicList from "./components/TopicList";
import { useSelector } from "react-redux";
import { Switch, Route, NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { exampleSubredditsUpperCase } from './routes'
import { useEffect } from "react";

export const routeList = [] 

function App() {

  
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  const routes = useSelector((state) => state.routes);
  console.log(`Loading Subreddit: ${selectedSubreddit}`);

  // ROUTES = routes atm
  // console.log(ROUTES)
  // console.log(routes)
 
  useEffect(() => {
    // putting line 31-37 here breaks about info for localhost:3000/
    // putting outside pushes the routes to the array every single time the dom refreshes
    // need to fix.

  }, [routes])

      // Create route list from subreddit list for the subreddit bar.
      exampleSubredditsUpperCase.forEach(element => {
        routeList.push(
          <Route path={routes[element]} key={routes[element]}>
            <TopicList selectedRoute={routes[element].substr(1)} />
          </Route>
        )
      });

  // Add route for URL typed. 
  //(its pushing for every refresh, should push only when user goes to URL)
  // need to fix.
  const urlRoute = <Route path={window.location.pathname} key={window.location.pathname}>
      <TopicList selectedRoute={window.location.pathname.substr(1)} />
    </Route>;
  //   console.log(routeList.includes(urlRoute))
  // if (!routeList.includes(urlRoute)) {
  //   routeList.push(urlRoute)
  // }
  routeList.push(urlRoute)

  // to do: fix push adding same routes.
  console.log(routeList)


      
  return (
    <div className="App">
      <NavLink
        to={'/'}
      >
        <div className="logo" alt="logo"></div>
      </NavLink>
      <SubredditBar />
      <div className="main-body">
        <Switch>
          <Route exact path="/">
            <Redirect to={routes.REDDITDEV} />
          </Route>
          { routeList }
        </Switch>
      </div>
      <br />
    </div>
  );
}

export default App;
