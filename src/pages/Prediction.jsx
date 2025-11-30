import React from 'react';
import { TrendingUp } from 'lucide-react';

export const Prediction = () => {
  return (
    <div className="flex-1  backdrop-blur-md bg-gradient-to-r from-blue-400 to-purple-500 h-full flex items-center justify-center">
      <div className="text-center">
        <TrendingUp size={64} className="mx-auto mb-4 text-purple-400" />
        <h2 className="text-3xl font-bold text-white mb-2">Prediction</h2>
        <p className="text-gray-400">Environmental prediction models</p>
      </div>
    </div>
  );
};