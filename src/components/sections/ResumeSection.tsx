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
    <AnimatedSection id="resume" className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          index="06"
          label="Resume"
          title="Professional Overview"
          description="Download a full breakdown of my experience, projects, and technical capabilities."
        />

        <AnimatedItem>
          <GlassCard hover={false} glow className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:gap-8 md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/5">
                <FileText className="h-8 w-8 text-indigo-400" />
              </div>
              <div className="mt-6 flex-1 md:mt-0">
                <h3 className="text-xl font-bold text-foreground">
                  {resume.personal.name}
                </h3>
                <p className="mt-1 font-mono text-sm text-indigo-400">
                  {resume.personal.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {resume.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 md:justify-start justify-center">
                  {skills.map((cat) => (
                    <span
                      key={cat.category}
                      className="rounded-md border border-white/5 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {cat.category}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex justify-center md:justify-start">
                  <DownloadResumeButton size="lg" variant="primary" />
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
