import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/site.config";
import type { PortfolioItem } from "@/types";

export default function PortfolioSection() {
	const getRandomElements = (arr: string[], numElements: number) => {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, numElements);
	};

	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
				<div className="space-y-3">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						My Simple Apps
					</h2>
					<p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Check out some of the simple apps I've built to showcase my skills.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{portfolioItems.map((app) => (
						<Card
							key={app.title}
							className="transition ease-in-out hover:scale-[102%] hover:shadow-xl"
						>
							<CardHeader>
								<img
									src={app.imageUrl}
									alt={`${app.title} Screenshot`}
									width={500}
									height={300}
									className="w-full rounded-t-lg object-cover"
								/>
							</CardHeader>
							<CardContent className="space-y-2 p-4">
								<div className="flex items-center justify-center gap-2 overflow-hidden">
									{getRandomElements(app.technologies || [], 3).map((tech) => (
										<div
											key={tech}
											className="whitespace-nowrap rounded-full bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-gray-800"
										>
											{tech}
										</div>
									))}
								</div>
								<h3 className="text-lg font-bold">{app.title}</h3>
								<div className="flex justify-end">
									<Button variant="outline" asChild>
										<a href={app.path}>View App</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
