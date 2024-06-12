import type { OpenAiResponse } from "./types";

export const fetchOpenAi = async (message: string): Promise<OpenAiResponse> => {
    const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch response from OpenAI");
    }

    const data: OpenAiResponse = await response.json();
    return data;
};