import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/features/movie-app/api/fetchMovies";

export const useMovies = (query: string, page: number) => {
	return useQuery({
		queryKey: ["movies", query, page],
		queryFn: () => fetchMovies(query, page),
		placeholderData: (prevData) => prevData,
		retry: 1,
		retryDelay: 0,
	});
};
