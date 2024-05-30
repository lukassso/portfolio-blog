import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function MultiLayerParallax({
	title,
	description,
	chipsList,
}: {
	title: string;
	description: string;
	chipsList: string[];
}) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
	return (
		<div className="relative grid h-screen w-full place-items-center overflow-hidden">
			<motion.div
				style={{ y: textY }}
				className="text-dark relative z-10 dark:text-white md:text-9xl"
			>
				<div className="flex-1">
					<section className="w-full py-12 md:py-24 lg:py-32">
						<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
							<div className="space-y-3">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									{title}
								</h2>
								<p className="mx-auto max-w-[700px] dark:text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									{description}
								</p>
							</div>
							<div className="flex items-center justify-center gap-2">
								{chipsList?.map((chip: string) => (
									<div
										key={chip}
										className="rounded-full bg-gray-100 px-3 py-2 text-xs font-medium dark:bg-gray-800"
									>
										{chip}
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			</motion.div>

			<motion.div
				className="absolute inset-0 z-0 opacity-50"
				style={{
					backgroundImage: `url(/assets/images/image-full.png)`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
					y: backgroundY,
				}}
			/>
			<div
				className="absolute inset-0 z-20 opacity-90"
				style={{
					backgroundImage: `url(/assets/images/image-bottom.png)`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
				}}
			/>
		</div>
	);
}
