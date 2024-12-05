import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import type { Video } from '../types/video';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Link to={`/video/${video.id}`} ref={ref} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {inView && (
          <>
            <div className="aspect-video relative">
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300" />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-base md:text-lg font-semibold line-clamp-2">{video.title}</h3>
              <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2 line-clamp-2">{video.description}</p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}