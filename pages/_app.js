import '../src/styles.css';
import { useEffect } from 'react';
import CookieConsent from '../src/components/CookieConsent';

function MyApp({ Component, pageProps }) {
  // Handle client-side only features
  useEffect(() => {
    // Any client-side initialization can go here
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default MyApp;
