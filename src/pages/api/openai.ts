import type { APIRoute } from "astro";

const API_URL = "https://api.openai.com/v1/chat/completions";

export const POST: APIRoute = async ({ request }) => {
	const apiKey = import.meta.env.DEV
		? import.meta.env.PUBLIC_OPENAI_API_KEY
		: import.meta.env.OPENAI_API_KEY;

	try {
		const { message } = await request.json();

		if (!message) {
			return new Response(JSON.stringify({ error: "Message is required" }), { status: 400 });
		}

		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`,
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
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return new Response(JSON.stringify(data), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
	}
};
