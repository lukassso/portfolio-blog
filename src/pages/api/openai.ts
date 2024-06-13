import type { OpenAiResponse } from "@/features/dashboards/playground-ai/types";

export async function fetchOpenAiResponse(message: string) {
	if (!message) {
		throw new Error("Message is required");
	}

	const apiKey = import.meta.env.PROD
		? import.meta.env.OPENAI_API_KEY
		: import.meta.env.PUBLIC_OPENAI_API_KEY;

	try {
		const response = await fetch("https://api.openai.com/v1/chat/completions", {
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
			// Handle HTTP response errors
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return (await response.json()) as OpenAiResponse;
	} catch (error) {
		// Handle network or unexpected parsing errors
		if (error instanceof Error) {
			throw new Error(`Network error: ${error.message}`);
		} else {
			throw new Error("Unknown error occurred");
		}
	}
}
