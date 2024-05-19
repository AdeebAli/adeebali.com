import NextLink from 'next/link';
import {IconButton, useColorMode, Flex, Box, useOutsideClick, Stack, Text, Link} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {MdMenu, MdClose} from 'react-icons/md';
import {useRef, useState} from 'react';
import {useMotionValueEvent, useScroll} from 'framer-motion';

const Header = props => {
	const {colorMode, toggleColorMode} = useColorMode();
	const ref = useRef();
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);
	const [scrollPosition, setScrollPosition] = useState(0);
	const {scrollY} = useScroll();
	useOutsideClick({
		ref,
		handler: () => setShow(false),
	});

	useMotionValueEvent(scrollY, 'change', latest => {
		setShow(false);
		setScrollPosition(latest);
	});

	return (
		<Flex
			ref={ref}
			as='nav'
			transitionDuration='0.4s'
			width='100%'
			padding={scrollPosition > 80 ? 4 : 8}
			bgGradient='linear(to-r, dark.shade, brand)'
			color='white'
			justify='space-between'
			align='center'
			position='fixed'
			marginBottom={8}
			wrap='wrap'
			top={0}
			zIndex={100}
			{...props}
		>

			<Link size={'md'} fontSize={20} fontWeight='bold' as={NextLink} href='/'>
						Adeeb Ali
			</Link>

			<Box
				display={{base: 'block', md: 'none'}}
				onClick={handleToggle}
			>
				{show ? <MdClose /> : <MdMenu />}
			</Box>
			<Box
				display={{base: show ? 'block' : 'none', md: 'block'}}
				flexBasis={{base: '100%', md: 'auto'}}
			>
				<Stack
					className='navItems'
					align='center'
					spacing={8}
					justify={['center', 'space-between', 'flex-end', 'flex-end']}
					direction={['column', 'row', 'row', 'row']}
					fontSize={17}
					pt={[4, 4, 0, 0]}
				>
					<Link as={NextLink} href='/'>
						<Text display='block'>Home</Text>
					</Link>
					<Link as={NextLink} href='/resume'>
						<Text display='block'>Resume</Text>
					</Link>
					<IconButton
						colorScheme='purple'
						display='block'
						aria-label='Change color mode'
						size='md' icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
						onClick={toggleColorMode}
					/>

				</Stack>
			</Box>
		</Flex>
	);
};

export default Header;
