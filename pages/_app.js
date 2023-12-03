import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';
import '../styles/home.css';
import '../styles/header.css';
import '../styles/footer.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;