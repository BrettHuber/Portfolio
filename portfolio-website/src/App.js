import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <Footer />
      {/* Router */}
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
