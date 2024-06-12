import { useMutation } from "@tanstack/react-query";
import type { UseMutationResult, UseMutationOptions } from "@tanstack/react-query";
import { fetchOpenAi } from "./fetchOpenAi";
import type { OpenAiResponse } from "./types";

const fetchMessage = async (message: string): Promise<OpenAiResponse> => {
	return fetchOpenAi(message);
};

export const useOpenAi = (
	options?: UseMutationOptions<OpenAiResponse, Error, string>,
): UseMutationResult<OpenAiResponse, Error, string> => {
	return useMutation<OpenAiResponse, Error, string>({
		mutationFn: fetchMessage,
		...options,
	});
};
