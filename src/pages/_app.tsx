import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import AppProvider from '../hooks'
import GlobalStyles from '../styles/GlobalStyles'
import HeaderUserSignIn from '../components/HeaderUserSignIn';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const route = useRouter()
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        { route.asPath === '/Home' &&  (
          <HeaderUserSignIn />
        ) }
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
