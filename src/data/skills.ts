export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
    icon: "layout",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets"],
    icon: "server",
  },
  {
    category: "Mobile",
    skills: ["React Native CLI", "Expo"],
    icon: "smartphone",
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    icon: "database",
  },
  {
    category: "AI & Automation",
    skills: [
      "AI Agents",
      "OpenAI APIs",
      "LLM Integrations",
      "n8n",
      "AI Model Training",
    ],
    icon: "brain",
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Linux", "CI/CD", "Nginx"],
    icon: "cloud",
  },
];
