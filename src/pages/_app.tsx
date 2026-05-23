import Head from 'next/head';
import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../components/theme';
import Layout from '../components/layout';

const App = ({Component, pageProps}: AppProps) => (
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

export default App;
