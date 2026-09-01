"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePanel } from "@/components/site/panel-context";
import { Button } from "@/components/ui/button";
import type { PortfolioContent } from "@/types/portfolio";

export function HeroSection({ content }: { content: PortfolioContent }) {
  const { setActivePanel } = usePanel();
  const stack = content.skillsByCategory.categories[0]?.skills.slice(0, 3) ?? [];

  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-16 pt-18 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-24 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
      >
        <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">{content.hero.role}</p>
        <div className="flex flex-wrap items-end gap-4">
          <div className="group relative h-24 w-24 overflow-hidden rounded-2xl border border-border shadow-soft">
            <Image
              src="/profileDraw.jpg"
              alt="Felipe Ricardo profile drawing"
              fill
              sizes="96px"
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
              priority
            />
            <Image
              src="/profile.png"
              alt="Felipe Ricardo profile"
              fill
              sizes="96px"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              priority
            />
          </div>
          <h1 className="max-w-xl text-5xl leading-[1.02] font-semibold tracking-tight text-foreground sm:text-6xl">
            {content.hero.name}
          </h1>
        </div>
        <p aria-hidden className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20V6" />
            <path d="M6 12l6-6 6 6" />
          </svg>
          {content.locale === "pt-br" ? "passe o mouse aqui!" : "hover here!"}
        </p>
        <p className="mt-6 max-w-2xl text-2xl leading-tight font-medium text-foreground/92 sm:text-3xl">
          {content.hero.headline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{content.hero.subheadline}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button onClick={() => setActivePanel("projects")} className="font-mono">
            <span aria-hidden className="mr-2 text-white/70">
              {">"}
            </span>
            {content.hero.primaryCta}
          </Button>
          <Button variant="ghost" onClick={() => setActivePanel("contact")} className="font-mono">
            <span aria-hidden className="mr-2 text-muted-foreground">
              {">"}
            </span>
            {content.hero.secondaryCta}
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="relative"
      >
        <p className="mb-3 font-mono text-xs text-muted-foreground">
          <span className="text-accent">$</span> curl -s api.felipericardo.dev/v1/engineer
        </p>
        <div className="relative rounded-3xl border border-border bg-card/80 p-6 shadow-soft backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="rounded-md bg-accent/15 px-2 py-1 font-semibold text-accent">GET</span>
              <span className="text-foreground/90">/v1/engineer</span>
            </div>
            <span className="rounded-full bg-accent-green/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-accent-green">
              200 OK
            </span>
          </div>
          <div className="space-y-1.5 font-mono text-xs leading-6 text-foreground/90">
            <p>{"{"}</p>
            <p className="pl-4">
              <span className="text-accent">&quot;name&quot;</span>: <span className="text-accent-cyan">&quot;{content.hero.name}&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-accent">&quot;role&quot;</span>: <span className="text-accent-cyan">&quot;{content.hero.role}&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-accent">&quot;stack&quot;</span>:{" "}
              [
              {stack.map((tech, index) => (
                <span key={tech}>
                  <span className="text-accent-cyan">&quot;{tech}&quot;</span>
                  {index < stack.length - 1 ? ", " : ""}
                </span>
              ))}
              ],
            </p>
            <p className="pl-4">
              <span className="text-accent">&quot;status&quot;</span>: <span className="text-accent-green">200</span>
            </p>
            <p>{"}"}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}