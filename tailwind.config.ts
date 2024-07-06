import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					main: "#b1034f",
					darker: "#760235",
					dark: "#940342",
					light: "#be2d6c",
					lighter: "#efcddc",
				},
				accent: {
					yellow: "#F2C464",
					red: "#8B0A1A",
				},
				white: "#FFFFFF",
				black: "#000000",
				gray: "#909090",
				light_gray: "#CCCCCC",
			},
		},
	},
	plugins: [],
};
export default config;
