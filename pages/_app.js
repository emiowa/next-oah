import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';
import '../styles/home.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/about.css';
import '../styles/blog.css';
import '../styles/contact-form.css';
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return(
    <>
      <ErrorBoundary fallback={<div>Something went wrong...</div>}>
        <Head>
          <Link rel='logo' href='/favicon.ico'/>
          <title>OAH Architecture</title>
        </Head>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}

export default MyApp;