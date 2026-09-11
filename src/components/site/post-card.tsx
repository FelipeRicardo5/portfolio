import { Newspaper } from "lucide-react";
import Image from "next/image";
import type { Locale, PortfolioContent, Post } from "@/types/portfolio";

const RULE_ACCENTS = ["bg-accent-blue", "bg-accent-green", "bg-accent-cyan"];

export function PostCard({
  post,
  labels,
  locale,
  index = 0,
}: {
  post: Post;
  labels: PortfolioContent["posts"];
  locale: Locale;
  index?: number;
}) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(locale === "pt-br" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <div className="flex h-full flex-col pt-5">
      <div className={`h-0.5 w-8 rounded-full ${RULE_ACCENTS[index % RULE_ACCENTS.length]}`} />

      {post.image ? (
        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border">
          <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        </div>
      ) : null}

      <p className="mt-4 font-mono text-[11px] text-muted-foreground">
        <span className="text-accent-blue">GET</span> /posts/{post.id}
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{post.title}</h3>
      <p className="mt-2.5 text-sm leading-7 text-muted-foreground">{post.summary}</p>
      <p className="mt-3 font-mono text-[11.5px] text-muted-foreground">{formattedDate}</p>

      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-5 font-mono text-[11.5px]">
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-accent-green transition hover:text-accent-cyan"
        >
          <Newspaper className="h-3.5 w-3.5" />
          {labels.readMoreLabel}
        </a>
      </div>
    </div>
  );
}
