import { initializeApp } from "firebase/app";

const prefix = import.meta.env.DEV ? "PUBLIC_" : "";

const firebaseConfig = {
	apiKey: import.meta.env[`${prefix}FIREBASE_API_KEY`],
	authDomain: import.meta.env[`${prefix}FIREBASE_AUTH_DOMAIN`],
	projectId: import.meta.env[`${prefix}FIREBASE_PROJECT_ID`],
	storageBucket: import.meta.env[`${prefix}FIREBASE_STORAGE_BUCKET`],
	messagingSenderId: import.meta.env[`${prefix}FIREBASE_MESSAGING_SENDER_ID`],
	appId: import.meta.env[`${prefix}FIREBASE_APP_ID`],
	measurementId: import.meta.env[`${prefix}MEASUREMENT_ID`],
};

export const app = initializeApp(firebaseConfig);
