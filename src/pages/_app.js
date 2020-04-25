// Import App from 'next/app'
import {CSSReset, ThemeProvider, ColorModeProvider} from '@chakra-ui/core';
import customTheme from '../components/theme';
import Layout from '../components/layout';

const App = ({Component, pageProps}) => {
	return (
		<ThemeProvider theme={customTheme}>
			<CSSReset/>
			<ColorModeProvider>
				<Layout>
					<Component {...pageProps}/>
				</Layout>
			</ColorModeProvider>
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

