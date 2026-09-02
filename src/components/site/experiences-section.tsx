import { Reveal } from "@/components/motion/reveal";
import { ExperienceCard } from "@/components/site/experience-card";
import { MethodTag } from "@/components/site/method-tag";
import { SectionShell } from "@/components/site/section-shell";
import type { PortfolioContent } from "@/types/portfolio";

export function ExperiencesSection({ content }: { content: PortfolioContent }) {
  return (
    <SectionShell>
      <Reveal>
        <MethodTag method="GET" path="/experience" />
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{content.experiences.title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{content.experiences.description}</p>
      </Reveal>

      <div className="relative mt-10">
        <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-border" />
        <div className="space-y-10">
          {content.experiences.items.map((experience, index) => (
            <Reveal key={experience.id} delay={0.06 * index}>
              <ExperienceCard
                experience={experience}
                labels={content.experiences}
                isCurrent={experience.start.includes("Present")}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
