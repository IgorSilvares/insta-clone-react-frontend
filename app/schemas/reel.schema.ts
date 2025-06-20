import { z } from 'zod';

// Zod schema for a single reel object
export const reelSchema = z.object({
  id: z.number().int().positive(),
  video_url: z.string().url(),
  thumbnail_url: z.string().url(),
  description: z.string().nullable(),
  views: z.number().int().min(0),
  created_at: z.string().datetime(),
});

// Zod schema for an array of reels
export const reelsSchema = z.array(reelSchema);

// We infer the TypeScript type from the Zod schema.
export type Reel = z.infer<typeof reelSchema>;
