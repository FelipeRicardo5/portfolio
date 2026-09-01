"use client";

import { Briefcase, FolderGit2, Layers, Mail, Sparkles } from "lucide-react";
import { usePanel, type PanelId } from "@/components/site/panel-context";
import { useRovingTabIndex } from "@/lib/use-roving-tab-index";
import { cn } from "@/lib/utils";
import type { PortfolioContent } from "@/types/portfolio";

export function MobileNav({ content }: { content: PortfolioContent }) {
  const { activePanel, setActivePanel } = usePanel();

  const items: Array<{ id: PanelId; label: string; icon: typeof Sparkles }> = [
    { id: "overview", label: content.locale === "pt-br" ? "Visão Geral" : "Overview", icon: Sparkles },
    { id: "experience", label: content.navigation.experience, icon: Briefcase },
    { id: "projects", label: content.navigation.projects, icon: FolderGit2 },
    { id: "skills", label: content.skillsByCategory.title, icon: Layers },
    { id: "contact", label: content.navigation.contact, icon: Mail },
  ];
  const ids = items.map((item) => item.id);
  const { registerRef, handleKeyDown } = useRovingTabIndex(ids, activePanel, setActivePanel, "horizontal");

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-between border-t border-border/60 bg-background/90 px-1 py-1.5 backdrop-blur-xl md:hidden"
    >
      <div role="tablist" aria-orientation="horizontal" className="flex flex-1 items-stretch justify-between">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = activePanel === id;

          return (
            <button
              key={id}
              ref={registerRef(id)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActivePanel(id)}
              onKeyDown={handleKeyDown}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-lg px-1 py-1.5 text-[10px] leading-tight transition",
                isActive ? "text-accent" : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
