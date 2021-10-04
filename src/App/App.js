
import '../Style/App.css';
import logoTLDReddit from '../Style/TLDRedditlogo.png'
import TopicList from './components/TopicList';

import { useEffect } from 'react';

function App() {

  useEffect(() =>  {
    console.log('use effect ran on App.js')
  });

  return (
    <div className="App">
      
        <img className='logo' alt='logo' src={logoTLDReddit}></img>
        <TopicList subreddit={'r/all'}/>
        <TopicList subreddit={'r/Diablo'}/>

    </div>
  );
}

export default App;
