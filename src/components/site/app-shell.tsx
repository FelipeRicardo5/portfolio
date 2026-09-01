import type { ReactNode } from "react";

export function AppShell({ sidebar, children }: { sidebar: ReactNode; children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl">
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-border/60 px-4 py-8 md:flex md:flex-col">
        {sidebar}
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
