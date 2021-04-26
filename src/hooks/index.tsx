import React from 'react';
import { ScrollProvider } from './ScrollContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ScrollProvider>
      { children  }
    </ScrollProvider>
  );
}

export default AppProvider;