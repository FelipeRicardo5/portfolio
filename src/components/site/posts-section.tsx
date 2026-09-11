import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { MethodTag } from "@/components/site/method-tag";
import { PostCard } from "@/components/site/post-card";
import { SectionShell } from "@/components/site/section-shell";
import type { PortfolioContent } from "@/types/portfolio";

export function PostsSection({ content }: { content: PortfolioContent }) {
  return (
    <SectionShell>
      <Reveal>
        <MethodTag method="GET" path="/posts" />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">{content.posts.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{content.posts.description}</p>
          </div>
          <a
            href={content.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] text-accent-blue transition hover:text-accent-cyan"
          >
            {content.posts.viewAllLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {content.posts.items.map((post, index) => (
          <Reveal key={post.id} delay={0.06 * index}>
            <PostCard post={post} labels={content.posts} locale={content.locale} index={index} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
