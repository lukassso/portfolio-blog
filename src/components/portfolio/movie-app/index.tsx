import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/components/portfolio/movie-app/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouting from "./components/AppRouting";

const MovieAppComponent = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AppRouting />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default MovieAppComponent;
