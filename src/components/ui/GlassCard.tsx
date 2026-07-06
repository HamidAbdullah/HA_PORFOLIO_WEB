import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "gradient-border relative rounded-2xl p-6",
        hover &&
          "transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/5",
        glow && "shadow-lg shadow-indigo-500/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
