import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { PortfolioItem, MenuLink } from "@/types";

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

const placeholderImage = "assets/images/post_img2.svg";

export const portfolioItems: PortfolioItem[] = [
	{
		title: "Bank Transaction",
		description:
			"An application for viewing bank transactions with options to add, delete, and search transactions.",
		technologies: [
			"React",
			"Typescript",
			"Tailwind CSS",
			"Radix UI",
			"React Hook Form",
			"Yup",
			"useContext",
			"useReducer",
		],
		imageUrl: placeholderImage,
		path: "/dashboards/bank-transactions",
	},
	{
		title: "Task Manager",
		description:
			"Task management tool that simplifies daily organization and enhances productivity.",
		technologies: ["React", "Typescript", "react-redux", "@reduxjs/toolkit", "Context API"],
		imageUrl: placeholderImage,
		path: "/task-manager",
	},
	{
		title: "Random Person",
		description:
			"A random profile generator for testing purposes, complete with contact details and a photograph.",
		technologies: ["React", "Typescript", "react-icons", "Rest API", "Tailwind CSS"],
		imageUrl: placeholderImage,
		path: "/random-person",
	},
	{
		title: "Hacker News",
		description: "A minimalist Hacker News client that facilitates access to technological news.",
		technologies: ["React", "Typescript", "Tailwind CSS", "Rest API", "Context API", "useReducer"],
		imageUrl: placeholderImage,
		path: "/hacker-news",
	},
	{
		title: "SVG Anime Universe",
		description: "Homepage view of an anime service with advanced SVG animation of moving circles.",
		technologies: ["React", "Typescript", "SVG API", "CSS"],
		imageUrl: placeholderImage,
		path: "/svg-anime-universe",
	},
	{
		title: "Framer Parallax",
		description: "Homepage teaser with a parallax effect, showcasing dynamic scroll animations.",
		technologies: ["React", "Typescript", "Framer Motion", "Tailwind CSS"],
		imageUrl: placeholderImage,
		path: "/framer-parallax",
	},
	{
		title: "Playground AI",
		description:
			"A responsive user interface for interacting with AI models or chatbots, intuitive and user-friendly. (in progress)",
		technologies: ["React", "Typescript", "Tailwind CSS", "Shadcn UI", "Radix UI"],
		imageUrl: placeholderImage,
		path: "/dashboards/playground-ai",
	},
];

// Used to generate links in both the Header & Footer.
export const menuLinks: MenuLink[] = [
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
		subLinks: portfolioItems.map((item) => ({
			title: item.title,
			path: item.path,
			description: "fdf",
		})),
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
