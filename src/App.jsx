import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Section } from './Components/Section';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Resumepdf from './Components/Resumepdf';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path={"paresh-dev"} element={<Section />} />
          <Route path="/paresh-dev/projects" element={<Projects />} />
          <Route path="/paresh-dev/education&skills" element={<Education />} />
          <Route path="/paresh-dev/Resume" element={<Resumepdf />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
