import { useRouter } from "next/router";
import React, { 
  createContext, 
  useCallback, 
  useEffect, 
  useState 
} from "react";
import { useContext } from "react";
import api from "../services/api";
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import Router from 'next/router';

import { 
  AuthContextData, 
  Credentials, 
  KEY_TOKEN, 
  User 
} from "./types/auth";

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function signOut() {
  destroyCookie(undefined, KEY_TOKEN)
  Router.push('/')
}


const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = verifyIsAuthenticatedUser()
  
  useEffect(() => {
    const { '@meadote.token': token } = parseCookies()

    if (token) {
      api.get('me')
        .then(response => {
          const { email, name } = response.data
          setUser({
            email,
            name
          })
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  function verifyIsAuthenticatedUser(): boolean {
    return Object.keys(user).length === 0 ? false : true
  }

  async function signIn({email, password}: Credentials) {
    
    try { 
      const response = await api.post('/sessions', { 
        email,
        password
      })

      const { token, user } = response.data

      setCookie(undefined, KEY_TOKEN ,token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser({
        email: user.email,
        name: user.name
      })

      Router.push('/initial')
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      signIn,
      signOut,
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