"use client";

import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <AnimatedSection id="projects">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Production applications spanning SaaS platforms, mobile apps, and AI-powered solutions."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedItem
              key={project.id}
              className={cn(index === 0 && "md:col-span-2 lg:col-span-1")}
            >
              <GlassCard className="group relative h-full overflow-hidden">
                <div
                  className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br blur-2xl",
                    project.gradient,
                  )}
                />
                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-indigo-400">
                        {project.type}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-foreground">
                        {project.name}
                      </h3>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Responsibilities
                    </p>
                    <ul className="space-y-1">
                      {project.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-indigo-400" />
                          {resp}
                        </li>
                      ))}
                    </ul>
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
