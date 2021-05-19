import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import AppProvider from '../hooks'
import GlobalStyles from '../styles/GlobalStyles'
import HeaderUserSignIn from '../components/HeaderUserSignIn';
import { Authentication } from './Authentication';

function MyApp({ Component, pageProps }) {
  const route = useRouter()
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        { route.asPath === '/Initial' &&  (
          <HeaderUserSignIn />
        ) }

        { route.asPath === '/Authentication/SignIn'
        || route.asPath === '/Authentication/SignUp'
        || route.asPath === '/Authentication/ForgotPassword'
        ? (
          <Authentication>
            <Component {...pageProps} />    
          </Authentication>
        ) : (
          <Component {...pageProps} />
        ) 
        }
      </AppProvider>
    </>
  )
}

export default MyApp
