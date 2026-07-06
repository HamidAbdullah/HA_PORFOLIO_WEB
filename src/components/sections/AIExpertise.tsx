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
    <AnimatedSection id="ai-expertise" className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          index="04"
          label="AI"
          title="Intelligence Layer"
          description="Engineering AI systems that automate decisions, integrate LLMs, and optimize business operations."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.aiExpertise.map((item, index) => {
            const Icon = aiIcons[index % aiIcons.length];
            return (
              <AnimatedItem key={item.title}>
                <GlassCard className="group h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5 transition-colors group-hover:border-cyan-500/40">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/40">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
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
