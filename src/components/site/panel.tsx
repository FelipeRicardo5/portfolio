"use client";

import type { ReactNode } from "react";
import { usePanel, type PanelId } from "@/components/site/panel-context";

export function Panel({ id, children }: { id: PanelId; children: ReactNode }) {
  const { activePanel } = usePanel();
  const isActive = activePanel === id;

  return (
    <div hidden={!isActive} aria-hidden={!isActive}>
      {children}
    </div>
  );
}
