import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "DevFlow",
    category: "fullstack",
    image: "/images/project-devflow.png",
    description:
      "A developer collaboration platform with real-time kanban boards, code review workflows, and team analytics. Built with Next.js, Socket.io, and PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "Socket.io", "TypeScript"],
    link: "https://devflow.demo.com",
    github: "https://github.com/Krish-AryanDev/devflow",
  },
  {
    id: 2,
    title: "ShopWave",
    category: "fullstack",
    image: "/images/project-shopwave.png",
    description:
      "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. MERN stack with Stripe integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://shopwave.demo.com",
    github: "https://github.com/Krish-AryanDev/shopwave",
  },
  {
    id: 3,
    title: "API Gateway",
    category: "backend",
    image: "/images/project-apigateway.png",
    description:
      "High-performance API gateway built in Go with rate limiting, authentication middleware, request analytics, and auto-generated documentation.",
    tags: ["Go", "Redis", "Docker", "gRPC"],
    link: "https://apigateway.demo.com",
    github: "https://github.com/Krish-AryanDev/api-gateway",
  },
  {
    id: 4,
    title: "TaskMate",
    category: "mobile",
    image: "/images/project-taskmate.png",
    description:
      "Cross-platform task management app with offline-first architecture, push notifications, and team collaboration features.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    link: "https://taskmate.demo.com",
    github: "https://github.com/Krish-AryanDev/taskmate",
  },
  {
    id: 5,
    title: "GraphQL CMS",
    category: "backend",
    image: "/images/project-devflow.png",
    description:
      "Headless CMS with a GraphQL API, visual content editor, role-based access control, and webhook integrations for modern JAMstack sites.",
    tags: ["GraphQL", "Node.js", "React", "PostgreSQL"],
    link: "https://graphqlcms.demo.com",
    github: "https://github.com/Krish-AryanDev/graphql-cms",
  },
  {
    id: 6,
    title: "This Portfolio",
    category: "frontend",
    image: "/images/project-shopwave.png",
    description:
      "The portfolio you're viewing right now! Built with Next.js 14, Tailwind CSS, Framer Motion, and deployed on Vercel with perfect Lighthouse scores.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://krisharyan.dev",
    github: "https://github.com/Krish-AryanDev/portfolio",
  },
];
