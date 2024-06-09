/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

<<<<<<< HEAD
interface ImportMetaEnv {
	readonly VITE_APP_FIREBASE_API_KEY: string;
	readonly VITE_APP_FIREBASE_AUTH_DOMAIN: string;
	readonly VITE_APP_FIREBASE_PROJECT_ID: string;
	readonly VITE_APP_FIREBASE_STORAGE_BUCKET: string;
	readonly VITE_APP_FIREBASE_MESSAGING_SENDER_ID: string;
	readonly VITE_APP_FIREBASE_APPID: string;
	readonly VITE_APP_ID: string;
	readonly VITE_APP_MEASUREMENT_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
=======
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
>>>>>>> f6e86117867d96146ee6f64f3dfe10e809fb5ede
}
