import { Disclosure } from "@/components/site/disclosure";
import type { Experience, PortfolioContent } from "@/types/portfolio";

export function ExperienceCard({
  experience,
  labels,
  isCurrent,
}: {
  experience: Experience;
  labels: PortfolioContent["experiences"];
  isCurrent: boolean;
}) {
  return (
    <div className="relative pl-6">
      <span
        aria-hidden
        className={`absolute top-1.5 left-[1px] h-2 w-2 rounded-full ${isCurrent ? "bg-accent" : "bg-muted-foreground/60"}`}
      />

      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-xl font-semibold text-foreground">{experience.company}</h3>
        <p className="font-mono text-xs text-muted-foreground">{experience.start}</p>
      </div>
      <p className="mt-1 text-sm font-medium tracking-[0.08em] text-accent uppercase">{experience.role}</p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{experience.description}</p>

      <div className="mt-4">
        <Disclosure
          trigger={
            <span>
              {labels.highlightsLabel} <span className="text-muted-foreground">({experience.highlights.length})</span>
            </span>
          }
        >
          <ul className="mt-3.5 space-y-2 pb-0.5 text-sm leading-6 text-muted-foreground">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </Disclosure>
      </div>
    </div>
  );
}
