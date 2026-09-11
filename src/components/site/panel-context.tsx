"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export const PANEL_IDS = ["overview", "experience", "projects", "posts", "skills", "contact"] as const;

export type PanelId = (typeof PANEL_IDS)[number];

type PanelContextValue = {
  activePanel: PanelId;
  setActivePanel: (id: PanelId) => void;
};

const PanelContext = createContext<PanelContextValue | null>(null);

export function PanelProvider({ children }: { children: ReactNode }) {
  const [activePanel, setActivePanelState] = useState<PanelId>("overview");

  const setActivePanel = (id: PanelId) => {
    setActivePanelState(id);
    window.scrollTo({ top: 0 });
  };

  return <PanelContext.Provider value={{ activePanel, setActivePanel }}>{children}</PanelContext.Provider>;
}

export function usePanel() {
  const context = useContext(PanelContext);

  if (!context) {
    throw new Error("usePanel must be used within a PanelProvider");
  }

  return context;
}
