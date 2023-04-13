/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'fade': 'fadeOut 0.5s ease-in-out',
				'slide-right': 'slideRight 0.5s ease-in-out'
			  },
		
			  // that is actual animation
			  keyframes: {
				fadeOut: {
				  '0%': { opacity: '0' },
				  '100%': { opacity: '1' },
				},
			  },
			  keyframes: {
				slideRight: {
				  '0%': { transform: 'translateX(100%)' },
				  '100%': { transform: 'translateX(0%)' },
				},
			  },
		},
	},
	plugins: [
        require('@tailwindcss/line-clamp')
    ]
}
