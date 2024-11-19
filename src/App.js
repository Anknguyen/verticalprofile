import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Navbar from './pages/Navbar';
import MobileNavbar from './pagesMobile/MobileNavbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import MobileProjects from './pagesMobile/MobileProjects';
import MobileAbout from './pagesMobile/MobileAbout';
import MobileSkills from './pagesMobile/MobileSkills';
import MobileContact from './pagesMobile/MobileContact';

function App() {
  const [homeKey, setHomeKey] = useState(0);

  // Define media queries for mobile and desktop
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Router>
      <div>
        {isMobile ? <MobileNavbar setHomeKey={setHomeKey} /> : <Navbar setHomeKey={setHomeKey} />}
        <Routes>
          <Route path="/projects" element={isMobile ? <MobileProjects key={homeKey} /> : <Projects key={homeKey} />} />
          <Route path="/" element={isMobile ? <MobileAbout /> : <About />} />
          <Route path="/skills" element={isMobile ? <MobileSkills /> : <Skills />} />
          <Route path="/contact" element={isMobile ? <MobileContact /> : <Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
