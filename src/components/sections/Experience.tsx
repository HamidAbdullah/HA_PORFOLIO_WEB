"use client";

import { experience, experienceSummary } from "@/data/experience";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          index="05"
          label="Experience"
          title="Track Record"
          description={experienceSummary.tagline}
        />

        <div className="mx-auto max-w-4xl">
          {experience.map((item) => (
            <AnimatedItem key={item.period}>
              <GlassCard glow className="relative overflow-hidden">
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

                <div className="relative grid gap-8 md:grid-cols-[200px_1fr]">
                  <div>
                    <p className="font-mono text-4xl font-bold text-foreground">
                      {experienceSummary.years}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Years
                    </p>
                    <p className="mt-6 font-mono text-xs text-indigo-400">
                      {item.period}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.responsibilities.map((resp) => (
                        <span
                          key={resp}
                          className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted-foreground"
                        >
                          {resp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
