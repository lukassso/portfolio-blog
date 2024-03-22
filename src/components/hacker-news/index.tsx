import HackerNewsStories from "./components/HackerNewsStories";
import { AppProvider } from "../../features/hacker-news/context";

const HackerNewsRoot = () => (
	<AppProvider>
		<HackerNewsStories />
	</AppProvider>
);
export default HackerNewsRoot;
