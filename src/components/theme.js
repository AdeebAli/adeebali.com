import {extendTheme} from '@chakra-ui/react';
// Default font size is 16px

const breakpoints = {
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
};

const overrides = {
	initialColorMode: 'light',
	useSystemColorMode: true,
	colors: {
		black: '#000',
		white: '#fff',
		grey: '#BEBEBE',
		brand: '#511479',
		dark: {
			accent: '#746F94',
			shade: '#1B2234',
		},
		light: {
			accent: '#6B93C1',
			shade: '#F1EEEC',
		},
	},
	breakpoints,

};

const customTheme = extendTheme(overrides);

export default customTheme;
