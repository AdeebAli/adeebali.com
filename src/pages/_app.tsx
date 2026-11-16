import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "../components/ui/provider";
import Layout from "../components/layout";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>
);

export default App;
