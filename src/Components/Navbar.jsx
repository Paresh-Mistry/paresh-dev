import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../assets/Resume.pdf'
import { Menu, MenuSquare } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed z-20 backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 shadow-2xl border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/paresh-dev" className="flex items-center gap-3 group">
          <span className="text-white text-2xl font-extrabold tracking-wider group-hover:text-blue-500 transition duration-300">
            Paresh<span className="text-blue-500 group-hover:text-white">.Dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-lg font-medium">
          {['Home', 'Projects', 'Certificate', 'Education'].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? '/paresh-dev' : '/paresh-dev/' + item.toLowerCase()}
                className="hover:text-blue-500 hover:underline underline-offset-4 transition-all duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none hover:text-blue-500 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuSquare className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out bg-gray-900/95 backdrop-blur-xl rounded-b-xl overflow-hidden z-10 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <ul className="flex flex-col items-center justify-center text-gray-200 text-lg font-medium py-6 space-y-6">
          {['Home', 'Projects', 'Certificate', 'Education'].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? '/paresh-dev' : '/paresh-dev/' + item.toLowerCase()}
                className="hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
};