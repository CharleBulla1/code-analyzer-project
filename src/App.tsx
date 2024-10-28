import React, { useState } from 'react';
import Header from './components/Header';
import AnalyzerInput from './components/AnalyzerInput';
import CodeOptimization from './components/CodeOptimization';
import BugAnalysis from './components/BugAnalysis';
import { AnalysisData } from './types';

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState<AnalysisData>({
    optimizations: [
      { id: 1, title: 'Code Organization', description: 'Consider implementing feature-based folder structure' },
      { id: 2, title: 'Component Optimization', description: 'Implement React.memo for frequently re-rendered components' },
      { id: 3, title: 'State Management', description: 'Consider using React Query for data fetching and caching' }
    ],
    bugProbability: [
      { name: 'Authentication', probability: 75 },
      { name: 'Data Fetching', probability: 45 },
      { name: 'State Management', probability: 30 },
      { name: 'UI Components', probability: 15 }
    ]
  });

  const handleAnalyze = async (url: string) => {
    setRepoUrl(url);
    setIsAnalyzing(true);
    
    // Simulate analysis with new mock data
    const mockData: AnalysisData = {
      optimizations: [
        { id: 1, title: 'Bundle Size', description: 'Large bundle size detected. Consider code splitting and lazy loading.' },
        { id: 2, title: 'Performance', description: 'Use React.memo() for expensive computations in components.' },
        { id: 3, title: 'Security', description: 'Implement proper input validation and sanitization.' },
        { id: 4, title: 'Accessibility', description: 'Add ARIA labels and proper semantic HTML elements.' }
      ],
      bugProbability: [
        { name: 'Authentication', probability: 65 },
        { name: 'API Integration', probability: 45 },
        { name: 'State Updates', probability: 30 },
        { name: 'Event Handlers', probability: 25 },
        { name: 'UI Rendering', probability: 15 }
      ]
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setAnalysisData(mockData);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <AnalyzerInput 
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <CodeOptimization suggestions={analysisData.optimizations} />
          <BugAnalysis data={analysisData.bugProbability} />
        </div>
      </div>
    </div>
  );
}

export default App;