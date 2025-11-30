import React from 'react';
import { Menu, Home, BarChart3, TrendingUp, Settings as SettingsIcon, HelpCircle } from 'lucide-react';
import { Link } from './Router';

export const Navigation = ({ onToggleSidebar }) => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/analysis', label: 'Analysis', icon: BarChart3 },
    { path: '/prediction', label: 'Prediction', icon: TrendingUp },
    { path: '/settings', label: 'Settings', icon: SettingsIcon },
    { path: '/help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <nav className="w-full px-6 text-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10" id='nav'>
          <button 
            onClick={onToggleSidebar}
            className="text-white  hover:text-gray-300 transition" id='menu-icon'
          >
            <Menu size={50} />
          </button>
          <span className="text-white font-bold " id='vv'>VV app</span>
          <div className="flex gap-10 ml-8 mr-8" id='nav'>
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="text-white  hover:text-gray-300 transition font-bold text-lg ml-20"
                onClick = {() => {} }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};