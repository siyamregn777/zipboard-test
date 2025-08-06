import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-100 to-amber-200 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg min-h-screen">
      <div className="max-w-7xl mx-auto text-center mt-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to ZipBoard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Your one-stop solution for all your needs.
        </p>
        <button className="bg-blue-500 text-white hover:bg-gray-500 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer px-6 py-3 rounded-lg transition-colors duration-300">
          Get Started
        </button>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Join us and explore the world of possibilities.
        </p>
      </div>

      <div>
        <img
          src="/img/go.jpg"
          width={400}
          height={400}
          alt="Hero Image"
          className="mx-auto rounded-full shadow-md mt-10 md:mt-0"
        />
      </div>
    </div>
  );
};

export default Hero;
