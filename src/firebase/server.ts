import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const prefix = process.env.NODE_ENV === "development" ? "PUBLIC_" : "";

const activeApps = getApps();
const serviceAccount = {
	type: "service_account",
	project_id: process.env[`${prefix}FIREBASE_PROJECT_ID`],
	private_key_id: process.env[`${prefix}FIREBASE_PRIVATE_KEY_ID`],
	private_key: (process.env[`${prefix}FIREBASE_PRIVATE_KEY`] as string)?.replace(/\\n/g, "\n"),
	client_email: process.env[`${prefix}FIREBASE_CLIENT_EMAIL`],
	client_id: process.env[`${prefix}FIREBASE_CLIENT_ID`],
	auth_uri: process.env[`${prefix}FIREBASE_AUTH_URI`],
	token_uri: process.env[`${prefix}FIREBASE_TOKEN_URI`],
	auth_provider_x509_cert_url: process.env[`${prefix}FIREBASE_AUTH_CERT_URL`],
	client_x509_cert_url: process.env[`${prefix}FIREBASE_CLIENT_CERT_URL`],
	universe_domain: "googleapis.com",
};

const initApp = () => {
	if (process.env.NODE_ENV === "production") {
		console.info("PROD env detected. Using default service account.");
		return initializeApp();
	}
	console.info("Loading service account from env.");
	return initializeApp({
		credential: cert(serviceAccount as ServiceAccount),
		projectId: serviceAccount.project_id,
	});
};

const app = activeApps.length === 0 ? initApp() : activeApps[0];

export { app };
