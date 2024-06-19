import type { APIRoute } from "astro";
import { API_ENDPOINT } from "@/features/movie-app/const";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	const searchParam = url.searchParams.get("s") || "robot";
	const page = url.searchParams.get("page") || "1";

	if (!searchParam) {
		return new Response(JSON.stringify({ error: "Search parameter 's' is missing" }), {
			status: 400,
		});
	}

	const apiKey = import.meta.env.DEV
		? import.meta.env.PUBLIC_MOVIE_API_KEY
		: import.meta.env.MOVIE_API_KEY;

	const apiUrl = `${API_ENDPOINT}?apikey=${apiKey}&s=${searchParam}&page=${page}`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`API request failed with status ${response.status}`);
		}
		const result = await response.json();
		return new Response(JSON.stringify(result), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
