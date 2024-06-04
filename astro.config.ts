import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	site: "http://localhost:4321",
	base: "",
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
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
});
