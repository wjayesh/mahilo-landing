import React from 'react';

const Hero = ({ className }) => {
  return (
    <div className={`min-h-[90vh] flex items-center justify-center pt-32 ${className}`}>
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h1 className="mb-8">
          <span className="text-6xl md:text-6xl font-bold leading-normal bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
            Multi-Agent AI Made Simple
          </span>
        </h1>
        <div className="space-y-6 mb-12">
          <p className="text-3xl md:text-4xl font-light text-blue-100 leading-normal max-w-4xl mx-auto">
            Create systems where AI agents can intelligently collaborate while keeping humans in control
          </p>
        </div>
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com/wjayesh/mahilo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started
          </a>
          <a 
            href="https://github.com/wjayesh/mahilo?tab=readme-ov-file#table-of-contents" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-blue-400 text-blue-100 px-8 py-4 rounded-lg text-xl hover:bg-blue-600/20 transform hover:scale-105 transition-all duration-200"
          >
            Documentation
          </a>
        </div>
        <div className="mt-16 flex justify-center gap-12 text-blue-200">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-80">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-80">Monthly PyPI Downloads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;