import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Lukasz Zatyka",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "My personal website",
	// Meta property used as the default description meta property
	description: "Website with my thoughts and skills",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{
	title: string;
	path?: string;
	subLinks?: Array<{ title: string; path: string }>;
}> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Blog",
		path: "/blog",
	},
	{
		title: "Portfolio",
		subLinks: [
			{
				title: "Task Manager",
				path: "/task-manager",
			},
			{
				title: "Random Person",
				path: "/random-person",
			},
			{
				title: "Hacker News",
				path: "/hacker-news",
			},
			{
				title: "Hero Anime",
				path: "/hero-anime",
			},
			{
				title: "Dashboard",
				path: "/dashboards/sample-1",
			},
			{
				title: "Playground AI",
				path: "/dashboards/sample-2",
			},
		],
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		borderRadius: "4px",
		codePaddingInline: "1rem",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
	},
};
