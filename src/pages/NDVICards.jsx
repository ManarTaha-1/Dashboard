import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const NDVICards = () => {
  const ndviData = [
    {
      ndvi:'NDVI',
      title: 'Current',
      max: 0.82,
      min: 0.12,
      mean: 0.54,
      change: -37
    },
    {
      ndvi:'NDVI ',
      title: ' Previous',
      max: 0.78,
      min: 0.15,
      mean: 0.48,
      change: 12
    },
    {
      ndvi:'NDVI',
      title: 'Forecast',
      max: 0.85,
      min: 0.18,
      mean: 0.58,
      change: 8
    }
  ];

  return (
    <div className="flex gap-10 p-6 w-full">
      {ndviData.map((data, index) => (
        <div 
          id='card'
          key={index}
          className="bg-purple rounded-2xl p-6 flex-1 border border-gray-600 border-opacity-40 hover:border-opacity-60 transition-all duration-300 shadow-lg"
        >
          <h3 className="text-white text-xl font-bold mb-5 text-center">
            {data.ndvi} &nbsp; {data.title}
          </h3>

          <div className="space-y-4 ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2 ">
                <TrendingUp className="text-green-400" size={20} />
                <span className="text-gray-300 font-medium">Max:</span>
              </div>
              <span className="text-white font-bold text-lg">{data.max}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="text-red-400" size={20} />
                <span className="text-gray-300 font-medium">Min:</span>
              </div>
              <span className="text-white font-bold text-lg">{data.min}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-300 font-medium">Mean:</span>
              </div>
              <span className="text-white font-bold text-lg">{data.mean}</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-gray-300 font-medium">Change:</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`font-bold text-lg ${data.change < 0 ? 'text-red-400' : 'text-green-400'}`}>
                  {data.change > 0 ? '+' : ''}{data.change}%
                </span>
                {data.change < 0 ? 
                  <TrendingDown size={18} className="text-red-400" /> : 
                  <TrendingUp size={18} className="text-green-400" />
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};