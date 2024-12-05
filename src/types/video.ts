export interface Video {
  id: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  thumbnailUrl: string;
  videoUrl: string;
  article: string;
}

export interface VideoReel extends Video {
  youtubeId: string;
}

export type VideoType = 'horizontal' | 'vertical';