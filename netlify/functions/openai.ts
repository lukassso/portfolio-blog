import type { Handler, HandlerEvent } from "@netlify/functions";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const handler: Handler = async (event: HandlerEvent) => {
	if (event.httpMethod !== "POST") {
		return { statusCode: 405, body: "Method Not Allowed" };
	}

	try {
		const { message } = JSON.parse(event.body || "{}");

		if (!message) {
			return {
				statusCode: 400,
				body: JSON.stringify({ error: "Message is required" }),
			};
		}

		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${OPENAI_API_KEY}`,
			},
			body: JSON.stringify({
				model: "gpt-3.5-turbo",
				messages: [
					{ role: "system", content: "Ask me anything" },
					{ role: "user", content: message },
				],
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error: any) {
		console.error(error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Internal Server Error" }),
		};
	}
};

export { handler };
