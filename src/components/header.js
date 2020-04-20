import NextLink from 'next/link';
import {Link, Box, Button, useColorMode, Flex} from '@chakra-ui/core';

const Header = props => {
	const {colorMode, toggleColorMode} = useColorMode();
	const bgColor = {light: 'light.shade', dark: 'dark.shade'};
	const color = {light: 'dark.shade', dark: 'light.shade'};
	return (
		<Flex
			as="nav"
			align="center"
			bg="brand"
			color="white"
			padding="1.5em"
			{...props}
		>
			<Box mr="1em">
				<NextLink passHref href="/">
					<Link>Home</Link>
				</NextLink>
				<NextLink passHref href="/about">
					<Link>About</Link>
				</NextLink>
				<NextLink passHref href="/resume">
					<Link>Resume</Link>
				</NextLink>
				<NextLink passHref href="/blog">
					<Link>Blog</Link>
				</NextLink>
				<NextLink passHref href="/portfolio">
					<Link>Portfolio</Link>
				</NextLink>
				<NextLink passHref href="/contact">
					<Link>Contact</Link>
				</NextLink>
			</Box>
			<Box align="right">
				<Button variantColor="purple" onClick={toggleColorMode}>
					Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
				</Button>
			</Box>

		</Flex>
	);
};

export default Header;
