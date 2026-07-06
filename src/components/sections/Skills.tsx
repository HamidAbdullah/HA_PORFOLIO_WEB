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
    <AnimatedSection id="skills" className="relative bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technologies I Work With"
          description="A comprehensive toolkit for building modern, scalable applications across the full stack."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <AnimatedItem key={category.category}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                      <Icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground"
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
