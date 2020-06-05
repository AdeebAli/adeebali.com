import {Flex, Box, Link} from '@chakra-ui/core';
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai';
const Footer = props => {
	return (
		<Flex
			className="footer"
			flexDirection="column"
			align="center"
			alignContent="center"
			verticalAlign="center"
			padding={{base: 5, md: 0}}
			{...props}
		>
			<Flex
				className="iconContainer"
				flexDirection="row"
			>
				<Link href="https://www.linkedin.com/in/adeeb-ali-b34515134" mr={1}>
					<Box as={AiOutlineLinkedin} size={{base: '26px ', sm: '32px'}}/>
				</Link>
				<Link href="https://github.com/AdeebAli" mr={1}>
					<Box as={AiOutlineGithub} size={{base: '26px ', sm: '32px'}}/>
				</Link>
				<Link href="mailto:me@adeebali.com">
					<Box as={AiOutlineMail} size={{base: '26px ', sm: '32px'}}/>
				</Link>
			</Flex>
			<Flex
				className="copyright"
				color="grey.200"
				mt={1}
				fontSize={12}
			>
				© {new Date().getFullYear()} Adeeb Ali.
			</Flex>
		</Flex>
	);
};

export default Footer;
