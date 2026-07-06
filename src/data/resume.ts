import { profile } from "./profile";
import { projects } from "./projects";
import { skills } from "./skills";
import { experience } from "./experience";

export const resume = {
  fileName: "Hamid-Abdullah-Resume.txt",
  downloadPath: "/Hamid-Abdullah-Resume.pdf",
  personal: {
    name: profile.name,
    role: profile.role,
    email: profile.email,
    location: profile.location,
    linkedin: profile.linkedin,
    github: profile.github,
  },
  summary: profile.about,
  experience: experience.map((exp) => ({
    period: exp.period,
    title: exp.title,
    responsibilities: exp.responsibilities,
  })),
  projects: projects.map((project) => ({
    name: project.name,
    type: project.type,
    tech: project.tech,
    responsibilities: project.responsibilities,
  })),
  skills: skills.map((category) => ({
    category: category.category,
    skills: category.skills,
  })),
};

export function generateResumeText(): string {
  const lines: string[] = [
    resume.personal.name.toUpperCase(),
    resume.personal.role,
    `${resume.personal.email} | ${resume.personal.location}`,
    `${resume.personal.linkedin} | ${resume.personal.github}`,
    "",
    "SUMMARY",
    "─".repeat(50),
    resume.summary,
    "",
    "EXPERIENCE",
    "─".repeat(50),
  ];

  resume.experience.forEach((exp) => {
    lines.push(`${exp.period} | ${exp.title}`);
    exp.responsibilities.forEach((r) => lines.push(`  • ${r}`));
    lines.push("");
  });

  lines.push("PROJECTS", "─".repeat(50));
  resume.projects.forEach((project) => {
    lines.push(`${project.name} (${project.type})`);
    lines.push(`  Tech: ${project.tech.join(", ")}`);
    lines.push(`  ${project.responsibilities.join(" • ")}`);
    lines.push("");
  });

  lines.push("SKILLS", "─".repeat(50));
  resume.skills.forEach((category) => {
    lines.push(`${category.category}: ${category.skills.join(", ")}`);
  });

  return lines.join("\n");
}
