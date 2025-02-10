import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/paresh-mistry-975b64270/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://github.com/Paresh-Mistry" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </div>
        <div className="mt-6 text-sm">
          <p>&copy; {new Date().getFullYear()} <b className='text-yellow-300'>Paresh-Dev. </b>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
