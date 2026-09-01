"use client";

import { Briefcase, FolderGit2, Layers, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { PortfolioContent } from "@/types/portfolio";

const SECTION_IDS = ["hero", "experience", "projects", "skills", "contact"] as const;

export function SidebarNav({ content }: { content: PortfolioContent }) {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveId(mostVisible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const items = [
    { id: "hero", label: content.hero.role, icon: Sparkles },
    { id: "experience", label: content.navigation.experience, icon: Briefcase },
    { id: "projects", label: content.navigation.projects, icon: FolderGit2 },
    { id: "skills", label: content.skillsByCategory.title, icon: Layers },
    { id: "contact", label: content.navigation.contact, icon: Mail },
  ] as const;

  return (
    <nav aria-label="Section navigation" className="flex flex-col gap-1 text-sm">
      <span className="mb-3 px-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground/70 uppercase">
        {content.locale === "pt-br" ? "Navegação" : "Navigation"}
      </span>
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = activeId === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition",
              isActive
                ? "bg-accent/10 font-medium text-foreground"
                : "text-muted-foreground hover:bg-card/70 hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {label}
          </a>
        );
      })}
    </nav>
  );
}
