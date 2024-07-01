import type { Handler } from "@netlify/functions";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../src/firebase/server";

const handler: Handler = async (event) => {
  const auth = getAuth(app);

  /* Get token from request headers */
  const idToken = event.headers.authorization?.split("Bearer ")[1];
  if (!idToken) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "No token found" }),
    };
  }

  /* Verify id token */
  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Invalid token" }),
    };
  }

  /* Create and set session cookie */
  const fiveDays = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays,
  });

  return {
    statusCode: 302,
    headers: {
      "Set-Cookie": `__session=${sessionCookie}; Path=/; HttpOnly`,
      "Location": "/dashboard",
    },
    body: JSON.stringify({ message: "User signed in successfully" }),
  };
};

export { handler };
