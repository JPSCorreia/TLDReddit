
import '../Style/App.css';
import logoTLDReddit from '../Style/TLDRedditlogo.png'
import TopicList from './components/TopicList';

function App() {

  return (
    <div className="App">
        <img className='logo' alt='logo' src={logoTLDReddit}></img>

        <TopicList subreddit={'r/all'}/>
        <TopicList subreddit={'r/ProgrammerHumor'}/>

        
    </div>
  );
}

export default App;
