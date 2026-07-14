import '../styles/main.css';
import '../styles/home.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/about.css';
import '../styles/blog.css';
import '../styles/contact-form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return(
    <>
      <Head>
        <link rel='logo' href='/favicon.ico'/>
        <title>OAH Architecture</title>
      </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp;