import React from 'react';
import { ToastProvider } from './ToastContext';
import { AuthProvider } from './AuthContext';
import { ModalProvider } from './ModalContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <ModalProvider>
          { children  }
        </ModalProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default AppProvider;