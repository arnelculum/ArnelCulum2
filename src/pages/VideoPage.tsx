import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getVideoById, getVideoEmbedUrl } from '../utils/videoHelpers';
import { updateMetaTags } from '../utils/seo';

export function VideoPage() {
  const { id } = useParams();
  const video = id ? getVideoById(id) : undefined;

  useEffect(() => {
    if (video) {
      updateMetaTags({
        title: video.seoTitle,
        description: video.seoDescription
      });
    }
  }, [video]);

  if (!video) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <p className="text-xl text-gray-600 mb-4">Video not found</p>
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
      <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
        <iframe
          src={getVideoEmbedUrl(video.id)}
          title={video.title}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      
      <div className="mt-4 md:mt-6">
        <h1 className="text-2xl md:text-3xl font-bold">{video.title}</h1>
        <p className="mt-2 md:mt-4 text-gray-600">{video.description}</p>
        
        <div className="mt-6 md:mt-8 prose prose-sm md:prose-lg max-w-none">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">About This Project</h2>
          <p className="whitespace-pre-line">{video.article}</p>
        </div>
      </div>
    </div>
  );
}