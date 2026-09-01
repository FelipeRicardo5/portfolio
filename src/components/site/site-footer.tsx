import { Code2, Network, Mail } from "lucide-react";
import type { PortfolioContent } from "@/types/portfolio";

export function SiteFooter({ content }: { content: PortfolioContent }) {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center md:px-10">
        <p className="text-xs tracking-[0.12em] text-muted-foreground uppercase">Felipe Ricardo</p>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <a href={content.socialLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-foreground" aria-label="GitHub">
            <Code2 className="h-4 w-4" />
          </a>
          <a href={content.socialLinks.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-foreground" aria-label="LinkedIn">
            <Network className="h-4 w-4" />
          </a>
          <a href={`mailto:${content.socialLinks.email}`} className="transition hover:text-foreground" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}