import type { Handler } from "@netlify/functions";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../src/firebase/server";

const handler: Handler = async (event) => {
	const auth = getAuth(app);
	const data = JSON.parse(event.body || "{}");

	try {
		const userRecord = await auth.createUser({
			email: data.email,
			password: data.password,
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ uid: userRecord.uid }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};

export { handler };
