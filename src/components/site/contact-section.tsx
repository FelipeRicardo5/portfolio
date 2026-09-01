import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { SectionShell } from "@/components/site/section-shell";
import type { Locale, PortfolioContent } from "@/types/portfolio";

export function ContactSection({ locale, content }: { locale: Locale; content: PortfolioContent }) {
  return (
    <SectionShell className="pb-20">
      <Reveal>
        <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-foreground">{content.cta.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{content.cta.body}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <a href={`mailto:${content.socialLinks.email}`} className="transition hover:text-foreground">
            {content.socialLinks.email}
          </a>
          <a href={content.socialLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
            GitHub
          </a>
          <a href={content.socialLinks.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
            LinkedIn
          </a>
        </div>
        <ContactForm locale={locale} content={content} />
      </Reveal>
    </SectionShell>
  );
}
