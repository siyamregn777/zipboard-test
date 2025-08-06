import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Stay Connected</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Follow us on social media for the latest updates.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">Facebook</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">Instagram</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">LinkedIn</a>
        </div>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-400 py-4 bg-white dark:bg-black transition-colors duration-300">
        © 2025 ZipBoard Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
