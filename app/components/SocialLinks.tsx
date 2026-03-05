// app/components/SocialLinks.tsx
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import type { SocialLink } from "@/types";
import { cn } from "@/app/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  mail: <Mail size={18} />,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md";
}

export default function SocialLinks({
  links,
  className,
  showLabel = false,
  size = "md",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map(({ label, url, icon }) => (
        <a
          key={label}
          href={url}
          target={url.startsWith("mailto") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "flex items-center gap-2 border border-slate-700/50 rounded transition-all duration-200",
            "text-slate-500 hover:text-brand-cyan hover:border-brand-cyan/40",
            size === "sm" ? "p-2" : "px-4 py-2.5"
          )}
        >
          {ICON_MAP[icon]}
          {showLabel && (
            <span className="font-mono text-[11px] tracking-[2px] uppercase">
              {label}
            </span>
          )}
          {showLabel && <ExternalLink size={10} className="opacity-40" />}
        </a>
      ))}
    </div>
  );
}
