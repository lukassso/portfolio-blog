import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const activeApps = getApps();

const getEnvVariable = (key: string): string | undefined => {
	const value = process.env[key];
	return value;
};

const serviceAccount = {
	projectId: getEnvVariable("FIREBASE_PROJECT_ID"),
	privateKey: getEnvVariable("FIREBASE_PRIVATE_KEY")?.replace(/\\n/g, "\n"),
	clientEmail: getEnvVariable("FIREBASE_CLIENT_EMAIL"),
	clientId: getEnvVariable("FIREBASE_CLIENT_ID"),
	authUri: getEnvVariable("FIREBASE_AUTH_URI"),
	tokenUri: getEnvVariable("FIREBASE_TOKEN_URI"),
	authProviderX509CertUrl: getEnvVariable("FIREBASE_AUTH_CERT_URL"),
	clientC509CertUrl: getEnvVariable("FIREBASE_CLIENT_CERT_URL"),
};

const initApp = () => {
	console.info(`Project ID: ${serviceAccount.projectId}`);

	if (!serviceAccount.projectId) {
		throw new Error("Missing projectId in serviceAccount.");
	}
	console.info("Loading service account from env.");
	return initializeApp({
		credential: cert(serviceAccount as ServiceAccount),
		projectId: serviceAccount.projectId,
	});
};

const app = activeApps.length === 0 ? initApp() : activeApps[0];

export { app };
