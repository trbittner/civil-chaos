/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				pacifico: ['Pacifico','cursive'],
				poppins: ['Poppins','sans-serif'],
				lora: ['Lora','serif'],					
			},
		},
	},
	plugins: [
		// For markdown styling https://zaengle.com/blog/tailwind-typography-plugin
		require('@tailwindcss/typography'),	
	],
}
