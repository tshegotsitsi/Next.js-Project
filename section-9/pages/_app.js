import Head from 'next/head'; // Import Head component
import Layout from '../components/layout/Layout'; // Import your Layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout> {/* Wrap your content with the Layout component */}
      <Head>
        <title>Next Events</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} /> {/* Pass pageProps to your page component */}
    </Layout>
  );
}

export default MyApp;
