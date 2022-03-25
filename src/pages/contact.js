import Head from 'next/head';
import {Flex} from '@chakra-ui/react';

const Contact = () => (
	<>
		<Head>
			<title>
				Contact Me
			</title>
		</Head>

		<Flex
			align="left"
		>
			Email
		</Flex>
		<Flex
			align="center"
		>
			LinkedIn
		</Flex>
		<Flex
			align="right"
		>
			GitHub
		</Flex>
	</>
);

export default Contact;
