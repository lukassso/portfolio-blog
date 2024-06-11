import { useMutation } from "@tanstack/react-query";
import type { UseMutationResult } from "@tanstack/react-query";
import fetchApi from "./fetchOpenAiApi";
import type { ApiResponse } from "./types";

const useOpenApi = (
	options?: UseMutationOptions<ApiResponse, Error, string>,
): UseMutationResult<ApiResponse, Error, string> => {
	return useMutation<ApiResponse, Error, string>((message: string) => fetchApi(message), options);
};

export default useOpenApi;
