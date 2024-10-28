import React from 'react';

function Header() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        GitHub Code Analyzer
      </h1>
      <p className="text-gray-300 text-lg">
        Enter a GitHub repository URL to analyze code quality and potential bugs
      </p>
    </div>
  );
}

export default Header;