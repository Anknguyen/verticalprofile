import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {

  const [homeKey, setHomeKey] = useState(0);

  return (
    <Router>
      <div>
        <Navbar 
          setHomeKey={setHomeKey}
        />
        <Routes>
          <Route path="/projects" element={<Projects key={homeKey}/>} />
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
