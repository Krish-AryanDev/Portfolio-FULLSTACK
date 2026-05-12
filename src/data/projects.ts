import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Shehnai Resort",
    category: "frontend",
    image: "/images/project-shehnairesort.png",
    description:
      "A professional website built for a live hospitality business to showcase their marriage hall, restaurant, and hotel services with online booking.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://shehnairesort.in",
    github: "https://github.com/Krish-AryanDev/Sehnai-Resort",
  },
  {
    id: 2,
    title: "WarmStay",
    category: "fullstack",
    image: "/images/project-warmstay.png",
    description:
      "A hostel booking platform that lets travelers discover and book hostels with ease. Built with Next.js API routes and Supabase for real-time data.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "https://warmstay.in",
    github: "https://github.com/Krish-AryanDev/WarmStay",
  },
  {
    id: 3,
    title: "MUJ Freelance",
    category: "fullstack",
    image: "/images/project-mujfreelance.png",
    description:
      "A freelance marketplace platform connecting clients with skilled freelancers. Full MERN stack with job listings, proposals, and user profiles.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Krish-AryanDev/MUJ-Freelance",
  },
];
