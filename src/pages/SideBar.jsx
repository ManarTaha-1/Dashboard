import React, { useState } from 'react';
import { NDVICards } from './NDVICards';

export const Sidebar = ({ isOpen , onClose}) => {
  const [protectedArea, setProtectedArea] = useState('');
  const [satellite, setSatellite] = useState('sentinel2');
  const [timePeriod, setTimePeriod] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [dataTypes, setDataTypes] = useState([]);

  const toggleDataType = (type) => {
    setDataTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const resetFilters = () => {
    setProtectedArea('');
    setSatellite('sentinel2');
    setTimePeriod('');
    setSelectedSeason('');
    setDataTypes([]);
  };

  return (
    <div id='side' className={`${isOpen ? 'w-full' : 'w-0'}  transition-all duration-300 font-cairo bg-indigo-950 border-r border-indigo-900 flex-shrink-0 overflow-hidden`}>
      <div className="p-6 space-y-6 w-80 h-screen bg-indigo-950" >
        {/* Protected Area Dropdown */}
        <div>
          <select 
            value={protectedArea}
            onChange={(e) => setProtectedArea(e.target.value)}
            className="w-full cursor-pointer bg-white text-black px-4 py-3 text-xl rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">protected area</option>
            <option value="area1">National Park 1</option>
            <option value="area2">National Park 2</option>
            <option value="area3">Wildlife Reserve</option>
          </select>
        </div>

        {/* Satellite Selection */}
        <div>
          <h3 className="text-white font-bold mb-3 text-xl uppercase">Satellite</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="radio" 
                name="satellite"
                value="sentinel2"
                checked={satellite === 'sentinel2'}
                onChange={(e) => setSatellite(e.target.value)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-white text-xl">Sentinel 2</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="radio" 
                name="satellite"
                value="landsat"
                checked={satellite === 'landsat'}
                onChange={(e) => setSatellite(e.target.value)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-white text-xl">Landsat series</span>
            </label>
          </div>
        </div>

        {/* Time Period Dropdown */}
        <div>
          <select 
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="w-full cursor-pointer bg-white text-black px-4 py-3 text-xl rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">time period</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>

        {/* Season Selection */}
        <div>
          <h3 className="text-white font-bold mb-3 text-xl uppercase">season</h3>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="season"
                value="summer"
                checked={selectedSeason === 'summer'}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-white text-lg">summer</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="season"
                value="spring"
                checked={selectedSeason === 'spring'}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-white text-lg">spring</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="season"
                value="winter"
                checked={selectedSeason === 'winter'}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-white text-lg">winter</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="season"
                value="autumn"
                checked={selectedSeason === 'autumn'}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-white text-lg">autumn</span>
            </label>
          </div>
        </div>

        {/* Data Type Selection */}
        <div>
          <h3 className="text-white font-bold mb-3 text-xl uppercase">data type</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={dataTypes.includes('vegetation')}
                onChange={() => toggleDataType('vegetation')}
                className="w-4 h-4 accent-indigo-500 rounded"
              />
              <span className="text-white text-lg">vegetation</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={dataTypes.includes('climate')}
                onChange={() => toggleDataType('climate')}
                className="w-4 h-4 accent-indigo-500 rounded"
              />
              <span className="text-white text-lg">climate</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button 
            onClick={resetFilters}
            id='reset' className="flex-1 bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-950 transition"
          >
            reset filters
          </button>
          <button id='apply' className="flex-1 bg-white text-indigo-950 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            apply filters
          </button>
        </div>
        <button 
          onClick={onClose} 
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Close
        </button>
        <div id='cards'>
        <NDVICards></NDVICards>
        </div>
      </div>
    </div>
  );
};
