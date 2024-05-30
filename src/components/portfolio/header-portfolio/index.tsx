export default function HeaderPorfolio() {
	return (
		<div className="flex-1">
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Todo App
						</h2>
						<p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							A simple todo list app to help you stay organized.
						</p>
					</div>
					<div className="flex items-center gap-2">
						<div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-gray-800">
							React
						</div>
						<div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-gray-800">
							Tailwind CSS
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
