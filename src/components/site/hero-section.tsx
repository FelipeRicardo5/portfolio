"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { PortfolioContent } from "@/types/portfolio";

export function HeroSection({ content }: { content: PortfolioContent }) {
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
              src="/profile.jpg"
              alt="Felipe Ricardo profile"
              fill
              sizes="96px"
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
              priority
            />
            <Image
              src="/profileDraw.png"
              alt="Felipe Ricardo profile drawing"
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
        <p className="mt-6 max-w-2xl text-2xl leading-tight font-medium text-foreground/92 sm:text-3xl">
          {content.hero.headline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{content.hero.subheadline}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            {content.hero.primaryCta}
          </Button>
          <Button
            variant="ghost"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
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
        <div className="relative rounded-3xl border border-border bg-card/80 p-8 shadow-soft backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="space-y-3 font-mono text-xs text-foreground/90">
            <p>{"const engineer = {"}</p>
            <p className="pl-4">{`name: "Felipe Ricardo",`}</p>
            <p className="pl-4">{`focus: ["Performance", "Scalability", "Execution"],`}</p>
            <p className="pl-4">{`strength: "Communication + Delivery"`}</p>
            <p>{"};"}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}