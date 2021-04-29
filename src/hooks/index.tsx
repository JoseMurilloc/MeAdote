import React from 'react';
import { ScrollProvider } from './ScrollContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ScrollProvider>
      <ToastProvider>
        { children  }
      </ToastProvider>
    </ScrollProvider>
  );
}

export default AppProvider;