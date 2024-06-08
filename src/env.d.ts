/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

type NetlifyLocals = import("@astrojs/netlify").NetlifyLocals;

declare namespace App {
	interface Locals extends NetlifyLocals {
		// ...
	}
}

declare module "netlify:edge" {
	export interface Context {
		geo?: {
			country?: {
				name: string;
			};
		};
		next: () => Promise<Response>;
	}
}
