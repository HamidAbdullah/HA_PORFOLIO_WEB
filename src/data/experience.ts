export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "2021 — Present",
    title: "4+ Years Professional Experience",
    description:
      "Delivering full-stack solutions across web, mobile, SaaS, and AI-powered applications for clients worldwide.",
    responsibilities: [
      "Full stack development",
      "Client meetings",
      "Requirements gathering",
      "Architecture design",
      "SaaS development",
      "Mobile development",
      "AI integrations",
    ],
  },
];

export const experienceSummary = {
  years: "4+",
  label: "Years Professional Experience",
  tagline:
    "Building production-grade applications across the full stack — from architecture to deployment.",
};
