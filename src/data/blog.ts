import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable APIs with Go",
    excerpt:
      "A deep dive into building high-performance RESTful APIs using Go, covering routing, middleware, database patterns, and deployment strategies for production-ready services.",
    category: "Backend",
    image: "/images/project-apigateway.png",
    date: "Mar 15, 2024",
    slug: "building-scalable-apis-with-go",
  },
  {
    id: 2,
    title: "Next.js 14 Performance Tips",
    excerpt:
      "Practical techniques to optimize your Next.js applications — from server components and streaming to image optimization and bundle analysis for blazing-fast load times.",
    category: "Frontend",
    image: "/images/project-devflow.png",
    date: "Feb 28, 2024",
    slug: "nextjs-14-performance-tips",
  },
  {
    id: 3,
    title: "From React to React Native",
    excerpt:
      "Transitioning from web to mobile development? Here's everything you need to know about leveraging your React skills to build native mobile apps with React Native and Expo.",
    category: "Mobile",
    image: "/images/project-taskmate.png",
    date: "Jan 10, 2024",
    slug: "from-react-to-react-native",
  },
];
