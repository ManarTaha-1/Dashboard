import React from 'react';
import { HelpCircle } from 'lucide-react';

export const Help = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-950 to-cyan-950">
      <div className="text-center">
        <HelpCircle size={64} className="mx-auto mb-4 text-blue-400" />
        <h2 className="text-3xl font-bold text-white mb-2">Help</h2>
        <p className="text-gray-400">Documentation and support</p>
      </div>
    </div>
  );
};