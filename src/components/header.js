import Link from 'next/link';
import {Heading, IconButton, useColorMode, Flex, Box, useOutsideClick} from '@chakra-ui/react';
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
			as='nav'
			padding={scrollPosition > 80 ? '2em' : '2.5em'}
			transitionDuration='0.4s'
			minHeight={scrollPosition > 80 ? '6em' : '7em'}
			width='100%'
			bgGradient='linear(to-r, dark.shade, brand)'
			color='white'
			justify='space-between'
			align={{base: 'center', md: 'center'}}
			position='fixed'
			flexWrap='wrap'
			shadow={show ? '2' : null
			}
			top={0}
			zIndex={99}
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
				flexDir={{base: 'column', md: 'row'}}
				width={{base: 'full', md: 'auto'}}
				ml={{base: 6}}
			>
				<Link passHref href='/'>
					<Box mt={{base: 3, md: 0}} mr={6}>Home</Box>
				</Link>
				<Link passHref href='/resume'>
					<Box mt={{base: 3, md: 0}} mr={6}>Resume</Box>
				</Link>
				<Box
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
