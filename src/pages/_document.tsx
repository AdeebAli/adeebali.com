import {ColorModeScript} from '@chakra-ui/react';
import Document, {Html, Head, Main, NextScript, type DocumentContext, type DocumentInitialProps} from 'next/document';
import theme from '../components/theme';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' href='/favicon.ico'/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
