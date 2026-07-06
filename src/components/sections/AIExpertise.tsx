"use client";

import {
  Bot,
  Brain,
  Cpu,
  GitBranch,
  Sparkles,
  Workflow,
} from "lucide-react";
import { profile } from "@/data/profile";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const aiIcons = [Bot, Brain, Workflow, GitBranch, Cpu, Sparkles];

export function AIExpertise() {
  return (
    <AnimatedSection id="ai-expertise" className="relative bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="AI Expertise"
          title="Intelligent Solutions & Automation"
          description="Leveraging cutting-edge AI technologies to build smart, automated systems that drive business value."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.aiExpertise.map((item, index) => {
            const Icon = aiIcons[index % aiIcons.length];
            return (
              <AnimatedItem key={item.title}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </GlassCard>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
