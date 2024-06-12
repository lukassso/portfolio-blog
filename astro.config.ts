import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	site: "https://zetkolek.netlify.app/",
	integrations: [
		expressiveCode(expressiveCodeOptions),
		icon({
			include: {
				tabler: ["*"],
			},
		}),
		tailwind({
			applyBaseStyles: true,
		}),
		mdx(),
		react(),
	],
	output: "hybrid",
	adapter: netlify(),
	vite: {
		define: {
			"process.env.PUBLIC_MOVIE_API_KEY": JSON.stringify(process.env.PUBLIC_MOVIE_API_KEY),
			"process.env.MOVIE_API_KEY": JSON.stringify(process.env.MOVIE_API_KEY),
			"process.env.PUBLIC_OPENAI_API_KEY": JSON.stringify(process.env.PUBLIC_OPENAI_API_KEY),
			"process.env.OPENAI_API_KEY": JSON.stringify(process.env.OPENAI_API_KEY),
		},
	},
});
