import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/assets/favicon/site.webmanifest' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
