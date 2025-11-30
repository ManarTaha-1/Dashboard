
import React, { useState, useEffect } from 'react';

export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return React.Children.map(children, child => {
    if (child.props.path === currentPath) {
      return child;
    }
    return null;
  });
};

export const Route = ({ children }) => children;

export const Link = ({ to, children, className }) => (
  <a 
    href={`#${to}`} 
    className={className}
    onClick={(e) => {
      e.preventDefault();
      window.location.hash = to;
    }}
  >
    {children}
  </a>
);