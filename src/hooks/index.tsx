import React from 'react';
import { ScrollProvider } from './ScrollContext';
import { ToastProvider } from './ToastContext';
import { AuthProvider } from './AuthContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ScrollProvider>
      <ToastProvider>
        <AuthProvider>
          { children  }
        </AuthProvider>
      </ToastProvider>
    </ScrollProvider>
  );
}

export default AppProvider;