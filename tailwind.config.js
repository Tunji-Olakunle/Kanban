module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins','sans-serif'],
			   }
		},
	},
	variants: {
		extend: {
			cursor: ['hover', 'focus'],
			margin: ['hover', 'focus'],
		},
	},
	plugins: [],
};
