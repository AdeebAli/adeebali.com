import Link from 'next/link';
import {Heading, IconButton, useColorMode, Flex, Box} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {MdMenu, MdClose} from 'react-icons/md';
import {useState} from 'react';

const Header = props => {
	const {colorMode, toggleColorMode} = useColorMode();
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<Flex
			as='nav'
			padding='1.5rem'
			bg='brand'
			color='white'
			justify='space-between'
			wrap='wrap'
			align='center'
			{...props}
		>
			<Heading
				as='h1'
				ml='5'
				size='md'
				fontSize={20}
			>
				<Link passHref href='/'>
					<Box fontWeight='bold'>
						Adeeb Ali
					</Box>
				</Link>
			</Heading>

			<Box
				display={{base: 'block', md: 'none'}}
				onClick={handleToggle}
			>
				<Box as={show ? MdClose : MdMenu}/>
			</Box>
			<Flex
				className='navItems'
				alignItems='center'
				textAlign='center'
				fontSize={17}
				display={{base: show ? 'block' : 'none', md: 'flex'}}
				width={{base: 'full', md: 'auto'}}
				ml={{base: 6}}
			>
				<Link passHref href='/'>
					<Box mt={{base: 3, md: 0}} mr={6} display='block'>Home</Box>
				</Link>
				<Link passHref href='/about'>
					<Box mt={{base: 3, md: 0}} mr={6} display='block'>About</Box>
				</Link>
				<Link passHref href='/resume'>
					<Box mt={{base: 3, md: 0}} mr={6} display='block'>Resume</Box>
				</Link>
				<Link passHref href='/blog'>
					<Box mt={{base: 3, md: 0}} mr={6} display='block'>Blog</Box>
				</Link>
				<Link passHref href='/portfolio'>
					<Box mt={{base: 3, md: 0}} mr={6} display='block'>Portfolio</Box>
				</Link>
				<Link passHref href='/contact'>
					<Box mt={{base: 3, md: 0}} mr={6} display='block'>Contact</Box>
				</Link>

				<Box
					display={{base: show ? 'block' : 'none', md: 'block'}}
					mt={{base: 3, md: 0}}

				>
					<IconButton
						colorScheme='purple'
						mr={5}
						aria-label='Change color mode'
						size='md' icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
						onClick={toggleColorMode}
					/>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Header;
