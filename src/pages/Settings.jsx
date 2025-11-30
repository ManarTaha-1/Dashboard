import React from 'react';
import { Settings } from 'lucide-react';

export const SettingsPage = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-950 to-indigo-950">
      <div className="text-center">
        <Settings size={64} className="mx-auto mb-4 text-slate-400" />
        <h2 className="text-5xl font-bold text-white mb-2">Settings</h2>
        <p className="text-gray-400">Configure your preferences</p>
      </div>
    </div>
  );
};
