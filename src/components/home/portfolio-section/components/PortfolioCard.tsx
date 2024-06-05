import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/types";

interface PortfolioCardProps {
	app: PortfolioItem;
	technologies: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ app, technologies }) => {
	return (
		<Card className="transition ease-in-out hover:scale-[102%] hover:shadow-xl">
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
					{technologies.map((tech) => (
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
	);
};

export default PortfolioCard;
