import { API_ENDPOINT } from "../const";

export const fetchMovieDetails = async (id: string) => {
	try {
		const response = await fetch(`${API_ENDPOINT}&i=${id}`);
		const data = await response.json();

		if (!response.ok || data.Response !== "True") {
			throw new Error(data.Error || "Failed to fetch movie details");
		}

		return data;
	} catch (error) {
		throw new Error((error as Error).message || "Failed to fetch movie details");
	}
};
