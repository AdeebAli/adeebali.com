import {theme} from '@chakra-ui/core';
// Default font size is 16px
const breakpoints = ['30em', '48em', '62em', '80em'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
console.log(breakpoints.sm);
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
	},
	breakpoints

};

export default customTheme;
