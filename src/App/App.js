import "../Style/App.css";
import SubredditBar from "./components/SubredditBar";
import TopicList from "./components/TopicList";
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
export const routeList = [] 


function App() {

  // Redux State/Action Management.
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  const routes = useSelector((state) => state.routes.data);
  useEffect(() => {
  }, [dispatch])
  console.log(`Loading Subreddit: ${selectedSubreddit}`);
 
  // Create route list to render from subreddit list in routes.js for the subreddit bar.
  routes.forEach(element => {
    if (routeList.length < routes.length) {
    routeList.push(
      <Route path={element} key={element}>
        <TopicList selectedRoute={element.substr(1)} />
      </Route>
    )
    }
  });

  // Adds route for URL typed only if it doesn't exist already
  const found = [];
  const urlRoute = <Route 
      path={window.location.pathname} 
      key={window.location.pathname}
    >
      <TopicList selectedRoute={window.location.pathname.substr(1)} />
    </Route>;
  routeList.forEach( element => {
    if(element.key.includes(window.location.pathname)) {
      found.push('')
    };
  })
  if (found.length < 1) routeList.push(urlRoute)

      
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
            <Redirect to={routes[0]} />
          </Route>
          { routeList }
        </Switch>
      </div>
      <br />
    </div>
  );
}

export default App;
