import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		expressiveCode(expressiveCodeOptions),
		icon(),
		tailwind({
			applyBaseStyles: false,
		}),
		mdx(),
	],
});
