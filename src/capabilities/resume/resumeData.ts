export type Role = {
	title: string;
	startDate: string;
	endDate: string;
};

export type Team = {
	roles: Role[];
	description: string[];
};

export type ExperienceItem = {
	company: string;
	startDate: string;
	endDate: string;
	teams: Team[];
};

export type Concentration = {
	degreeName: string;
	school: string;
};

export type EducationItem = {
	school: string;
	startDate: string;
	gradDate: string;
	gpa: number;
	concentrations: Concentration[];
	activities: string[];
};

export type OrganizationItem = {
	position: string;
	startDate: string;
	endDate: string;
	orgName: string;
	description: string[];
};

export type Skills = {
	languages: string[];
	frameworks: string[];
	CI: string[];
	databases: string[];
	tools: string[];
	runTimes: string[];
};

type Resume = {
	meta: {name: string};
	header: {aboutMe: string; location: string; email: string};
	sections: {
		experience: ExperienceItem[];
		education: EducationItem[];
		organizations: OrganizationItem[];
		skills: Skills;
	};
};

const resume: Resume = {
	meta: {
		name: 'Adeeb Ali',
	},
	header: {
		aboutMe: "Hey, I'm Adeeb Ali. I'm a Full Stack Web Developer with a love of all things NodeJS (Frontend & Backend), React, and NextJS. I have a plethora of experience creating enterprise grade web applications that scale for the modern web, and am passionate about shipping maintable, scalable, and elegant software quickly.",
		location: 'Los Angeles, CA',
		email: 'me@adeebali.com',
	},
	sections: {
		education: [
			{
				school: 'University of Minnesota - Twin Cities',
				startDate: '2015-09',
				gradDate: '2019-05',
				gpa: 3.50,
				concentrations: [
					{
						degreeName: 'Bachelor of Science, Computer Science',
						school: 'College of Science and Engineering',
					},
					{
						degreeName: 'Management Minor',
						school: 'Carlson School of Management',
					},
				],
				activities: [
					'Social Coding',
					'University Athletic Bands',
					'Maroon Campus Band',
					'CSE Mentorship Program',
				],
			},
		],
		experience: [
			{
				company: 'Target',
				startDate: '2021-08',
				endDate: 'Present',
				teams: [
					{
						roles: [
							{
								title: 'Senior Software Engineer',
								startDate: '2021-08',
								endDate: 'Present',
							},
						],
						description: [
							"Lead design and development of several new features spanning three epics on a ReactJS mono-repo warehouse management application",
							"Develop and maintain a proxy level kotlin backend api to support our team's primary warehouse management tool",
							'Develop and maintain microservices supporting a ReactJS application',
							'Deliver On-call Support for all relevant applications and services, triaging tickets in an average of one day or less',
							'Mentor two Associate Software Engineers through the Technology Leadership Program',
							"Act as the team's Security Ninja, responsible for maintaining security best practices in and outside of the codebase",
						],
					},
				],
			},
			{
				company: 'Optum',
				startDate: '2018-05',
				endDate: '2021-08',
				teams: [
					{
						roles: [
							{
								title: 'Software Engineer',
								startDate: '2020-08',
								endDate: '2021-08',
							},
							{
								title: 'Associate Software Engineer',
								startDate: '2019-05',
								endDate: '2020-08',
							},
						],
						description: [
							'Lead design and development of a ReactJS UI with OAuth 2.0 auth mechanisms impacting triage of 50,000 claims daily. Onboard engineers onto application and provide React tutelage',
							'Develop and maintain claim processing NodeJS APIs and microservices. Integrate robust logging, monitoring, alerting, error handling, and analytics tooling',
							'Lead instructional sessions on ReactJS, NextJS, UI analytics tools, unit testing with Jest and Ava',
							'Mentor a team of six high school Software Engineering Interns through the GenesysWorks program, pair and mentor new associate engineers',
							'Develop and maintain two inner sourced application boot projects used by Payment Integrity organization',
							'Deliver On-call Support for all relevant applications and services, triaging tickets in an average of three days or less',
						],
					},
					{
						roles: [
							{
								title: 'Technology Development Intern',
								startDate: '2018-05',
								endDate: '2018-08',
							},
						],
						description: [
							'AI/ML Technology Development Intern within the Advanced Technology Collaborative at Optum Tech',
							'Model Creation using Keras for an image classifier trained on locational data retrieved via Google APIs',
							'Construct a Graph Database infrastructure using Neo4j for relationship-based health care data',
						],
					},
				],
			},
			{
				company: 'SPS Commerce',
				startDate: '2017-05',
				endDate: '2017-08',
				teams: [
					{
						roles: [
							{
								title: 'Software Engineer Intern',
								startDate: '2017-05',
								endDate: '2017-08',
							},
						],
						description: [
							"Create Admin User Interface for proprietary Application Hosting Platform that affects 1500+ organizations using SPS's services utilizing JavaScript, AngularJS, HTML, and CSS",
							'Implement new/modify existing functionality on Central User Management System affecting all SPS users, using Python, Django, and Django Rest Framework',
						],
					},
				],
			},
		],
		organizations: [
			{
				position: 'MIS International Case Competition Team',
				startDate: '2018-10',
				endDate: '2019-05',
				orgName: 'Carlson School of Management',
				description: [
					'Specialized in technical solutions on a cross functional consulting team competing in international business case competitions.',
					'Compete at the Global Business Case Competition in Seattle, Washington in a 4 hour case and a 24 hour case.',
				],
			},
		],
		skills: {
			languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Kotlin'],
			frameworks: ['React', 'Koa', 'ExpressJS', 'NextJS', 'AngularJS', 'Jest', 'Ava'],
			CI: ['Git', 'Kubernetes', 'Jenkins', 'Docker', 'OpenShift', 'GitHub Actions'],
			databases: ['SQL', 'MongoDB'],
			tools: ['Matomo', 'Prometheus', 'Grafana', 'HashiCorp Vault'],
			runTimes: ['NodeJS'],
		},
	},
};

export default resume;
