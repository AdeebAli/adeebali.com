import {theme} from '@chakra-ui/core';
const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		black: '#000',
		white: '#fff',
		brand: '#511479',
		dark: {
			accent: '#746F94',
			shade: '#1B2234'
		},
		light: {
			accent: '#6B93C1',
			shade: '#F1EEEC'
		}
	}
};

export default customTheme;
