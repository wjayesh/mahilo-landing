import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [starCount, setStarCount] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/wjayesh/mahilo')
      .then(response => response.json())
      .then(data => setStarCount(data.stargazers_count))
      .catch(error => console.error('Error fetching star count:', error));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-0 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <svg 
                className="w-6 h-6 text-blue-600" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-2xl font-bold">mahilo</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              Use Cases
            </button>
            <a 
              href="https://github.com/wjayesh/amhilo#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              Docs
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/wjayesh/mahilo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Stars</span>
              {starCount !== null && (
                <span className="ml-1 px-2 py-1 bg-gray-200 rounded-md text-sm font-semibold">
                  {starCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;