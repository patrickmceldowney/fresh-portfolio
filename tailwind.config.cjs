/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			},
			colors: {
				dark: '#121212'
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
