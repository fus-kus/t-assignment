import { z } from 'zod';

export const Category = z.object({
	id: z.number().optional(),
	name: z.string().min(0)
});

export type Category = z.infer<typeof Category>;
