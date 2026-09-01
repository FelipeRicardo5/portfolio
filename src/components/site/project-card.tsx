import { Code2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { PortfolioContent, Project } from "@/types/portfolio";

export function ProjectCard({ project, labels }: { project: Project; labels: PortfolioContent["projects"] }) {
  return (
    <Card className="group flex h-full flex-col">
      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
            {item}
          </span>
        ))}
      </div>

      <details className="mt-5 rounded-xl border border-border/80 bg-background/35 p-4">
        <summary className="cursor-pointer text-sm font-medium text-foreground">{labels.breakdownLabel}</summary>
        <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
          <p><span className="font-semibold text-foreground">{labels.problemLabel}:</span> {project.problem}</p>
          <p><span className="font-semibold text-foreground">{labels.solutionLabel}:</span> {project.solution}</p>
          <p><span className="font-semibold text-foreground">{labels.impactLabel}:</span> {project.impact}</p>
        </div>
      </details>

      <div className="mt-6 flex gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            <Code2 className="h-3.5 w-3.5" />
            {labels.githubLabel}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
            <Code2 className="h-3.5 w-3.5" />
            {labels.comingSoonLabel}
          </span>
        )}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {labels.liveLabel}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
            <ExternalLink className="h-3.5 w-3.5" />
            {labels.comingSoonLabel}
          </span>
        )}
      </div>
    </Card>
  );
}