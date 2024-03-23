import HackerNewsStories from "./components/HackerNewsStories";
import { AppProvider } from "../../features/hacker-news/context";
import Pagination from "./components/Pagination";

const HackerNewsRoot = () => (
	<AppProvider>
		<Pagination />
		<HackerNewsStories />
	</AppProvider>
);
export default HackerNewsRoot;
