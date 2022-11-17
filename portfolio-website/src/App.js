import './App.css';
import React from 'react';
import { useEffect } from "react";
import { useTheme } from "./components/darkMode/useTheme";
import useThemeStore from "./components/darkMode/useThemeStore";
import { applyThemePreference } from "./components/darkMode/themeUtils";
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

  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  useTheme();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return (

    <div>

      {/*<div className="h-screen bg-white dark:bg-black flex items-center justify-center">
            <div className="shadow-xl flex flex-col space-y-6 items-center justify-center p-16 dark:bg-gray-900">
              <span className="dark:text-white text-black font-bold text-xl">
                Let's build dark mode with react.
              </span>
              <button
                onClick={toggleTheme}
                type="button"
                className="p-4 rounded bg-black dark:bg-white text-white dark:text-black font-semibold"
              >
                Toggle Theme
              </button>
            </div>
  </div>*/}

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
