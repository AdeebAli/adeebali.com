// Import App from 'next/app'
import Head from 'next/head';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../components/theme';
import Layout from '../components/layout';

const App = ({Component, pageProps}) => (
	<>
		<Head>
			<meta charSet='utf-8'/>
			<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
		</Head>
		<ChakraProvider theme={theme} resetCSS={true}>
			<Layout>
				<Component {...pageProps}/>
			</Layout>
		</ChakraProvider>
	</>

);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;

