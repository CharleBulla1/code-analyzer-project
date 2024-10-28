import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BugData } from '../types';

interface BugAnalysisProps {
  data: BugData[];
}

function BugAnalysis({ data }: BugAnalysisProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 h-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Bug Probability Analysis</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name"
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#4B5563' }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#4B5563' }}
              unit="%" 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#F3F4F6'
              }}
            />
            <Bar 
              dataKey="probability" 
              fill="#60A5FA"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BugAnalysis;