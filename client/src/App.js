import './App.css';
import Feed from './components/Feed';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tweet from './components/Tweet';

function App() {
  return (
    <div className='container'>

      <Navigation />
      <div className='main-content'>
        <aside className='menu-section'>
          <Home />
        </aside>

        <aside className='feed-section'>
          <Tweet />
          <Feed />
        </aside>

      </div>




    </div>
  );
}

export default App;
