import NextLink from 'next/link';
import {Link, Box, Button, useColorMode, Flex} from '@chakra-ui/core';

const Header = props => {
	const {colorMode, toggleColorMode} = useColorMode();
	return (
		<Flex
			as="nav"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			bg="brand"
			color="white"
			padding="3em"
			width="100%"
			{...props}
		>
			<Box className="links" mr="1em">
				<NextLink passHref href="/">
					<Link fontWeight="600" px="1em">Home</Link>
				</NextLink>
				<NextLink passHref href="/about">
					<Link fontWeight="600" px="1em">About</Link>
				</NextLink>
				<NextLink passHref href="/resume">
					<Link fontWeight="600" px="1em">Resume</Link>
				</NextLink>
				<NextLink passHref href="/blog">
					<Link fontWeight="600" px="1em">Blog</Link>
				</NextLink>
				<NextLink passHref href="/portfolio">
					<Link fontWeight="600" px="1em">Portfolio</Link>
				</NextLink>
				<NextLink passHref href="/contact">
					<Link fontWeight="600" px="1em">Contact</Link>
				</NextLink>
			</Box>
			<Flex flexDirection="row">
				<Button variantColor="purple" onClick={toggleColorMode}>
					Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
				</Button>
			</Flex>

		</Flex>
	);
};

export default Header;
