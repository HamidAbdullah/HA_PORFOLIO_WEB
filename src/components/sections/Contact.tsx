"use client";

import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it. Send me a message and I'll respond as soon as possible."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <AnimatedItem className="lg:col-span-2">
            <GlassCard hover={false} className="h-full">
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Get in Touch
              </h3>

              <div className="space-y-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Mail className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <LinkedinIcon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium text-foreground">
                      linkedin.com/in/hamid-abdullah
                    </p>
                  </div>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <GithubIcon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium text-foreground">
                      github.com/hamid-abdullah
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <MapPin className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedItem>

          <AnimatedItem className="lg:col-span-3">
            <GlassCard hover={false}>
              <ContactForm />
            </GlassCard>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
