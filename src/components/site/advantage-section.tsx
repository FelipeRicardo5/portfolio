import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/site/section-shell";
import { Card } from "@/components/ui/card";
import type { PortfolioContent } from "@/types/portfolio";

export function AdvantageSection({ content }: { content: PortfolioContent }) {
  return (
    <SectionShell>
      <Reveal>
        <Card className="relative overflow-hidden border-accent/35">
          <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <h2 className="relative mt-4 text-3xl font-semibold tracking-tight text-foreground">{content.advantage.title}</h2>
          <p className="relative mt-5 max-w-3xl text-base leading-7 text-muted-foreground">{content.advantage.body}</p>
        </Card>
      </Reveal>
    </SectionShell>
  );
}
