"use client";

import {
  Brain,
  Cloud,
  Database,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";
import { skills } from "@/data/skills";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap = {
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
  database: Database,
  brain: Brain,
  cloud: Cloud,
};

export function Skills() {
  return (
    <AnimatedSection id="skills" className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          index="02"
          label="Stack"
          title="Technical Arsenal"
          description="Tools and technologies I use to architect, build, and deploy production systems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <AnimatedItem key={category.category}>
                <GlassCard className="h-full">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/5">
                        <Icon className="h-4 w-4 text-indigo-400" />
                      </div>
                      <h3 className="font-mono text-sm font-semibold text-foreground">
                        {category.category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/50">
                      {String(category.skills.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-indigo-500/20 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
