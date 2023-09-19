import Head from "next/head"; // Import Head component
import Layout from "../components/layout/Layout"; // Import your Layout component
import "../styles/globals.css";
import Notification from "../components/ui/notification";
import { NotificationContextProvide } from '../store/notification-context'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvide>
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} /> {/* Pass pageProps to your page component */}
      <Notification title="Test" message="This is a test." status="pending" />
    </Layout>
    </NotificationContextProvide>
  );
}

export default MyApp;
