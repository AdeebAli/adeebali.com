import {Heading} from '@chakra-ui/react';

const UnderConstruction = (props: React.HTMLAttributes<HTMLDivElement>) => (
	<div {...props}>
		<Heading padding='1em' textAlign='center'>
			This page is currently under construction!
		</Heading>
	</div>
);

export default UnderConstruction;
