import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	darkMode: ["class", '[data-theme="dark"]'],
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		// disable some core plugins as they are included in the css, even when unused
		touchAction: false,
		ringOffsetWidth: false,
		ringOffsetColor: false,
		scrollSnapType: false,
		borderOpacity: false,
		textOpacity: false,
		fontVariantNumeric: false,
	},
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				bgcolor: "var(--color-background)",
				brcolor: "var(--color-border)",
			},
			textColor: {
				default: "var(--color-text)",
				offset: "var(--color-text-offset)",
			},
			backgroundColor: {
				default: "var(--color-background)",
				offset: "var(--color-background-offset)",
			},
			borderColor: {
				default: "var(--color-border)",
			},
			typography: (theme: any) => ({
				blog: {
					css: {
						"--tw-prose-body": theme("textColor.default"),
						"--tw-prose-headings": theme("textColor.default"),
						"--tw-prose-links": theme("color.primary"),
						"--tw-prose-bold": theme("textColor.default"),
						"--tw-prose-bullets": theme("textColor.default"),
						"--tw-prose-quotes": theme("textColor.default"),
						"--tw-prose-code": theme("textColor.default"),
						"--tw-prose-hr": "0.5px dashed #666",
						"--tw-prose-th-borders": "#666",
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
