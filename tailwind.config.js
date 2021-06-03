/** @format */

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	important: true,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xs: '.70rem',
				tiny: '.75rem',
			},
		},
	},
	variants: {
		extend: {},
	},
};
