"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

const stackPreview = skills.slice(0, 4).flatMap((s) => s.skills.slice(0, 2));

export function DevTerminal() {
  const lines = [
    { prompt: "$", text: "whoami", delay: 0 },
    { prompt: ">", text: profile.name, delay: 0.3 },
    { prompt: "$", text: "cat role.txt", delay: 0.6 },
    { prompt: ">", text: profile.role, delay: 0.9 },
    { prompt: "$", text: "stack --list", delay: 1.2 },
    { prompt: ">", text: stackPreview.join(" · "), delay: 1.5 },
    { prompt: "$", text: "status", delay: 1.8 },
    { prompt: ">", text: "● open_to_work", delay: 2.1, accent: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="gradient-border relative overflow-hidden rounded-2xl p-px"
    >
      <div className="rounded-2xl bg-background/80 p-1 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            ~/hamid — zsh
          </span>
        </div>
        <div className="space-y-2 p-5 font-mono text-sm">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.3 }}
              className="flex gap-3"
            >
              <span className="shrink-0 text-indigo-400">{line.prompt}</span>
              <span
                className={
                  line.accent
                    ? "text-emerald-400"
                    : "text-muted-foreground"
                }
              >
                {line.text}
                {i === lines.length - 1 && (
                  <span className="cursor-blink ml-0.5 inline-block h-4 w-2 bg-indigo-400" />
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
