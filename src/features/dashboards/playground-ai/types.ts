export interface OpenAiResponse {
	choices: Array<{
		message: {
			content: string;
		};
	}>;
}

export interface OpenAiRequest {
	prompt: string;
}

export interface Message {
	role: "system" | "user" | "assistant";
	userMessage: string;
	aiMessage?: string;
	pending: boolean;
}

export interface SettingsStoreType {
	temperature: number;
	maxTokens: number;
	topP: number;
	frequencyPenalty: number;
	presencePenalty: number;
}
