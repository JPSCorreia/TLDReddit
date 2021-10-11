
import '../Style/App.css';
import logoTLDReddit from '../Style/TLDReddit-logo.png'
import SubredditBar from './components/SubredditBar';
import TopicList from './components/TopicList';
import { useSelector } from 'react-redux';
import textIcon from '../Style/text-icon.png';
import nsfwIcon from '../Style/nsfw-icon.png';


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

  // Function that searchs for thumbnail, it adds a text thumbnail or nsfw thumbnail for posts of those types.
  export const thumbnailExists = (thumbnail, id) => {
    // Not working in some subreddits like r/worldnews
    //console.log(`thumbnail is ${thumbnail} with id ${id}`)
    if (thumbnail.includes('default') || thumbnail.includes('self')) {
      return <img alt="thumbnail" id={`thumbnail-${id}`} title='text-icon' src={textIcon} className='thumbnail'></img>;
    } else if (["nsfw"].includes(thumbnail)) {
      return <img alt="thumbnail" id={`thumbnail-${id}`} title='nsfw-icon' src={nsfwIcon} className='thumbnail'></img>;
    } else {
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
