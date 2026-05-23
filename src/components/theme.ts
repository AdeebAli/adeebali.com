import {extendTheme, type ThemeConfig} from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
};

const breakpoints = {
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
};

const overrides = {
	config,
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
