import GlobalStyles from '../styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import ProgressBar from 'react-scroll-progress-bar';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) document.body.classList.add('loaded');
  }, [loaded]);
  return (
    <>
      <div className='front'>
        <ProgressBar />
      </div>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer position='top-center' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover />
    </>
  );
}

export default MyApp;
