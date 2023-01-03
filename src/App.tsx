import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
// pages
import Landing from './pages/Landing';
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";


function App() {
  return (
    <div className="App">

      <div className="NavList">
          <Link to="/" style={{textDecoration: 'none'}} >
            <h3 className="List">Home</h3>
          </Link>
          
          <Link to="contact" style={{textDecoration: 'none'}} >
            <h3 className="Link">Contact Me</h3>
          </Link>
          
      </div>

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='blog' element={<Blog/>} />
      </Routes>

    </div>
  );
}


export default App;