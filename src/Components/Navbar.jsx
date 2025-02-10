import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../assets/Resume.pdf'
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gradient-to-br z-20 from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/paresh-dev" className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1096/1096090.png"
            alt="Logo"
            className="w-10 animate-pulse rounded-full border-4 border-gray-200"
          />
          <span className="text-white text-2xl font-extrabold tracking-wide">
            Paresh<span className="text-blue-500">.Dev</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center space-x-8 text-gray-300 text-lg font-medium">
          {['Home', 'Projects', 'Education&Skills', 'Resume'].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? '/paresh-dev' : '/' + item.toLowerCase()}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu/>
        </button>
        
      </div>

      
        <ul className={`md:hidden absolute bg-gray-800 text-gray-300 text-lg font-medium text-center space-y-4 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out w-full ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
          {['Home', 'Projects', 'Education&Skills', 'Resume'].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? '/paresh-dev' : '/' + item.toLowerCase()}
                className="hover:text-blue-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              variant="primary"
              className="inline-block px-6  py-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-transform"
              to={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              &nbsp;Download Resume
            </Link>
          </li>
        </ul>
      
    </nav>
  );
};