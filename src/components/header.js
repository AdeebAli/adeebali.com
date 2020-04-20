import NextLink from 'next/link';
import {Link, Button, useColorMode, Flex} from '@chakra-ui/core';

const Header = () => {
	const {colorMode, toggleColorMode} = useColorMode();
	const bgColor = {light: 'red.500', dark: 'red.200'};
	const color = {light: 'white', dark: 'gray.800'};
	return (
		<Flex as="nav">
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
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>
		</Flex>
	);
};

export default Header;
