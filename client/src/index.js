import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
// import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './App';


// const UserContext = createContext()
const root = ReactDOM.createRoot(document.getElementById('root'));
// const [login, setLogin] = useState(false)
root.render(
  <ChakraProvider>
  
  <BrowserRouter>
        <Routes>
          <Route index element={<Login />}  path="/"/>
          <Route path="/application" element={<App />} />
        </Routes>
      </BrowserRouter>
    
 
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
