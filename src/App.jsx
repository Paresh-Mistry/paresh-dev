import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Added Link
import { useState } from 'react'; // Added useState
import { Section } from './Components/Section';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Education from './Components/Education';

function App() {
  // Define isOpen state for the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <header>
        <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1096/1096090.png"
                alt="Logo"
                className="w-10"
              />
              <span className="text-white text-2xl font-bold tracking-wide">
                Paresh<span className="text-yellow-400">.Dev</span>
              </span>
            </Link>

            <ul className="hidden md:flex items-center space-x-8 text-white text-lg font-medium">
              {['Home', 'Projects', 'Education-Skills'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : '/' + item.toLowerCase().replace(' ', '-')}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="/MyResume.pdf"
              download="MyResume.pdf"
              className="hidden md:inline-block bg-white text-indigo-600 px-5 py-2 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition duration-300"
            >
              Download Resume
            </a>

            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <ul className="md:hidden bg-indigo-700 text-white text-lg font-medium text-center space-y-4 py-4">
              {['Home', 'Projects', 'Education-Skills'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : '/' + item.toLowerCase().replace(' ', '-')}
                    className="hover:text-yellow-400 transition duration-300"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/MyResume.pdf"
                  download="MyResume.pdf"
                  className="bg-white text-indigo-600 px-5 py-2 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition duration-300"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education-skills" element={<Education />} /> {/* Updated Route */}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
