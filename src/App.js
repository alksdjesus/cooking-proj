import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul class="w3-navbar w3-black">
          <li><a href="./screens/feed.js">Feed</a></li>
          <li><a href="./screens/search.js">Search</a></li>
          <li><a href="./screens/saved.js">Saved</a></li>
          <li><a href="./screens/settings.js">Settings</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
