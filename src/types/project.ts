export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  location: string;
  year: string | number;
  description: string;
  coverImage: string;
  featured: boolean;
}