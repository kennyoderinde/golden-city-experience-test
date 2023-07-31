import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Pages/Home//Home"
import Navbar from './components/Navigation/Navbar/Navbar'

import './App.css';
import OurProjects from './components/Pages/OurProjects/OurProjects';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import ContactUs from './components/Pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/our-projects' element= {<OurProjects />}/>
        <Route path='/about-us' element= {<AboutUs />}/>
        <Route path='/contact-us' element= {<ContactUs />}/>
      </Routes>
      
    </div>
  );
}

export default App;
