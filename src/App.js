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


function App() {

  const callUrl = window.location.href;

  // function isBrowserCheck(){ 
  //   const agt = navigator.userAgent.toLowerCase(); 
  //   if (agt.indexOf("chrome") != -1) return 'Chrome'; 
  //   if (agt.indexOf("opera") != -1) return 'Opera'; 
  //   if (agt.indexOf("staroffice") != -1) return 'Star Office'; 
  //   if (agt.indexOf("webtv") != -1) return 'WebTV'; 
  //   if (agt.indexOf("beonex") != -1) return 'Beonex'; 
  //   if (agt.indexOf("chimera") != -1) return 'Chimera'; 
  //   if (agt.indexOf("netpositive") != -1) return 'NetPositive'; 
  //   if (agt.indexOf("phoenix") != -1) return 'Phoenix'; 
  //   if (agt.indexOf("firefox") != -1) return 'Firefox'; 
  //   if (agt.indexOf("safari") != -1) return 'Safari'; 
  //   if (agt.indexOf("skipstone") != -1) return 'SkipStone'; 
  //   if (agt.indexOf("netscape") != -1) return 'Netscape'; 
  //   if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla'; 
  //   if (agt.indexOf("msie") != -1) { 
  //       let rv = -1; 
  //     if (navigator.appName == 'Microsoft Internet Explorer') { 
  //       let ua = navigator.userAgent; var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})"); 
  //     if (re.exec(ua) != null) 
  //       rv = parseFloat(RegExp.$1); 
  //     } 
  //     return 'Internet Explorer '+rv; 
  //   } 
  // }
  
  // const browser = isBrowserCheck();

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
      
      {callUrl === 'https://hjh6609.github.io/portfolio-Lucy/'  ? (<Hero />) : ('')}
      {/* {browser === 'Safari' ? '' : ''} */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/port" exact component={port} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
