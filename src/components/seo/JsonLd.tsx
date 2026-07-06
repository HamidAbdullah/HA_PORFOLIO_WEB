import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url: profile.seo.url,
    address: {
      "@type": "PostalAddress",
      addressCountry: profile.location,
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: skills.flatMap((s) => s.skills),
    hasOccupation: {
      "@type": "Occupation",
      name: profile.role,
      experienceRequirements: `${profile.experience} experience`,
    },
    workExample: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.name,
      description: p.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
