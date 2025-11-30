import React, { useState } from 'react';
import { Sidebar } from './pages/SideBar'
import { Route, Router } from './components/Router';
import { Dashboard } from './pages/dashboard';
import { Navigation } from './components/Navigation';
import { Analysis } from './pages/Analysis';
import { Prediction } from './pages/Prediction';
import { SettingsPage } from './pages/Settings';
import { Help } from './pages/Help';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen text-white overflow-hidden w-full">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col">
        <Navigation onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Router>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/prediction">
            <Prediction />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Router>
      </div>
    </div>
  );
};

export default App;
