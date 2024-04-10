/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

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
}
