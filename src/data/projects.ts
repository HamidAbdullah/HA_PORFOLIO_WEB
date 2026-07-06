export interface Project {
  id: string;
  name: string;
  type: string;
  tech: string[];
  responsibilities: string[];
  description: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "islam-encyclo",
    name: "Islam Encyclo",
    type: "Full Stack Platform",
    tech: ["Next.js", "NestJS", "MongoDB"],
    responsibilities: ["Frontend", "Backend", "APIs", "Database Design"],
    description:
      "A comprehensive full-stack platform delivering rich content, user management, and scalable API architecture.",
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    id: "islam-connect",
    name: "Islam Connect",
    type: "Mobile Application",
    tech: ["React Native", "Node.js", "MongoDB"],
    responsibilities: ["Mobile App", "Backend", "Deployment"],
    description:
      "Cross-platform mobile application with real-time features, backend services, and production deployment.",
    gradient: "from-blue-500/20 to-indigo-600/20",
  },
  {
    id: "wimbo",
    name: "Wimbo",
    type: "SaaS Product",
    tech: ["React", "Next.js", "NestJS"],
    responsibilities: [
      "Full Product Development",
      "Architecture",
      "API Design",
    ],
    description:
      "End-to-end SaaS product with subscription management, dashboards, and scalable microservices architecture.",
    gradient: "from-violet-500/20 to-purple-600/20",
  },
  {
    id: "promo-loco",
    name: "Promo Loco",
    type: "Marketing Platform",
    tech: ["React", "Node.js", "MongoDB"],
    responsibilities: ["Dashboard", "Campaign Tools", "Full Stack Development"],
    description:
      "Marketing platform with campaign management tools, analytics dashboards, and full-stack development.",
    gradient: "from-orange-500/20 to-amber-600/20",
  },
  {
    id: "gringo",
    name: "Gringo",
    type: "Mobile & Web Product",
    tech: ["React Native", "Express.js"],
    responsibilities: [
      "App Development",
      "API Integration",
      "Performance Improvements",
    ],
    description:
      "Dual-platform product spanning mobile and web with API integrations and performance optimizations.",
    gradient: "from-rose-500/20 to-pink-600/20",
  },
];
