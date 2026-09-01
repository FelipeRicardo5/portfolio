import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24", className)}>
      {children}
    </section>
  );
}