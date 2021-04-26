import AppProvider from '../hooks'
import GlobalStyles from '../styles/GlobalStyles'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
