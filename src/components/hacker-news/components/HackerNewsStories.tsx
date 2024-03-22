import { useGlobalContext } from "../../../features/hacker-news/context";

const HackerNewsStories = () => {
	const { isLoading, hits } = useGlobalContext();

	if (isLoading) {
		return <div className="loading"></div>;
	}
	return (
		<div className="flex flex-col">
			{hits.map((story) => {
				const { objectID, title, num_comments, url, points, author } = story;
				return (
					<article
						key={objectID}
						className="my-4 flex flex-col rounded border border-solid border-primary px-8 py-6 shadow-md"
					>
						<div className="flex">
							<h2 className="flex-1 font-bold">{title}</h2>

							<a href={url} target="_blank" rel="noopener noreferrer">
								<button
									className="block rounded-full bg-primary px-5 py-1 text-white transition duration-300 hover:bg-secondary"
									type="button"
								>
									Read more
								</button>
							</a>
						</div>
						<div>
							<p className="pt-2 text-sm">
								{points} points by <span>{author} | </span> {num_comments} comments
							</p>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default HackerNewsStories;
