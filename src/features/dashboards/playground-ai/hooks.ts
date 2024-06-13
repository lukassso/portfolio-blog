import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import type { OpenAiResponse } from "./types";
import { fetchOpenAiResponse } from "@/pages/api/openai";

export const useOpenAi = (options?: UseMutationOptions<OpenAiResponse, Error, string>) => {
	return useMutation<OpenAiResponse, Error, string>({
		mutationFn: (message) => fetchOpenAiResponse(message),
		...options,
	});
};
