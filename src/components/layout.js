import Header from './header';
import {Flex, useColorMode} from '@chakra-ui/core';

const Layout = ({children}) => {
	const {colorMode} = useColorMode();

	const bgColor = {
		dark: 'dark.shade',
		light: 'light.shade'
	};

	const color = {
		dark: 'light.shade',
		light: 'dark.shade'
	};

	return (
		<>
			<Header/>
			<Flex
				as="main"
				bg={bgColor[colorMode]}
				color={color[colorMode]}
			>
				{children}
			</Flex>
		</>
	);
};

export default Layout;
