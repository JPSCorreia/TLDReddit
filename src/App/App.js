
import '../Style/App.css';
import logoTLDReddit from '../Style/TLDRedditlogo.png'
import TopicList from './components/TopicList';

function App() {

  return (
    <div className="App">
      
        <img className='logo' alt='logo' src={logoTLDReddit}></img>
        <h2>r/all</h2>
        <TopicList />

    </div>
  );
}

export default App;
