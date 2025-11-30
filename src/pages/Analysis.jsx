import React from 'react';
import { BarChart3 } from 'lucide-react';

export const Analysis = () => {
  return (
    <div className="flex-1  backdrop-blur-md bg-gradient-to-r from-blue-400 to-purple-500 h-full flex items-center justify-center">
      <div className="text-center">
        <BarChart3 size={64} className="mx-auto mb-4 text-indigo-400" />
        <h2 className="text-3xl font-bold text-white mb-2">Analysis</h2>
        <p className="text-gray-400">Data analysis tools and visualizations</p>
      </div>
    </div>
  );
};