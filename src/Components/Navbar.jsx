import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../assets/Resume.pdf'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 transition"
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
        <ul className="md:hidden bg-gray-800 text-gray-300 text-lg font-medium text-center space-y-4 py-4 rounded-lg shadow-lg">
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
      )}
    </nav>
  );
};