import React from 'react';
import { ChartBarIcon, ExclamationTriangleIcon, ArrowTrendingUpIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { Suggestion } from '../types';

interface CodeOptimizationProps {
  suggestions: Suggestion[];
}

function CodeOptimization({ suggestions }: CodeOptimizationProps) {
  const getIcon = (id: number) => {
    switch (id % 4) {
      case 0:
        return <ChartBarIcon className="w-6 h-6 text-blue-400" />;
      case 1:
        return <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <ArrowTrendingUpIcon className="w-6 h-6 text-green-400" />;
      case 3:
        return <CodeBracketIcon className="w-6 h-6 text-purple-400" />;
      default:
        return <ChartBarIcon className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 h-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Code Optimization Suggestions</h2>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div 
            key={suggestion.id} 
            className="p-4 bg-gray-700 rounded-lg flex items-start gap-4 transition-all hover:bg-gray-600 cursor-pointer"
          >
            <div className="flex-shrink-0 mt-1">
              {getIcon(suggestion.id)}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1 text-white">{suggestion.title}</h3>
              <p className="text-gray-300 text-sm">{suggestion.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodeOptimization;