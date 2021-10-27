import "../Style/App.css";
import SubredditBar from "./components/SubredditBar";
import TopicList from "./components/TopicList";
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import * as RedditAPI from './RedditAPI';

const found = [];



function App() {

  // Redux State/Action Management.
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  const routes = useSelector((state) => state.routes.data);
  const routeList = useSelector((state) => state.routeList.data);
  const dispatch = useDispatch();
  if (selectedSubreddit) console.log(`Loading Subreddit: ${selectedSubreddit}`);


  // Adds route for URL typed only if it doesn't exist already
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
  if (found.length < 1) dispatch(RedditAPI.addToRouteList(urlRoute))
  
  // todo: fix loading two times on startup, three after loading subreddit and adding URL route twice to routeList.
  // console.log(routeList)


  return (
    <div className="App">

        <div className="logo" alt="logo">
        <NavLink
        to={'/'}
        className='subreddit-logo' 
        id='subreddit-logo-button'
      >
        Go to main page
        </NavLink>
        </div>
      
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
