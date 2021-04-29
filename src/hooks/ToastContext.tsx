import React, { useContext } from 'react';
import { createContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface ToastContextData {
  success: (message: string) => React.ReactText
}

const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
)

const ToastProvider: React.FC = ({children}) => {
  const success = (message: string) => toast
    .success(message);


  return (
    <ToastContext.Provider value={{success}}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  )
}

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {  
    throw new Error('useAuth must be used within a Authentication')
  }

  return context
}

export { useToast, ToastProvider }