import { videos } from '../data/videos';
import { videoReels } from '../data/videoReels';
import type { Video, VideoReel } from '../types/video';

export function getVideoThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function getVideoEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

export function getAllVideos(): Video[] {
  return videos;
}

export function getVideoById(id: string): Video | VideoReel | undefined {
  // First check regular videos
  const regularVideo = videos.find(video => video.id === id);
  if (regularVideo) return regularVideo;

  // Then check video reels
  const videoReel = videoReels.find(reel => reel.youtubeId === id);
  if (videoReel) return videoReel;

  return undefined;
}