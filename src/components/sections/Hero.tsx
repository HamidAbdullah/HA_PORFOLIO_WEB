"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { DownloadResumeButton } from "@/components/ui/DownloadResumeButton";
import { DevTerminal } from "@/components/ui/DevTerminal";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const headingWords = profile.hero.heading.split(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {profile.availability}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {profile.location}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-3 font-mono text-sm text-indigo-400"
            >
              {profile.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem]"
            >
              {headingWords.map((word, i) => {
                const isHighlight = profile.hero.highlighted.some((h) =>
                  word.includes(h),
                );
                return (
                  <span key={i}>
                    {isHighlight ? (
                      <span className="text-gradient">{word} </span>
                    ) : (
                      <span>{word} </span>
                    )}
                  </span>
                );
              })}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-2 font-mono text-sm text-muted-foreground"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {profile.hero.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <DownloadResumeButton size="lg" variant="secondary" />
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {profile.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-border rounded-xl px-4 py-4"
                >
                  <p className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {stat.value}
                    <span className="text-lg text-indigo-400">
                      {stat.suffix}
                    </span>
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <DevTerminal />
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={() => scrollToSection("about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground lg:bottom-8"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
