import Head from 'next/head';
import {Flex, Box, Divider, Heading, Text, useColorMode} from '@chakra-ui/react';
import Image from 'next/image';
import profilePicture from '../../public/images/me.jpg';

const BodyText = ({children}) => (
	<Text
		mt={8}
		as='p'
		textAlign='center'
		maxWidth={{base: '80%', md: 750}}
		fontSize={{base: 16, sm: 14, md: 20}}>
		{children}
	</Text>
);

const Index = () => {
	const {colorMode} = useColorMode();
	return (
		<>
			<Head>
				<title>Adeeb Ali</title>
			</Head>

			<Flex
				mt={{base: 6, md: 12}}
				width='100%'
				flexDirection='column'
				align='center'
				alignContent='center'
			>
				<Box
					boxSize={{base: '180px', sm: '150px', md: '170px', lg: '300px'}}
					borderRadius='100%'
					overflow='hidden'
				>

					<Image
						src={profilePicture}
						alt='Adeeb Ali'
						placeholder='blur'
					/>

				</Box>

				<Heading
					as='h1'
					mt={{base: 4, md: 10}}
					fontSize={{base: 26, md: 38}}
				>
					Hey, I&apos;m Adeeb! 👋
				</Heading>
				<Divider
					borderColor={colorMode === 'light' ? 'dark.accent' : 'light.accent'}
					mt={5}
					width={{base: '200px', md: '250px'}}
				/>
				<BodyText
				>
					I&apos;m a Senior Software Engineer currently working at Target. I graduated from the University of Minnesota, Twin Cities in 2019 with a Bachelor of Science in Computer Science, and a Management Minor from the Carlson School of Management.
					I&apos;m passionate about all things JavaScript and Node.js, and am always working to be a better developer every day.
				</BodyText>
				<BodyText

				>
					When I&apos;m not writing code at work, you can find me tinkering- whether that&apos;s on my Raspberry Pi, my 3D Printer, or working on a personal project.
				</BodyText>
				<BodyText>
				Outside of my tech related hobbies, I love checking out new coffee shops on the weekends, supporting my Minnesota Timberwolves, and going to the gym.
				</BodyText>
				<BodyText>
					This site is a place for me to show off my personal projects, share pictures, and document my thoughts on development topics and other stuff along the way!
				</BodyText>
			</Flex>
		</>
	);
};

export default Index;
