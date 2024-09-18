/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				neutral: 'var(--color-neutral)',
				valid: 'var(--color-valid)',
				invalid: 'var(--color-invalid)',
				white: 'var(--color-white)',
				blue: 'var(--color-blue)',
				red: 'var(--color-red)',
				green: 'var(--color-green)',
				grey_light: 'var(--color-grey-light)',
				grey: 'var(--color-grey)',
				grey_dark: 'var(--color-grey-dark)',
			},
			fontFamily: {
				monospace: ['Cousine', 'Courier New', 'Courier', 'monospace'],
				cursive: ['Kalam', 'cursive'],
				serif: ['Bona Nova SC', 'Times New Roman', 'Times', 'serif'],
				sans: ['Montserrat', 'Franklin Gothic Medium', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
