import nodeFetch from 'node-fetch';

export async function fetchOpenAiResponse(message: string, apiKey: string) {
    if (!message) {
        throw new Error("Message is required");
    }

    const response = await nodeFetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
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

    return await response.json();
}
