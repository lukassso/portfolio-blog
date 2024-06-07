import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "@/utils/fetchMovieDetails";

export const useMovieDetails = (id: string) => {
	return useQuery({
		queryKey: ["movieDetails", id],
		queryFn: () => fetchMovieDetails(id),
		placeholderData: (prevData) => prevData,
	});
};
