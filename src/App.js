import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './pages'
import About from './pages/about';
import Contact from './pages/Contact';
import port from './pages/port'; //portfolio component test
import Portfolio from './pages/portfolio';
import browserHistory from 'history/createBrowserHistory'


function App() {

  const [int, setInt] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  //i still don't understand this code.S 
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('1 realize');
      }
    }
    window.addEventListener('realize', hideMenu);

    return () => {
      window.removeEventListener('realize', hideMenu)
    }
  })


  return (
    <>
      <Navbar toggle={ toggle } />
      <Dropdown isOpen={isOpen} toggle={ toggle } />
      
      
      { int === false ? (<Hero /> , <Content />) : 
      (
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/port" exact component={port} />
      </Switch>
      
      )}
      <Footer />
    </>
  );
}

export default App;
