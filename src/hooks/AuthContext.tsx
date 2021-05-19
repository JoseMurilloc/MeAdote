import { useRouter } from "next/router";
import React, { 
  createContext, 
  useCallback, 
  useEffect, 
  useState 
} from "react";
import { useContext } from "react";
import { Authentication } from "../pages/Authentication";
import { api, apiAdonis } from "../services/api";
import { 
  AuthContextData, 
  AuthState, 
  User 
} from "./types/auth";

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const isAuthenticated = !!data.user
  
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

    const response = await apiAdonis.post('/sessions', {
      email,
      password
    })

    const { token, user } = response.data;

    localStorage.setItem('@MeAdota:token', token);
    localStorage.setItem('@MeAdota:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;
    apiAdonis.defaults.headers.authorization = `Bearer ${token}`;

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

  const router = useRouter()

  return (
    <AuthContext.Provider value={{ 
      user: data.user, 
      sigIn,
      sigOut,
      updatedAvatar,
      isAuthenticated
    }}>
      {children}
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