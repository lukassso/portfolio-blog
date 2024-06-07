import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/utils/fetchMovies";

export const useMovies = (searchParam: string, page: number) => {
	return useQuery({
		queryKey: ["movies", searchParam, page],
		queryFn: () => fetchMovies(searchParam, page),
		placeholderData: (prevData) => prevData,
		retry: 1,
		retryDelay: 0,
	});
};
