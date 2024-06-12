import type { APIRoute } from "astro";
import { OpenAI } from "openai";

const openai = new OpenAI({
	baseURL: "https://api.openai.com/v1",
	organization: import.meta.env.ORGANIZATION_ID_OPENAI,
	apiKey: import.meta.env.OPENAI_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
	const { message } = await request.json();

	if (!message) {
		return new Response(JSON.stringify({ error: "Message is required" }), { status: 400 });
	}

	try {
		const response = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [
				{ role: "system", content: "You are a helpful assistant." },
				{ role: "user", content: message },
			],
		});

		const result = response.choices[0].message;
		return new Response(JSON.stringify({ content: result.content }), { status: 200 });
	} catch (error) {
		let errorMessage = "Failed to fetch response from OpenAI";
		let statusCode = 500;

		if (error instanceof Error) {
			errorMessage = error.message;
		}

		return new Response(JSON.stringify({ error: errorMessage }), { status: statusCode });
	}
};
