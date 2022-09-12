import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter><Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/resume" element = {<Resume />} />
      <Route path = "/contact" element = {<Contact />} />
      <Route path = "/about" element = {<About />} />
    </Routes>
    </BrowserRouter>
    {/* <Home /> */}
    {/* <Resume />    */}
    <Footer />
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      #f1f1ee
*/
