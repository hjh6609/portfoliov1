import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages'
import About from './pages/about';
import Contact from './pages/Contact';
import Portfolio from './pages/portfolio';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };

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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
