import type { Handler } from "@netlify/functions";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../src/firebase/server";

const handler: Handler = async (event) => {
	const auth = getAuth(app);
	const data = JSON.parse(event.body || "{}");

	if (!data.idToken) {
		return {
			statusCode: 401,
			body: JSON.stringify({ message: "No token found" }),
		};
	}

	try {
		const decodedToken = await auth.verifyIdToken(data.idToken);
		await auth.getUser(decodedToken.uid);

		// Create and set session cookie
		const fiveDays = 60 * 60 * 24 * 5 * 1000;
		const sessionCookie = await auth.createSessionCookie(data.idToken, {
			expiresIn: fiveDays,
		});

		return {
			statusCode: 302,
			headers: {
				"Set-Cookie": `__session=${sessionCookie}; Path=/; HttpOnly`,
				Location: "/dashboard",
			},
			body: JSON.stringify({ message: "Successfully signed in" }),
		};
	} catch (error: any) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};

export { handler };
