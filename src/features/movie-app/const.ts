const { PUBLIC_MOVIE_API_KEY, VITE_MOVIE_API_KEY } = import.meta.env;

const getEnv = import.meta.env.MODE === "development" ? PUBLIC_MOVIE_API_KEY : VITE_MOVIE_API_KEY;

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${getEnv}`;
export const DEFAULT_ID = "tt0372784";
