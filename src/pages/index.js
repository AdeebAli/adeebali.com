// Import {useState} from 'react';
import Head from 'next/head';
import {Flex, Box, Divider, Heading, Text, useColorMode} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../components/index.module.css';
import profilePicture from '../../public/images/adeeb.jpg';

const Index = () => {
	const {colorMode} = useColorMode();
	return (
		<>
			<Head>
				<title>Adeeb Ali</title>
			</Head>

			<Flex
				mt={8}
				width="100%"
				className="indexPageContent"
				flexDirection="column"
				align="center"
				alignContent="center"
			>
				<Box
					boxSize={{base: '180px', sm: '200px', md: '220px', lg: '300px'}}
					borderRadius="100%"
					overflow="hidden"
				>

					<Image
						src={profilePicture}
						alt="Adeeb Ali"
						layout="responsive"
						placeholder="blur"
						className={styles.profilePicture}
					/>

				</Box>

				<Heading
					as="h1"
					mt={10}
					fontSize={{base: 28, md: 36}}
				>
					Hey, I&apos;m Adeeb! 👋
				</Heading>
				<Divider
					borderColor={colorMode === 'light' ? 'dark.accent' : 'light.accent'}
					mt={5}
					width={{base: '200px', md: '250px'}}
				/>
				<Text
					mt={5}
					as="p"
					textAlign="center"
					maxWidth={{base: '80%', md: 750}}
					fontSize={{base: 16, sm: 18, md: 20}}
				>
					I&apos;m a Senior Software Engineer currently working at Target. I graduated from the University of Minnesota, Twin Cities in 2019 with a Bachelor of Science in Computer Science, and a Management Minor from the Carlson School of Management.
					I&apos;m passionate about all things JavaScript and Node.js, and am always working to be a better developer every day.
				</Text>
				<Text
					mt={5}
					as="p"
					textAlign="center"
					maxWidth={{base: '80%', md: 750}}
					fontSize={{base: 16, sm: 18, md: 20}}
				>
					When I&apos;m not writing code at work, you can find me happily plugging away writing code at home, exploring Minneapolis, at the Target Center watching the Timberwolves, or at the gym.
				</Text>
				<Text
					mt={5}
					as="p"
					textAlign="center"
					maxWidth={{base: '80%', md: 750}}
					fontSize={{base: 16, sm: 18, md: 20}}
				>
					This site is a place for me to show off my personal projects, share pictures, and document my thoughts on development topics and other stuff along the way!
				</Text>
			</Flex>
		</>
	);
};

export default Index;
