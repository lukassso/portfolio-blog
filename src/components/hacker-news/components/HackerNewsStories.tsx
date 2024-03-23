import { useGlobalContext } from "../../../features/hacker-news/context";
import { useMemo } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function timeAgo(isoData: string) {
	const createAt = dayjs(isoData);
	return createAt.fromNow();
}

const HackerNewsStories = () => {
	const { isLoading, hits } = useGlobalContext();

	const hitsWithTitles = useMemo(() => {
		return hits.filter((hit) => hit.title !== undefined);
	}, [hits]);
	console.log("hitsWithTitles", hitsWithTitles);
	if (isLoading) {
		return <div className="loading"></div>;
	}

	return (
		<div className="flex flex-col">
			{hitsWithTitles.map((story) => {
				const { objectID, title, num_comments, url, points, author, created_at } = story;
				return (
					<article
						key={objectID}
						className="my-2 flex flex-col rounded border border-solid border-primary px-8 py-6 shadow-md"
					>
						<div className="flex">
							<h2 className="flex-1 font-bold">{title}</h2>

							<a href={url} target="_blank" rel="noopener noreferrer">
								<button
									className="ml-2 block rounded-full bg-primary px-5 py-1 text-white transition duration-300 hover:bg-secondary"
									type="button"
								>
									Read more
								</button>
							</a>
						</div>
						<div>
							<p className="pt-2 text-sm">
								{points} points by{" "}
								<span>
									{author} | {timeAgo(created_at)} |{" "}
								</span>{" "}
								{num_comments} comments
							</p>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default HackerNewsStories;
