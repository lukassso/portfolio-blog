import type { Handler } from "@netlify/functions";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../src/firebase/server";

const handler: Handler = async (event) => {
	const auth = getAuth(app);
	const data = JSON.parse(event.body || "{}");

	try {
		const decodedToken = await auth.verifyIdToken(data.idToken);
		const customToken = await auth.createCustomToken(decodedToken.uid);

		return {
			statusCode: 200,
			body: JSON.stringify({ token: customToken }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};

export { handler };
