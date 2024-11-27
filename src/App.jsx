import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Section } from './Components/Section';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Education from './Components/Education';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education&skills" element={<Education />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
