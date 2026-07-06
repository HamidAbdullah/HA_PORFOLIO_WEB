import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md",
        hover &&
          "transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-indigo-500/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
