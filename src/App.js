import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Route, Switch } from 'react-router';
import './App.css';
//import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages'
import About from './pages/about';
import Contact from './pages/Contact';
import Port from './pages/port'; //portfolio component test
import Portfolio from './pages/portfolio';
import List from './Helpers/List';
import Hero from './components/Hero';
import Posts from './components/Posts';
import Pagination from './components/Pagination';


function App() {
  //paging/////////
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  //paging////////////////

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  const [url2] = useState("http://localhost:3000/port");
  //const [url2, setUrl2] = useState("http://hjh6609.github.io/port/");



  //paging
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      //const res = await axios.get(List);
      //console.log(res);
      //setPosts(res.data);
      setPosts(List)
      setLoading(false);
    }
    fetchPosts();
  }, []);

  //useEffect is load when page is always loading, but '(){}' << this code always /
  //({}, [dept]) << when dept is transfomeded //({}[]) << just only one . I understand still yet.
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
  
  
  //console.log(posts);
  return (
    <>
      <Navbar toggle={ toggle } />
      <Dropdown isOpen={isOpen} toggle={ toggle } />      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        {/* <Route path="/port" exact component={Port} /> */}
      </Switch>

      
      {window.location.href === 'https://hjh6609.github.io/portfolio-Lucy/' ? (<Hero />) : ('　')}
        
      {window.location.href === 'https://hjh6609.github.io/portfolio-Lucy/about' ||
        window.location.href === 'https://hjh6609.github.io/portfolio-Lucy/portfolio' ||
        window.location.href === 'https://hjh6609.github.io/'
        // || window.location.href === 'https://hjh6609.github.io/port'
        ?
        ('　') : <Hero />
      }

      {/* {window.location.href  === "http://localhost:3000/port" ?
        (
          <div>
          {List.map(data => (
            <Port
              key2={data.id}
              url={data.url}
              title={data.title}
              describe={data.describe}
              viewsite={data.viewsite}
              viewgit={data.viewgit}
              
            />
          ))}
          </div>
        ) : ('　')
      } */}
      
     
       <Footer />
    </>
  );
}

export default App;
