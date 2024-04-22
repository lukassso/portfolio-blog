import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MultiLayerParallax() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
	return (
		<div className="relative grid h-screen w-full place-items-center overflow-hidden">
			<motion.h1
				style={{ y: textY }}
				className="relative z-10 text-7xl font-bold text-dark dark:text-white md:text-9xl"
			>
				PARALLAX
			</motion.h1>

			<motion.div
				className="absolute inset-0 z-0 opacity-50"
				style={{
					backgroundImage: `url(assets/images/image-full.png)`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
					y: backgroundY,
				}}
			/>
			<div
				className="absolute inset-0 z-20 opacity-90"
				style={{
					backgroundImage: `url(assets/images/image-bottom.png)`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
				}}
			/>
		</div>
	);
}
