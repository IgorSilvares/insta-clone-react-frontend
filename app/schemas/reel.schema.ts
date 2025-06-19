// app/schemas/reel.schema.ts
import { z } from 'zod';

// Zod schema for a single reel object
export const reelSchema = z.object({
  id: z.number().int().positive(), // Assuming IDs are positive integers
  video_url: z.string().url(),
  thumbnail_url: z.string().url(),
  description: z.string().nullable(), // Nullable as per backend
  views: z.number().int().min(0), // Assuming views are non-negative integers
  created_at: z.string().datetime(), // Assuming ISO 8601 string dates
});

// Zod schema for an array of reels
export const reelsSchema = z.array(reelSchema);

// We infer the TypeScript type from the Zod schema.
export type Reel = z.infer<typeof reelSchema>;
