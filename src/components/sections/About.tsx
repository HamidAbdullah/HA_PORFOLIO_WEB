"use client";

import {
  Bot,
  Code2,
  Rocket,
  Smartphone,
  Users,
} from "lucide-react";
import { profile } from "@/data/profile";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap = {
  code: Code2,
  smartphone: Smartphone,
  bot: Bot,
  rocket: Rocket,
  users: Users,
};

export function About() {
  return (
    <AnimatedSection id="about" className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title={`Hi, I'm ${profile.name.split(" ")[0]}`}
          description={profile.about}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.aboutHighlights.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <AnimatedItem key={item.title}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
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

        <AnimatedItem className="mt-12">
          <GlassCard hover={false} className="text-center">
            <p className="text-sm text-muted-foreground">Education</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {profile.education.degree}
            </p>
            <p className="text-sm text-muted-foreground">
              {profile.education.institution} — {profile.education.semester}
            </p>
          </GlassCard>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
