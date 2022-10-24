import GlobalStyles from '../styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import ProgressBar from 'react-scroll-progress-bar';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProgressBar />
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer position='top-center' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover />
    </>
  );
}

export default MyApp;
