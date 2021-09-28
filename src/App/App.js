
import '../Style/App.css';
import logoTLDReddit from '../Style/TLDRedditlogo.png'
import Topic from './components/Topic';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" src={logoTLDReddit}></img>
        <Topic />
        <h4>Coming soon...</h4>
      </header>
    </div>
  );
}

export default App;
