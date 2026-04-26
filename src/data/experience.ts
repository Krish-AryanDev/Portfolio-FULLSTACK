import { Experience, Education } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Fullstack Developer",
    dateRange: "Jan 2023 – Present",
    company: "TechCorp Solutions",
    location: "Remote",
    description:
      "Led the development of a microservices platform serving 200K+ users. Architected scalable APIs with Go and Node.js, implemented CI/CD pipelines, and mentored a team of 5 developers.",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    dateRange: "Jun 2021 – Dec 2022",
    company: "StartupXYZ",
    location: "Hybrid",
    description:
      "Built a SaaS product from scratch using MERN stack. Designed database schemas, implemented real-time features with WebSockets, and integrated third-party payment gateways.",
  },
  {
    id: 3,
    title: "Frontend Developer",
    dateRange: "Jan 2020 – May 2021",
    company: "Digital Agency Co.",
    location: "On-site",
    description:
      "Developed 15+ responsive web applications with React.js. Achieved Lighthouse scores of 95+ consistently. Collaborated with designers to implement pixel-perfect UIs.",
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: "B.Tech Computer Science",
    dateRange: "2016 – 2020",
    institution: "XYZ University",
    description:
      "Graduated with honors. Focused on algorithms, data structures, and software engineering. Led the university's coding club and participated in national hackathons.",
  },
  {
    id: 2,
    degree: "Full Stack Bootcamp",
    dateRange: "2020 – 2021",
    institution: "Online Certification",
    description:
      "Intensive full-stack development program covering MERN stack, DevOps fundamentals, system design patterns, and agile project management methodologies.",
  },
  {
    id: 3,
    degree: "Cloud Architecture",
    dateRange: "2022",
    institution: "AWS Certified",
    description:
      "AWS Solutions Architect certification. Mastered cloud infrastructure, serverless computing, containerization with Docker/Kubernetes, and cost optimization strategies.",
  },
];
