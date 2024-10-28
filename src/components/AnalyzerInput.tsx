import React, { useState } from 'react';

interface AnalyzerInputProps {
  onAnalyze: (url: string) => void;
  isAnalyzing: boolean;
}

function AnalyzerInput({ onAnalyze, isAnalyzing }: AnalyzerInputProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onAnalyze(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="flex gap-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://github.com/username/repository"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
          disabled={isAnalyzing}
        />
        <button
          type="submit"
          disabled={isAnalyzing || !url.trim()}
          className={`px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors ${
            (isAnalyzing || !url.trim()) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isAnalyzing ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Analyzing...
            </span>
          ) : (
            'Analyze'
          )}
        </button>
      </div>
    </form>
  );
}

export default AnalyzerInput;