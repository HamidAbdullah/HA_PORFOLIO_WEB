"use client";

import { ArrowUpRight } from "lucide-react";
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
          index="03"
          label="Work"
          title="Selected Projects"
          description="Production systems I've architected and shipped — from SaaS platforms to mobile products."
        />

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map((project, index) => (
            <AnimatedItem
              key={project.id}
              className={cn(
                index === 0 && "md:col-span-2 lg:row-span-2",
                index === 2 && "lg:col-span-1",
              )}
            >
              <GlassCard
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden",
                  index === 0 && "lg:min-h-[420px]",
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60",
                    project.gradient,
                  )}
                />

                <div className="relative flex flex-1 flex-col">
                  <div className="mb-auto">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-indigo-400">
                          {project.type}
                        </span>
                        <h3
                          className={cn(
                            "mt-2 font-bold text-foreground",
                            index === 0 ? "text-2xl md:text-3xl" : "text-xl",
                          )}
                        >
                          {project.name}
                        </h3>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 opacity-0 transition-all group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <p
                      className={cn(
                        "mt-4 leading-relaxed text-muted-foreground",
                        index === 0 ? "text-base" : "text-sm",
                      )}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-1 font-mono text-[11px] text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-white/5 pt-4">
                      {project.responsibilities.map((resp) => (
                        <span
                          key={resp}
                          className="flex items-center gap-1.5 text-xs text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-cyan-400" />
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
