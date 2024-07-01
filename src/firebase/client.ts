import { initializeApp, getApps, getApp } from "firebase/app";

export const prefix = import.meta.env.DEV ? "PUBLIC_" : "";

const firebaseConfig = {
	apiKey: import.meta.env[`${prefix}FIREBASE_API_KEY`] as string,
	authDomain: import.meta.env[`${prefix}FIREBASE_AUTH_DOMAIN`] as string,
	projectId: import.meta.env[`${prefix}FIREBASE_PROJECT_ID`] as string,
	storageBucket: import.meta.env[`${prefix}FIREBASE_STORAGE_BUCKET`] as string,
	messagingSenderId: import.meta.env[`${prefix}FIREBASE_MESSAGING_SENDER_ID`] as string,
	appId: import.meta.env[`${prefix}FIREBASE_APP_ID`] as string,
	measurementId: import.meta.env[`${prefix}MEASUREMENT_ID`] as string,
};

export const app = initializeApp(firebaseConfig);
