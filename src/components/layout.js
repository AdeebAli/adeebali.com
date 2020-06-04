import Header from './header';
import Footer from './footer';
import {Flex, useColorMode} from '@chakra-ui/core';

const Layout = ({children}) => {
	const {colorMode} = useColorMode();

	const bgColor = {
		dark: 'dark.shade',
		light: 'white'
	};

	const color = {
		dark: 'white',
		light: 'dark.shade'
	};

	return (
		<>
			<Header
				minHeight="10vh"
			/>
			<Flex
				minHeight="85vh"
				as="main"
				bg={bgColor[colorMode]}
				color={color[colorMode]}
			>
				{children}
			</Flex>
			<Footer
				minHeight="5vh"
				bg={bgColor[colorMode]}
				color={color[colorMode]}
			/>
		</>
	);
};

export default Layout;
