import type { Handler, HandlerEvent } from "@netlify/functions";
import { fetchOpenAiResponse } from "@/pages/api/openai";

const handler: Handler = async (event: HandlerEvent) => {
	if (event.httpMethod !== "POST") {
		return { statusCode: 405, body: "Method Not Allowed" };
	}

	try {
		const { message } = JSON.parse(event.body || "{}");
		const data = await fetchOpenAiResponse(message);
		return { statusCode: 200, body: JSON.stringify(data) };
	} catch (error) {
		console.error(error);
		return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
	}
};

export { handler };
