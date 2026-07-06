"use client";

import { FileText } from "lucide-react";
import { resume } from "@/data/resume";
import { skills } from "@/data/skills";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { DownloadResumeButton } from "@/components/ui/DownloadResumeButton";

export function ResumeSection() {
  return (
    <AnimatedSection id="resume" className="relative bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Resume"
          title="Download My Resume"
          description="Get a comprehensive overview of my skills, experience, and project portfolio."
        />

        <AnimatedItem>
          <GlassCard hover={false} className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10">
              <FileText className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              {resume.personal.name}
            </h3>
            <p className="mt-1 text-muted-foreground">{resume.personal.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {resume.summary.slice(0, 180)}...
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {skills.slice(0, 4).map((cat) => (
                <span
                  key={cat.category}
                  className="rounded-lg border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                >
                  {cat.category}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <DownloadResumeButton size="lg" variant="primary" />
            </div>
          </GlassCard>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
