import { Reveal } from "@/components/motion/reveal";
import { MethodTag } from "@/components/site/method-tag";
import { SectionShell } from "@/components/site/section-shell";
import { Card } from "@/components/ui/card";
import type { PortfolioContent } from "@/types/portfolio";

export function ExperiencesSection({ content }: { content: PortfolioContent }) {
  return (
    <SectionShell>
      <Reveal>
        <MethodTag method="GET" path="/experience" />
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{content.experiences.title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{content.experiences.description}</p>
      </Reveal>

      <div className="mt-10 grid gap-5">
        {content.experiences.items.map((experience, index) => (
          <Reveal key={experience.id} delay={0.06 * index}>
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-foreground">{experience.company}</h3>
                <p className="text-sm text-muted-foreground">{experience.start}</p>
              </div>
              <p className="mt-1 text-sm font-medium tracking-[0.08em] text-accent uppercase">{experience.role}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{experience.description}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}