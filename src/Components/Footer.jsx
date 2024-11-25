import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-200 via-purple-600 to-pink-600 text-white py-12 px-6">
      <div className="container mx-auto text-center">
            <div className="mt-6 flex justify-center space-x-6">
          <a href="https://github.com/Paresh-Mistry" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt="GitHub"
              className="w-10 h-10 hover:text-yellow-400 transition duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/in/paresh-mistry-975b64270/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
              alt="LinkedIn"
              className="w-10 h-10 hover:text-yellow-400 transition duration-300"
            />
          </a>
        </div>

        <div className="mt-6 text-sm">
          <p>&copy; {new Date().getFullYear()} Paresh Mistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
