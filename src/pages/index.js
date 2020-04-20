import Head from 'next/head';

import Header from '../components/header';
// Add about me info here.
const Index = () => {
	return (
		<>
			<Head>
				<title>Adeeb Ali</title>
			</Head>

			<div>
				<Header/>
				Adeeb&apos;s website written in NextJS.

			</div>
		</>
	);
};

export default Index;
