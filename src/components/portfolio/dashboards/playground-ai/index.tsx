import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/utils/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PlaygroundAiComponent } from "./components/PlaygroundAi.component";

const PlaygroundAiAppComponent = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<PlaygroundAiComponent />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default PlaygroundAiAppComponent;
