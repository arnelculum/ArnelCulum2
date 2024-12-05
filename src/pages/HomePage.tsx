import React, { useState } from 'react';
import { VideoCard } from '../components/VideoCard';
import { VideoReelCard } from '../components/VideoReelCard';
import { SearchResults } from '../components/SearchResults';
import { useSearch } from '../contexts/SearchContext';
import { videos } from '../data/videos';
import { videoReels } from '../data/videoReels';
import type { VideoType } from '../types/video';

const VIDEOS_PER_PAGE = {
  horizontal: 6,
  vertical: 8
};

export function HomePage() {
  const [activeTab, setActiveTab] = useState<VideoType>('horizontal');
  const [displayCount, setDisplayCount] = useState(VIDEOS_PER_PAGE[activeTab]);
  const { isSearching } = useSearch();
  
  const currentVideos = activeTab === 'horizontal' ? videos : videoReels;
  const displayedVideos = currentVideos.slice(0, displayCount);
  const hasMore = displayCount < currentVideos.length;
  
  const handleShowMore = () => {
    const increment = activeTab === 'horizontal' ? VIDEOS_PER_PAGE.horizontal : VIDEOS_PER_PAGE.vertical;
    setDisplayCount(prev => Math.min(prev + increment, currentVideos.length));
  };

  const handleTabChange = (tab: VideoType) => {
    setActiveTab(tab);
    setDisplayCount(VIDEOS_PER_PAGE[tab]);
  };
  
  if (isSearching) {
    return <SearchResults />;
  }

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          onClick={() => handleTabChange('horizontal')}
          className={`px-4 py-2 font-medium text-sm transition-colors relative ${
            activeTab === 'horizontal'
              ? 'text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Videos
          {activeTab === 'horizontal' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
        <button
          onClick={() => handleTabChange('vertical')}
          className={`px-4 py-2 font-medium text-sm transition-colors relative ${
            activeTab === 'vertical'
              ? 'text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Video Reels
          {activeTab === 'vertical' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
      </div>

      {/* Video Grid */}
      <div className={`grid gap-6 ${
        activeTab === 'horizontal' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
      }`}>
        {displayedVideos.map((video) => (
          activeTab === 'horizontal' ? (
            <VideoCard key={video.id} video={video} />
          ) : (
            <VideoReelCard key={video.id} video={video} />
          )
        ))}
      </div>
      
      {/* Show More Button */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}