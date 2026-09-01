"use client";

import type { ReactNode } from "react";
import { usePanel, type PanelId } from "@/components/site/panel-context";

export function Panel({ id, label, children }: { id: PanelId; label: string; children: ReactNode }) {
  const { activePanel } = usePanel();
  const isActive = activePanel === id;

  return (
    <div id={`panel-${id}`} role="tabpanel" aria-label={label} hidden={!isActive} aria-hidden={!isActive}>
      {children}
    </div>
  );
}
