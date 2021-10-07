
import '../Style/App.css';
import logoTLDReddit from '../Style/TLDRedditlogo.png'
import SubredditBar from './components/SubredditBar';
import TopicList from './components/TopicList';
import { useSelector } from 'react-redux';


  // Function to convert Unix Timestamp to date in local timezone/locale.
  export const convertUnixToDate = (unixTimestamp) => {

    // Get user's locale (ie: 'en-us').
    const getNavigatorLanguage = () => {
      if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0];
      } else {
        return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
      }
    }

    // Get user's timezone. (ie: 'Europe/Lisbon')
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Return date with locale and user timezone in consideration.
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString(getNavigatorLanguage(), {timeZone: timeZone})
  }



  // Function that searchs if thumbnail exists and hides thumbnail if it doesn't
  export const thumbnailExists = (thumbnail, id) => {
    if (!["default", "self"].includes(thumbnail)) {
      return <img alt="thumbnail" id={`thumbnail-${id}`} title={thumbnail} src={thumbnail} className='thumbnail'></img>;
    }
  };



function App() {

  const selectedSubreddit = useSelector((state) => state.selectedSubreddit.value )
  console.log(`Loading Subreddit: ${selectedSubreddit}`)

  return (
    <div className="App">
      <img className='logo' alt='logo' src={logoTLDReddit}></img>
      <SubredditBar />
      <TopicList subreddit={selectedSubreddit}/>
      <br/>
    </div>
  );
}

export default App;
