import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Nav-Bar component
import Nav from './components/Nav';

// Import Pages Component
import Home from './pages/Home';
import MyNetwork from './pages/MyNetworks';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notification from './pages/Notification';

// Import React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Nav />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mynetwork" element={<MyNetwork/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/messaging" element={<Messaging/>} /> 
          <Route path="/messaging/:id" element={<Messaging/>} /> 
          <Route path="/notification" element={<Notification/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
