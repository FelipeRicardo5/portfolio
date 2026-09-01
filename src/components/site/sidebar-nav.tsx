"use client";

import { usePanel, type PanelId } from "@/components/site/panel-context";
import { useRovingTabIndex } from "@/lib/use-roving-tab-index";
import { cn } from "@/lib/utils";
import type { PortfolioContent } from "@/types/portfolio";

export function SidebarNav({ content }: { content: PortfolioContent }) {
  const { activePanel, setActivePanel } = usePanel();

  const items: Array<{ id: PanelId; index: string; label: string }> = [
    { id: "overview", index: "01", label: content.hero.role },
    { id: "experience", index: "02", label: content.navigation.experience },
    { id: "projects", index: "03", label: content.navigation.projects },
    { id: "skills", index: "04", label: content.skillsByCategory.title },
    { id: "contact", index: "05", label: content.navigation.contact },
  ];
  const ids = items.map((item) => item.id);
  const { registerRef, handleKeyDown } = useRovingTabIndex(ids, activePanel, setActivePanel, "vertical");

  return (
    <nav aria-label="Section navigation" className="flex flex-1 flex-col gap-1 font-mono text-sm">
      <span className="mb-3 px-3 text-[11px] tracking-[0.02em] text-muted-foreground">
        {content.locale === "pt-br" ? "// selecione uma visão" : "// select a view"}
      </span>
      <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-px">
        {items.map(({ id, index, label }) => {
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
              className={cn("flex items-center gap-2.5 rounded-md px-3 py-2 text-left transition", isActive ? "bg-accent/[0.08]" : "hover:bg-card/70")}
            >
              <span aria-hidden className={cn("text-sm", isActive ? "text-accent" : "text-transparent")}>
                ▸
              </span>
              <span className="text-[11px] text-muted-foreground">{index}</span>
              <span
                className={cn(
                  "text-[13px] tracking-[0.02em] uppercase",
                  isActive ? "font-semibold text-foreground" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
      <p className="mt-auto px-3 pt-4 text-[10px] text-muted-foreground/60">↑↓ navigate · ↵ select</p>
    </nav>
  );
}
