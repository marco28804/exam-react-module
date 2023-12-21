// App.jsx
import React from 'react';
import './App.css';
import HomePage from './homePage';
import SearchPage from './SearchPage';
import { Route, Routes,Navlink,Link } from 'react-router-dom';
import AboutPage from './about';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  return (
    <>
    
    
      <div>
      <SearchPage  /> 
      </div>
      <div>
      <h1>ATTORI POPOLARI DEL GIORNO</h1>
      <HomePage />
      </div>
     <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
     </Routes>
    </>
  );
}

export default App;
