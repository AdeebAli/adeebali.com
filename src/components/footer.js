import {Flex, Box, Link, useColorMode} from '@chakra-ui/react';
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai';

const Footer = props => {
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

		<Flex
			className='footer'
			align='center'
			flexDirection='column'
			height='4rem'
			width='100%'
			marginTop='auto'
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			{...props}
		>
			<Flex
				className='iconContainer'
				flexDirection='row'
			>
				<Link href='https://www.linkedin.com/in/adeeb-ali-b34515134' mr={1}>
					<Box as={AiOutlineLinkedin} boxSize={{base: '26px ', sm: '32px'}}/>
				</Link>
				<Link href='https://github.com/AdeebAli' mr={1}>
					<Box as={AiOutlineGithub} boxSize={{base: '26px ', sm: '32px'}}/>
				</Link>
				<Link href='mailto:me@adeebali.com'>
					<Box as={AiOutlineMail} boxSize={{base: '26px ', sm: '32px'}}/>
				</Link>
			</Flex>
			<Flex
				className='copyright'
				color='grey.200'
				mt={1}
				fontSize={12}
			>
				© {new Date().getFullYear()} Adeeb Ali.
			</Flex>
		</Flex>
	);
};

export default Footer;
