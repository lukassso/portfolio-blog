import { useGlobalContext } from "../../../features/hacker-news/context";

const HackerNewsStories = () => {
	const { isLoading, hits } = useGlobalContext();

	if (isLoading) {
		return <div className="loading"></div>;
	}
	return (
		<section className="flex flex-col">
			{hits.map((story) => {
				const { objectID, title, num_comments, url, points, author } = story;
				return (
					<article key={objectID} className="flex ">
						<h4>{title}</h4>
						<p>
							{points} points by <span>{author} | </span> {num_comments} comments
						</p>
						<div>
							<a href={url} target="_blank" rel="noopener noreferrer">
								read more
							</a>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default HackerNewsStories;
