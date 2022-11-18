import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

// import components
import Header from './components/layout/Header';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/content/Skills';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import BackTopBtn from './components/content/BackTopBtn';

const App = () => {

  return (

    <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Hero />} > </Route>
            <Route path="/About" element={<About />} > </Route>
            <Route path="/Skills" element={<Skills />} > </Route>
            <Route path="/portfolio" element={<Portfolio />} > </Route>
            <Route path="/Services" element={<Services />} > </Route>
            <Route path="/Contact" element={<Contact />} > </Route>
            </Routes>
          <Footer/>
          <BackTopBtn />
        </Router>

      </div>
  );
};

export default App;
