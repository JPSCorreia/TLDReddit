import "../Style/App.css";
import SubredditBar from "./components/SubredditBar";
import TopicList from "./components/TopicList";
import { useSelector } from "react-redux";


function App() {

  
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value);
  console.log(`Loading Subreddit: ${selectedSubreddit}`);

  return (
    <div className="App">
      <div className="logo" alt="logo"></div>
      <SubredditBar />
      <div className="main-body">
      <TopicList />
      </div>
      <br />
    </div>
  );
}

export default App;
