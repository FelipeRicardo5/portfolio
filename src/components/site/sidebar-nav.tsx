"use client";

import { Briefcase, FolderGit2, Layers, Mail, Sparkles } from "lucide-react";
import { usePanel, type PanelId } from "@/components/site/panel-context";
import { cn } from "@/lib/utils";
import type { PortfolioContent } from "@/types/portfolio";

export function SidebarNav({ content }: { content: PortfolioContent }) {
  const { activePanel, setActivePanel } = usePanel();

  const items: Array<{ id: PanelId; label: string; icon: typeof Sparkles }> = [
    { id: "overview", label: content.hero.role, icon: Sparkles },
    { id: "experience", label: content.navigation.experience, icon: Briefcase },
    { id: "projects", label: content.navigation.projects, icon: FolderGit2 },
    { id: "skills", label: content.skillsByCategory.title, icon: Layers },
    { id: "contact", label: content.navigation.contact, icon: Mail },
  ];

  return (
    <nav aria-label="Section navigation" className="flex flex-col gap-1 text-sm">
      <span className="mb-3 px-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground/70 uppercase">
        {content.locale === "pt-br" ? "Navegação" : "Navigation"}
      </span>
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = activePanel === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => setActivePanel(id)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-left transition",
              isActive
                ? "bg-accent/10 font-medium text-foreground"
                : "text-muted-foreground hover:bg-card/70 hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {label}
          </button>
        );
      })}
    </nav>
  );
}
