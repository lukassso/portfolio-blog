import type { APIRoute } from "astro";
import { OpenAI } from "openai";

const openai = new OpenAI({
	apiKey: import.meta.env.PUBLIC_OPENAI_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
	const { message } = await request.json();
	console.log("@@@@@@@@@@@@@@@Received message:", message);

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
		console.log("@@@@@@@@@@@@@@@@@@@@@@@OpenAI response:", result);

		return new Response(JSON.stringify({ content: result.content }), { status: 200 });
	} catch (error) {
		console.error("@@@@@@@@@@@@@@@@@@@@Error fetching from OpenAI:", error);
		return new Response(JSON.stringify({ error: "Failed to fetch response from OpenAI" }), {
			status: 500,
		});
	}
};
