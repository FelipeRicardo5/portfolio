"use client";

import { usePanel, type PanelId } from "@/components/site/panel-context";
import { useRovingTabIndex } from "@/lib/use-roving-tab-index";
import { cn } from "@/lib/utils";
import type { PortfolioContent } from "@/types/portfolio";

export function MobileNav({ content }: { content: PortfolioContent }) {
  const { activePanel, setActivePanel } = usePanel();
  const isPtBr = content.locale === "pt-br";

  const items: Array<{ id: PanelId; code: string; label: string }> = [
    { id: "overview", code: isPtBr ? "VG" : "OV", label: isPtBr ? "Visão Geral" : "Overview" },
    { id: "experience", code: "EX", label: content.navigation.experience },
    { id: "projects", code: "PR", label: content.navigation.projects },
    { id: "skills", code: isPtBr ? "ST" : "SK", label: content.skillsByCategory.title },
    { id: "contact", code: "CT", label: content.navigation.contact },
  ];
  const ids = items.map((item) => item.id);
  const { registerRef, handleKeyDown } = useRovingTabIndex(ids, activePanel, setActivePanel, "horizontal");

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-1.5 border-t border-border/60 bg-background/90 px-2 py-2 font-mono backdrop-blur-xl md:hidden"
    >
      <div role="tablist" aria-orientation="horizontal" className="flex flex-1 items-center gap-1.5">
        {items.map(({ id, code, label }) => {
          const isActive = activePanel === id;

          return (
            <button
              key={id}
              ref={registerRef(id)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              aria-label={label}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActivePanel(id)}
              onKeyDown={handleKeyDown}
              className={cn(
                "flex h-9 flex-1 items-center justify-center rounded-md text-[11px] font-semibold transition",
                isActive ? "bg-accent/[0.12] text-accent" : "text-muted-foreground"
              )}
            >
              {code}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
