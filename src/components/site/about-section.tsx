import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/site/section-shell";
import type { PortfolioContent } from "@/types/portfolio";

export function AboutSection({ content }: { content: PortfolioContent }) {
  return (
    <SectionShell>
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{content.about.title}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{content.about.body}</p>
      </Reveal>
    </SectionShell>
  );
}
