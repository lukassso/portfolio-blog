import { API_ENDPOINT } from "../const";

export const fetchMovies = async (query: string, page: number = 1) => {
	try {
		const response = await fetch(`${API_ENDPOINT}&s=${query}&page=${page}`);
		const data = await response.json();

		if (!response.ok || data.Response !== "True") {
			throw new Error(data.Error || "Failed to fetch movies");
		}

		return {
			data: data.Search,
			totalResults: data.totalResults,
		};
	} catch (error) {
		throw new Error((error as Error).message || "Failed to fetch movies");
	}
};
