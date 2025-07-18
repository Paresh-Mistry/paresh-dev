import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';
import Projects from './routes/Projects';
import Certificate from './routes/Certificate';
import Education from './routes/Education';
import {Home} from './routes/Home';


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path={"paresh-dev"} element={<Home />} />
          <Route path="/paresh-dev/projects" element={<Projects />} />
          <Route path="/paresh-dev/certificate" element={<Certificate />} />
          <Route path="/paresh-dev/education" element={<Education />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
