// Import App from 'next/app'
import {CSSReset, ThemeProvider} from '@chakra-ui/core';

const App = ({Component, pageProps}) => {
	return (
		<ThemeProvider>
			<CSSReset/>
			<Component {...pageProps}/>
		</ThemeProvider>
	);
};

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

