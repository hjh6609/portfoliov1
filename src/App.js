import React, { useState, useEffect , Component} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
//import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
//import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './pages'
import About from './pages/about';
import Contact from './pages/Contact';
import Port from './pages/port'; //portfolio component test
import Portfolio from './pages/portfolio';
import List from './Helpers/List';
import { data } from 'autoprefixer';


function App() {

  //const [callUrl, setCallUrl] = useState(window.location.href);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  

  // const [list, setList] = useState("");

  //  const value1 = () => {
  //    setList(List.name)
  //  }

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

  // useEffect(() => {
  //   return (callUrl === 'https://hjh6609.github.io/portfolio-Lucy/' ? (<Hero />) : (''));
  // })


  return (
    <>
      <Navbar toggle={ toggle } />
      <Dropdown isOpen={isOpen} toggle={ toggle } />      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        {/* <Route path="/port" exact component={Port}  /> */}
      


      { !isOpen ? <div>
        {List.map(data => (
          <Port
            key={data.id}
            url={data.url}
            title={data.title}
            describe={data.describe}
            viewsite={data.viewsite}
            viewgit={data.viewgit}
            isOpen={isOpen }
          />
        ))}
      </div> : ('')  
      
      }
      
      
       </Switch>
       <Footer />
    </>
  );
}

export default App;
