import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/site/section-shell";
import { Card } from "@/components/ui/card";
import type { PortfolioContent } from "@/types/portfolio";

export function SkillsSection({ content }: { content: PortfolioContent }) {
  return (
    <SectionShell>
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{content.skillsByCategory.title}</h2>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {content.skillsByCategory.categories.map((category, index) => (
          <Reveal key={category.name} delay={0.06 * index}>
            <Card>
              <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground uppercase">{category.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/90 bg-background/55 px-3 py-1.5 text-xs font-medium text-foreground/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
