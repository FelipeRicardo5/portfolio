"use client";

import type { ReactNode } from "react";
import { usePanel, type PanelId } from "@/components/site/panel-context";

export function Panel({ id, children }: { id: PanelId; children: ReactNode }) {
  const { activePanel } = usePanel();

  if (activePanel !== id) {
    return null;
  }

  return <>{children}</>;
}
