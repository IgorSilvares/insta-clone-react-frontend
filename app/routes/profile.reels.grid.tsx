import { useLoaderData } from 'react-router';
import { api } from '~/services/api';
import { reelsSchema, type Reel } from '~/schemas/reel.schema';
import ReelGridItem from '~/components/ReelGridItem';
import React from 'react';

export async function loader() {
  try {
    const response = await api.get('/reels/grid');

    return reelsSchema.parse(response.data);
  } catch (error) {
    console.error('Failed to load reels:', error);
    throw new Response('Could not load reels.', { status: 500 });
  }
}

export default function ReelsGrid() {
  const reels = useLoaderData() as Reel[];

  if (!reels || reels.length === 0) {
    return <div className="p-4 text-center text-gray-500">No reels found.</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4 p-4">
      {reels.map((reel) => (
        <ReelGridItem key={reel.id} reel={reel} />
      ))}
    </div>
  );
}
