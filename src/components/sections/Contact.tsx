"use client";

import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/forms/ContactForm";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hamid-abdullah",
    href: profile.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/hamid-abdullah",
    href: profile.github,
    icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <AnimatedSection id="contact" className="relative pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          index="07"
          label="Contact"
          title="Start a Conversation"
          description="Building something ambitious? Let's discuss architecture, timelines, and how I can help ship it."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <AnimatedItem className="lg:col-span-2">
            <GlassCard hover={false} className="h-full">
              <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">
                Connect
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Direct Channels
              </h3>

              <div className="mt-6 space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all hover:border-white/5 hover:bg-white/[0.03]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-indigo-500/30">
                        <Icon className="h-4 w-4 text-indigo-400" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {link.label}
                        </p>
                        <p className="text-sm text-foreground">{link.value}</p>
                      </div>
                    </a>
                  );
                })}

                <div className="flex items-center gap-4 rounded-xl p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <MapPin className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="text-sm text-foreground">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="flex items-center gap-2">
                  <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-emerald-400">
                    {profile.availability}
                  </span>
                </div>
              </div>
            </GlassCard>
          </AnimatedItem>

          <AnimatedItem className="lg:col-span-3">
            <GlassCard hover={false}>
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Send a message
              </p>
              <ContactForm />
            </GlassCard>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
