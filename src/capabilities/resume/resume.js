import {Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, ListItem, Stack, StackDivider, Tag, Text, UnorderedList, useColorMode} from '@chakra-ui/react';
import Image from 'next/image';
import {DateTime} from 'luxon';
import {AiOutlineDownload} from 'react-icons/ai';
import targetLogo from '../../../public/images/targetlogo.svg';
import optumLogo from '../../../public/images/optumlogo.svg';
import spsLogo from '../../../public/images/spslogo.svg';
import umnLogo from '../../../public/images/umnlogo.svg';
import {formatDurationYearsMonths, formattedDateStringMonthAndYear, formattedEndDateString} from '../../util/datetime';
import resumeJson from './resume.json';

const imageMap = {
	Target: targetLogo,
	Optum: optumLogo,
	'SPS Commerce': spsLogo,
	'University of Minnesota - Twin Cities': umnLogo,
	'Carlson School of Management': umnLogo,
};

const Divider = props => {
	const {colorMode, lightColor, darkColor, ...otherProps} = props;
	return (<StackDivider borderColor={props.colorMode === 'light' ? (lightColor || 'blackAlpha.400') : (darkColor || 'whiteAlpha.400')} {...otherProps} />);
};

const SkillsCard = ({skillItems}) => {
	const {languages, frameworks, CI, databases, tools, runTimes} = skillItems;
	return (
		<Card>
			<CardHeader>
				<Heading paddingBottom={0} size='lg'>
				Skills
				</Heading>
			</CardHeader>
			<CardBody>
				<Stack direction='column' spacing={2}>
					<Box>
						<Heading marginBottom={2} size='md'>Languages</Heading>
						{languages.map((language, index) => (<Tag marginRight={2} marginBottom={2} key={index} size='md' colorScheme='red' borderRadius='full'>{language}</Tag>))}
					</Box>
					<Box>
						<Heading marginBottom={2} size='md'>Frameworks</Heading>
						{frameworks.map((framework, index) => (<Tag marginRight={2} marginBottom={2} key={index} size='md' colorScheme='orange' borderRadius='full'>{framework}</Tag>))}
					</Box>
					<Box>
						<Heading marginBottom={2} size='md'>Continuous Integration</Heading>
						{CI.map((ciItem, index) => (<Tag marginRight={2} marginBottom={2} key={index} size='md' colorScheme='blue' borderRadius='full'>{ciItem}</Tag>))}
					</Box>
					<Box>
						<Heading marginBottom={2} size='md'>Databases</Heading>
						{databases.map((database, index) => (<Tag marginRight={2} marginBottom={2} key={index} size='md' colorScheme='green' borderRadius='full'>{database}</Tag>))}

					</Box>
					<Box>
						<Heading marginBottom={2} size='md'>Tools</Heading>
						{tools.map((tool, index) => (<Tag marginRight={2} marginBottom={2} key={index} size='md' colorScheme='cyan' borderRadius='full'>{tool}</Tag>))}
					</Box>
					<Box>
						<Heading marginBottom={2} size='md'>Runtimes</Heading>
						{runTimes.map((runTime, index) => (<Tag marginRight={2} marginBottom={2} key={index} size='md' colorScheme='pink' borderRadius='full'>{runTime}</Tag>))}
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

const OrganizationCard = ({organizationItems}) => {
	const {colorMode} = useColorMode();
	return (
		<Card>
			<CardHeader>
				<Heading size='lg'>
				Organizations
				</Heading>
			</CardHeader>
			<CardBody>
				<Stack direction='column' spacing={8} divider={<Divider alignSelf='center' width='90%' colorMode={colorMode} />}>
					{organizationItems.map((organizationItem, index) => {
						const {position, startDate, endDate, orgName, description} = organizationItem;

						return (
							<Box key={index}>
								<Stack direction='row' spacing={4}>
									<Box boxSize={{base: '36', md: '60px'}}>
										<Image src={imageMap[orgName]} alt={`${orgName} logo`}/>
									</Box>
									<Stack direction='column' spacing={4}>
										<Stack direction='column' spacing={2}>
											<Heading size='md'>{orgName}</Heading>
											<Stack direction='row'>
												<Text fontSize={14}>{position} •</Text>
												<Text fontSize={14} color={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'}>{formattedDateStringMonthAndYear(startDate)} - {formattedEndDateString(endDate)}</Text>
											</Stack>
											<Stack direction='column' spacing={0}>
												<UnorderedList>
													{description.map((bulletPoint, index) => (
														<ListItem fontSize={14} key={index}>
															{bulletPoint}
														</ListItem>
													))}
												</UnorderedList>
											</Stack>
										</Stack>
									</Stack>
								</Stack>
							</Box>
						);
					})}
				</Stack>
			</CardBody>
		</Card>
	);
};

const EducationCard = ({educationItems}) => {
	const {colorMode} = useColorMode();
	return (
		<Card>
			<CardHeader>
				<Heading size='lg'>
					Education
				</Heading>
			</CardHeader>
			<CardBody>
				<Stack direction='column' spacing={8} divider={<Divider alignSelf='center' width='90%' colorMode={colorMode}/>}>
					{educationItems.map((education, index) => {
						const {school, startDate, gradDate, gpa, concentrations, activities} = education;
						return (
							<Box key={index}>
								<Stack direction='row' spacing={4}>
									<Box boxSize={{base: '24', md: '60px'}}>
										<Image src={imageMap[school]} alt={`${school} logo`} />
									</Box>
									<Stack direction='column' spacing={4}>
										<Stack direction='column' spacing={2}>
											<Heading size='md'>{school}</Heading>
											<Text color={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'} fontSize={14}>{DateTime.fromISO(startDate).toFormat('y') } - {DateTime.fromISO(gradDate).toFormat('y')}</Text>
											<Stack direction='column' spacing={0}>
												{concentrations.map((concentration, index) => {
													const {degreeName, school} = concentration;
													return (<Text fontSize={14} key={index}>{degreeName} - {school}</Text>);
												})}
											</Stack>
											<Text fontWeight={'bold'} fontSize={14}>GPA: {gpa}</Text>
											<Stack paddingTop={4} direction='column'>
												<Heading size='xs'>
													Activities
												</Heading>
												<Stack direction='column' spacing={0}>
													<UnorderedList>
														{activities.map((activity, index) => (
															<ListItem fontSize={14} key={index}>
																{activity}
															</ListItem>
														))}
													</UnorderedList>
												</Stack>
											</Stack>
										</Stack>
									</Stack>
								</Stack>
							</Box>
						);
					})}
				</Stack>
			</CardBody>
		</Card>
	);
};

const ExperienceCard = ({experienceItems}) => {
	const {colorMode} = useColorMode();
	return (
		<Card>
			<CardHeader>
				<Heading size='lg' paddingBottom={6}>Experience</Heading>
				<CardBody>
					<Stack direction='column' spacing={8} divider={<Divider alignSelf='center' width='90%' colorMode={colorMode} />}>
						{experienceItems.map((experience, index) => {
							const {company, startDate, endDate, teams} = experience;
							return (
								<Box key={index}>
									<Stack direction='row' spacing={4}>
										<Box boxSize={{base: '48', md: '60px'}}>
											<Image
												src={imageMap[company]}
												alt={`${company} logo`}
											/>
										</Box>
										<Stack direction='column' spacing={4}>
											<Stack direction='column' spacing={0}>
												<Heading size='md'>{company}</Heading>
												<Text fontSize={14}>{formattedDateStringMonthAndYear(startDate)} - {formattedEndDateString(endDate)} • {formatDurationYearsMonths(startDate, endDate)}</Text>
											</Stack>
											{ teams.map((team, index) => {
												const {roles, description} = team;
												return (
													<Box key={index}>
														<Stack direction='column' spacing={2}>
															{roles.map((role, index) => {
																const {title, startDate, endDate} = role;

																return (
																	<Stack direction='column' key={index}>
																		<Heading size='sm'>{title}</Heading>
																		<Text color={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'} fontSize={14}>{formattedDateStringMonthAndYear(startDate)} - {formattedEndDateString(endDate)}</Text>
																	</Stack>
																);
															})}
															<Stack direction='column' spacing={0}>
																<UnorderedList>
																	{description.map((bulletPoint, index) => (
																		<ListItem fontSize={14} key={index}>
																			{bulletPoint}
																		</ListItem>
																	))}
																</UnorderedList>
															</Stack>
														</Stack>
													</Box>
												);
											})}
										</Stack>
									</Stack>
								</Box>
							);
						})}
					</Stack>
				</CardBody>
			</CardHeader>
		</Card>
	);
};

const ResumeCard = () => {
	const {colorMode} = useColorMode();
	const {experience, education, organizations, skills} = resumeJson.sections;

	return (
		<Card
			background={colorMode === 'light' ? 'light.shade' : 'dark.shade'}
			paddingTop={5}
			alignSelf='center'
		>
			<Stack direction={['column']} spacing={8}>
				<CardHeader align='center'>
					<Heading size={['2xl']}>Adeeb Ali</Heading>
					<Center>
						<Stack mt={6} divider={<Divider colorMode={colorMode}/>} direction={['column', 'row']} spacing={4}>
							<Box>
								{resumeJson.header.location}
							</Box>
							<Box>
								{resumeJson.header.email}
							</Box>
						</Stack>
					</Center>
					<Text marginTop={8} maxWidth={'80%'}>{resumeJson.header.aboutMe}</Text>
				</CardHeader>
				<CardBody
					paddingX={{base: 0, md: '20px'}}
					paddingTop={0}
				>
					<Stack direction='column' spacing={2}>
						<ExperienceCard experienceItems={experience} />
						<EducationCard educationItems={education} />
						<SkillsCard skillItems={skills} />
						<OrganizationCard organizationItems={organizations} />
					</Stack>
				</CardBody>
			</Stack>
		</Card>
	);
};

const Resume = () => (
	<Flex
		mt={8}
		width='100%'
		flexDirection={'column'}
		alignItems='center'
	>
		<Box width={{base: '100%', md: '85%'}}>
			<Box align='right' marginBottom={4}>
				<Button as='a' href='documents/Adeeb.Ali-resume.pdf' download={'adeeb-ali-resume.pdf'} leftIcon={<AiOutlineDownload />} variant='solid' colorScheme='green'>Download My Resume!</Button>
			</Box>
			<ResumeCard />
		</Box>
	</Flex>

);

export default Resume;
