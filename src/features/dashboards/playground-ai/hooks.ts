import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import type { OpenAiResponse } from "./types";
import { fetchOpenAi } from "./fetchOpenAi";

export const useOpenAi = (options?: UseMutationOptions<OpenAiResponse, Error, string>) => {
	
	return useMutation<OpenAiResponse, Error, string>({
		mutationFn: fetchOpenAi,
		...options,
	});
};
