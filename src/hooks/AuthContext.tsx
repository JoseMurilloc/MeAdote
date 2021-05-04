import React, { createContext, useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { api } from "../services/api";

interface User {
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;

  sigIn(credentials: Credentials): Promise<void>;
  sigOut(): void;
  updatedAvatar(user: User): void;
}

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);


const AuthProvider: React.FC = ({ children }) => {
  
  const [data, setData] = useState<AuthState>({} as AuthState);
  
  useEffect(() => {
    const user = localStorage.getItem('@MeAdota:user')
    const token = localStorage.getItem('@MeAdota:token')
    
    const dataFormat = {
      user: JSON.parse(user) as User,
      token: token
    }

    setData(dataFormat)
  }, [])

  const sigIn = useCallback(async ({email, password}) => {
    // Fake 
    const user: User = {
      email,
      name: 'Murillo'
    } 

    if (password === '123456') {
      throw new Error('Error Login')
    }

    const token = Math.random().toString()

    localStorage.setItem('@MeAdota:token', token);
    localStorage.setItem('@MeAdota:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });

  }, [])


  const sigOut = useCallback(() => {

    localStorage.removeItem('@MeAdota:token');
    localStorage.removeItem('@MeAdota:user');

    setData({ } as AuthState);
  }, [])

  const updatedAvatar = useCallback(async(user: User) => {
    localStorage.setItem('@GBB:user', JSON.stringify(user));

    setData({
      token: data.token,
      user,
    })
  }, [setData, data.token])

  return (
    <AuthContext.Provider value={{ 
      user: data.user, 
      sigIn, 
      sigOut, 
      updatedAvatar
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {  
    throw new Error('useAuth must be used within a Authentication')
  }

  return context;
}

export { AuthProvider, useAuth }