import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/site/project-card";
import { SectionShell } from "@/components/site/section-shell";
import type { PortfolioContent } from "@/types/portfolio";

export function ProjectsSection({ content }: { content: PortfolioContent }) {
  return (
    <SectionShell>
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">{content.projects.title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{content.projects.description}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.projects.items.map((project, index) => (
          <Reveal key={project.id} delay={0.06 * index}>
            <ProjectCard project={project} labels={content.projects} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
