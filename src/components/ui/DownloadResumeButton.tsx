"use client";

import { Download } from "lucide-react";
import { generateResumeText, resume } from "@/data/resume";
import { Button } from "@/components/ui/Button";

interface DownloadResumeButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function DownloadResumeButton({
  variant = "secondary",
  size = "md",
  className,
}: DownloadResumeButtonProps) {
  const handleDownload = () => {
    const text = generateResumeText();
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={handleDownload}
    >
      <Download className="h-4 w-4" />
      Download Resume
    </Button>
  );
}
