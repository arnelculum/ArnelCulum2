export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'website' | '2d' | '3d';
}