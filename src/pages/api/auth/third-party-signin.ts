import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getAuth } from "firebase-admin/auth";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const auth = getAuth(app);
	const { idToken } = await request.json();

	if (!idToken) {
		return new Response("No token found", { status: 401 });
	}

	try {
		const decodedToken = await auth.verifyIdToken(idToken);
		await auth.getUser(decodedToken.uid);

		const fiveDays = 60 * 60 * 24 * 5 * 1000;
		const sessionCookie = await auth.createSessionCookie(idToken, {
			expiresIn: fiveDays,
		});

		cookies.set("__session", sessionCookie, {
			path: "/",
		});

		return redirect("/dashboard");
	} catch (error) {
		return new Response("Invalid token", { status: 401 });
	}
};
