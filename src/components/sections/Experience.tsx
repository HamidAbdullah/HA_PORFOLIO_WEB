"use client";

import { CheckCircle2 } from "lucide-react";
import { experience, experienceSummary } from "@/data/experience";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description={experienceSummary.tagline}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent md:block" />

          {experience.map((item) => (
            <AnimatedItem key={item.period}>
              <div className="relative md:pl-16">
                <div className="absolute left-4 top-6 hidden h-4 w-4 rounded-full border-2 border-indigo-500 bg-background md:block" />

                <GlassCard className="mb-8">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
                      {item.period}
                    </span>
                    <span className="text-3xl font-bold text-foreground">
                      {experienceSummary.years}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Responsibilities
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {item.responsibilities.map((resp) => (
                      <li
                        key={resp}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-400" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
