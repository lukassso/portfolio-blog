import { HandIcon, ViewIcon } from "lucide-react";
import { Card } from "@/components/ui/card-spring";

export default function GreetingsSection() {
	return (
		<Card className="-mt-40 w-full rounded-2xl bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0] py-10 dark:from-gray-950 dark:to-gray-700 md:-mt-60 md:py-32">
			<div className="container flex flex-col items-center px-4 text-center md:px-6">
				<div className="mb-8 inline-flex items-center gap-4 rounded-full bg-transparent px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-50">
					<HandIcon className="animate-wave h-6 w-6" />
					<span>Greetings</span>
				</div>
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Welcome to my World
				</h2>
				<p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
					My digital realm where I blend code and design to create engaging experiences. Explore how
					I craft interactive, cross-browser designs with HTML, CSS, and JavaScript, focusing on
					clean and meaningful code.
				</p>
				<div className="relative mt-8 w-full max-w-md">
					<div className="opacity-99 absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f8f8f8] to-[#f0f0f0] blur-2xl dark:from-gray-950 dark:to-gray-900" />
					<div className="relative rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-950">
						<div className="flex items-center gap-4">
							<div className="flex-shrink-0 animate-pulse rounded-full bg-gradient-to-br from-green-300 to-green-500 p-2">
								<ViewIcon className="h-8 w-8 text-white" />
							</div>
							<div>
								<p className="text-left text-sm text-gray-600 dark:text-gray-400">
									Keep an eye on this space for updates on the latest trends in web technology. I am
									constantly learning and adapting, committed to enhancing my skills and embracing
									industry best practices.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}
