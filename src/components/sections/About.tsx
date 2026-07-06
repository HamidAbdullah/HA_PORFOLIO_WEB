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
          index="01"
          label="About"
          title="Building Software That Ships"
          description={profile.about}
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <AnimatedItem className="lg:col-span-2">
            <GlassCard hover={false} glow className="sticky top-28 h-fit">
              <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">
                Core Focus
              </p>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                {profile.role}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {profile.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                <div>
                  <p className="font-mono text-2xl font-bold text-foreground">
                    {profile.experience}
                  </p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-bold text-foreground">
                    20+
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Projects Delivered
                  </p>
                </div>
              </div>
            </GlassCard>
          </AnimatedItem>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {profile.aboutHighlights.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <AnimatedItem
                  key={item.title}
                  className={index === 0 ? "sm:col-span-2" : ""}
                >
                  <GlassCard className="h-full">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                        <Icon className="h-5 w-5 text-indigo-400" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </GlassCard>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
