export interface Skill {
  name: string;
  percentage: number;
}

export interface Project {
  id: number;
  title: string;
  category: "frontend" | "backend" | "mobile" | "fullstack";
  image: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  title: string;
  dateRange: string;
  company: string;
  location: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  dateRange: string;
  institution: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  slug: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
