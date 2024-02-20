import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
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
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography")],
} satisfies Config;
