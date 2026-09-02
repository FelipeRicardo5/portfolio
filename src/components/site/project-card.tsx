import { Code2, ExternalLink } from "lucide-react";
import { Disclosure } from "@/components/site/disclosure";
import type { PortfolioContent, Project } from "@/types/portfolio";

const RULE_ACCENTS = ["bg-accent-blue", "bg-accent-green", "bg-accent-cyan"];

export function ProjectCard({
  project,
  labels,
  index = 0,
}: {
  project: Project;
  labels: PortfolioContent["projects"];
  index?: number;
}) {
  return (
    <div className="flex h-full flex-col pt-5">
      <div className={`h-0.5 w-8 rounded-full ${RULE_ACCENTS[index % RULE_ACCENTS.length]}`} />

      <p className="mt-4 font-mono text-[11px] text-muted-foreground">
        <span className="text-accent-blue">GET</span> /projects/{project.id}
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
      <p className="mt-2.5 text-sm leading-7 text-muted-foreground">{project.summary}</p>
      <p className="mt-3 font-mono text-[11.5px] text-muted-foreground">{project.tech.join(" · ")}</p>

      <div className="mt-4">
        <Disclosure trigger={labels.breakdownLabel}>
          <div className="mt-3.5 space-y-2.5 pb-0.5 text-sm leading-6 text-muted-foreground">
            <p><span className="font-medium text-foreground">{labels.problemLabel}:</span> {project.problem}</p>
            <p><span className="font-medium text-foreground">{labels.solutionLabel}:</span> {project.solution}</p>
            <p><span className="font-medium text-foreground">{labels.impactLabel}:</span> {project.impact}</p>
          </div>
        </Disclosure>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-5 font-mono text-[11.5px]">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground transition hover:text-accent-blue"
          >
            <Code2 className="h-3.5 w-3.5" />
            {labels.githubLabel}
          </a>
        ) : null}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-accent-green transition hover:text-accent-cyan"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {labels.liveLabel}
          </a>
        ) : null}

        {!project.githubUrl && !project.liveUrl ? (
          <span className="text-muted-foreground">{labels.comingSoonLabel}</span>
        ) : null}
      </div>
    </div>
  );
}
