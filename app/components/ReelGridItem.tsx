import React from 'react';
import type { Reel } from '~/schemas/reel.schema';

interface ReelGridItemProps {
  reel: Reel;
}

const ReelGridItem: React.FC<ReelGridItemProps> = ({ reel }) => {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-200 cursor-pointer group">
      <img
        src={reel.thumbnail_url}
        alt={reel.description || `Reel by ${reel.id}`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/placeholder-reel.png';
        }}
      />
      <div className="absolute inset-0 flex items-end p-2 text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="flex items-center text-sm font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          {reel.views.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default ReelGridItem;
