import './App.css';
import Feed from './components/Feed';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tweet from './components/Tweet';
import { createContext, useState } from 'react';

export const UserInfo = createContext(); // Exporting UserInfo context

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <UserInfo.Provider value={{ loggedIn, setLoggedIn }}>
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
          <aside className="user-details">
            {/* User details component */}
          </aside>
        </div>
      </div>
    </UserInfo.Provider>
  );
}

export default App;
