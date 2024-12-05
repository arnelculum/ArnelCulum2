import React from 'react';
import { VideoCard } from './VideoCard';
import { VideoReelCard } from './VideoReelCard';
import { useSearch } from '../contexts/SearchContext';

export function SearchResults() {
  const { searchResults, searchQuery } = useSearch();

  if (!searchResults.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No results found for "{searchQuery}"</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {searchResults.map((video) => (
        'youtubeId' in video ? (
          <VideoReelCard key={video.id} video={video} />
        ) : (
          <VideoCard key={video.id} video={video} />
        )
      ))}
    </div>
  );
}