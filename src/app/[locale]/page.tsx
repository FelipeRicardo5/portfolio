import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/site/about-section";
import { AdvantageSection } from "@/components/site/advantage-section";
import { AppShell } from "@/components/site/app-shell";
import { BackgroundEffects } from "@/components/site/background-effects";
import { ContactSection } from "@/components/site/contact-section";
import { ExperiencesSection } from "@/components/site/experiences-section";
import { HeroSection } from "@/components/site/hero-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SkillsSection } from "@/components/site/skills-section";
import { portfolioContent } from "@/data/portfolio-content";
import { isLocale } from "@/lib/i18n";
import { locales, type Locale } from "@/types/portfolio";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = portfolioContent[locale];

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        "pt-BR": "/pt-br",
      },
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "website",
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
    },
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = portfolioContent[locale];
  const jsonLd = getPersonSchema(locale, content.socialLinks.github, content.socialLinks.linkedin, content.socialLinks.email);

  return (
    <div className="relative" lang={locale === "pt-br" ? "pt-BR" : "en"}>
      <BackgroundEffects />
      <SiteHeader locale={locale} content={content} />
      <AppShell
        sidebar={
          <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
            <span className="mb-3 px-3 text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground/70">
              {content.navigation.experience === "Experience" ? "Overview" : "Visão Geral"}
            </span>
            <a href="#hero" className="rounded-lg px-3 py-2 transition hover:bg-card/70 hover:text-foreground">
              {content.hero.role}
            </a>
            <a href="#experience" className="rounded-lg px-3 py-2 transition hover:bg-card/70 hover:text-foreground">
              {content.navigation.experience}
            </a>
            <a href="#projects" className="rounded-lg px-3 py-2 transition hover:bg-card/70 hover:text-foreground">
              {content.navigation.projects}
            </a>
            <a href="#skills" className="rounded-lg px-3 py-2 transition hover:bg-card/70 hover:text-foreground">
              {content.skillsByCategory.title}
            </a>
            <a href="#contact" className="rounded-lg px-3 py-2 transition hover:bg-card/70 hover:text-foreground">
              {content.navigation.contact}
            </a>
          </nav>
        }
      >
        <main>
          <HeroSection content={content} />
          <AboutSection content={content} />
          <ExperiencesSection content={content} />
          <ProjectsSection content={content} />
          <SkillsSection content={content} />
          <AdvantageSection content={content} />
          <ContactSection locale={locale} content={content} />
        </main>
      </AppShell>
      <SiteFooter content={content} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

function getPersonSchema(locale: Locale, github: string, linkedin: string, email: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Felipe Ricardo",
    jobTitle: locale === "pt-br" ? "Engenheiro Full Stack" : "Full Stack Engineer",
    email,
    url: `https://felipericardo.dev/${locale}`,
    sameAs: [github, linkedin],
  };
}
