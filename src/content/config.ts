import { z, defineCollection } from "astro:content";

const post = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().max(60),
			description: z.string().min(50).max(160),
			publishDate: z.coerce.date(),
			updatedDate: z.coerce.date(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			heroImage: z.string().optional(),
			coverImage: z
				.object({
					src: image(),
					alt: z.string(),
				})
				.optional(),
		}),
});

export const collections = { post };
