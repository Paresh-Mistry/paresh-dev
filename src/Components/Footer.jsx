import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6">
      <div className="container mx-auto text-center">
      <div className="bg-blue-600 rounded-full blur-3xl opacity-20">chgshdgs</div>

        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://github.com/Paresh-Mistry" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt="GitHub"
              className="w-10 h-10 hover:text-blue-400 transition duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/in/paresh-mistry-975b64270/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
              alt="LinkedIn"
              className="w-10 h-10 hover:text-blue-400 transition duration-300"
            />
          </a>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/leetcode-2824277-2359434.png"
              alt="Leetcode"
              className="w-10 h-10 hover:text-blue-400 transition duration-300"
            />
          </a>
        </div>

        <div className="mt-6 text-sm">
          <p>&copy; {new Date().getFullYear()} <b className='text-blue-400'>Paresh Mistry. </b>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
