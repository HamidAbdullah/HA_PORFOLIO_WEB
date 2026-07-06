import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {index && (
          <span className="font-mono text-xs text-indigo-400/60">{index}</span>
        )}
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          {label}
        </span>
        <span className="hidden h-px w-12 bg-gradient-to-r from-indigo-500/50 to-transparent sm:block" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
