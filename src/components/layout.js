import {Box, Flex, useColorMode} from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
	const {colorMode} = useColorMode();

	const bgColor = {
		dark: 'black',
		light: 'white',
	};

	const color = {
		dark: 'white',
		light: 'black',
	};

	return (
		<Box display='flex' flexDirection='column' minHeight='100vh'>
			<Header/>
			<Flex
				as='main'
				flex={1}
				marginTop={'94px'}
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				paddingBottom={{base: 4, md: 8}}
			>
				{children}
			</Flex>
			<Footer/>
		</Box>
	);
};

export default Layout;
