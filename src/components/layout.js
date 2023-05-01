import {Flex, useColorMode} from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
	const {colorMode} = useColorMode();

	const bgColor = {
		dark: 'dark.shade',
		light: 'white',
	};

	const color = {
		dark: 'white',
		light: 'dark.shade',
	};

	return (
		<>
			<Header
				minHeight='10vh'
			/>
			<Flex
				minHeight='85vh'
				as='main'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
			>
				{children}
			</Flex>
			<Footer
				// Pt={9}
				minHeight='5vh'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
			/>
		</>
	);
};

export default Layout;
