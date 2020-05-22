import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>


      </div>
    </BrowserRouter>
  );
}

export default App;
