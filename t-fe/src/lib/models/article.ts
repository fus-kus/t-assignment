import { z } from 'zod';
import { Category } from './category';

export const Article = z.object({
	id: z.number().optional(),
	name: z.string().min(0),
	priceAmount: z.string().regex(/[0-9]+\.[0-9]{2}/gm),
	priceCurrency: z.union([z.literal('USD'), z.literal('EUR'), z.literal('GBP')]),
	description: z.string().min(0),
	categories: z.array(Category)
});

export type Article = z.infer<typeof Article>;
