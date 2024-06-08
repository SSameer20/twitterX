import './App.css';
import Feed from './components/Feed';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
          <Navigation />
        <div style={{display: "flex"}}>
          <aside style={{ width: "200px", height: "90vh", backgroundColor: "yellow" }}>
            <Home />
          </aside>

          <Feed />
        </div>

      </BrowserRouter>


    </div>
  );
}

export default App;
