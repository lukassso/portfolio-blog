import { z, defineCollection } from "astro:content";

const post = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string().max(60),
			description: z.string().min(50).max(160),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
		}),
});

export const collections = { post };