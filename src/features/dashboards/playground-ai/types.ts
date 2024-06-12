export interface OpenAiResponse {
  content: string;
}

export interface OpenAiRequest {
  prompt: string;
}

export interface Message {
	userMessage: string;
	answerAi?: string;
	pending: boolean;
}