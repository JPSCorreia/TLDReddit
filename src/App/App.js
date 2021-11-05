import "../Style/App.css";
import SubredditBar from "./components/SubredditBar";
import TopicList from "./components/TopicList";
import { useSelector } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";


function App() {

  // Redux State/Action Management.
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  const routes = useSelector((state) => state.routes.data);
  const theme = useSelector((state) => state.theme.value);
  if (selectedSubreddit) console.log(`Loading Subreddit: ${selectedSubreddit}`);

  return (
    <div className={'App ' + ( theme? 'theme--dark' : 'theme--default')}>
      <SubredditBar />
      <div className="main-body">
        <Switch>
          <Route exact path="/">
            <Redirect to={routes[0]} /> 
          </Route>
          <Route path="/r/:id" children={<TopicList />} />
        </Switch>
      </div>
      <br />
    </div>
  );
}

export default App;

/* 

 function toggleUpArrow(event) {





*/