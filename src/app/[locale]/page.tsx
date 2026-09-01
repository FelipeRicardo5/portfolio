import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/site/about-section";
import { AdvantageSection } from "@/components/site/advantage-section";
import { AppShell } from "@/components/site/app-shell";
import { BackgroundEffects } from "@/components/site/background-effects";
import { ContactSection } from "@/components/site/contact-section";
import { ExperiencesSection } from "@/components/site/experiences-section";
import { HeroSection } from "@/components/site/hero-section";
import { MobileNav } from "@/components/site/mobile-nav";
import { Panel } from "@/components/site/panel";
import { PanelProvider } from "@/components/site/panel-context";
import { ProjectsSection } from "@/components/site/projects-section";
import { SidebarNav } from "@/components/site/sidebar-nav";
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
      <PanelProvider>
        <SiteHeader locale={locale} content={content} />
        <AppShell sidebar={<SidebarNav content={content} />}>
          <main className="pb-20 md:pb-0">
            <Panel id="overview" label={locale === "pt-br" ? "Visão Geral" : "Overview"}>
              <HeroSection content={content} />
              <AboutSection content={content} />
              <AdvantageSection content={content} />
            </Panel>
            <Panel id="experience" label={content.navigation.experience}>
              <ExperiencesSection content={content} />
            </Panel>
            <Panel id="projects" label={content.navigation.projects}>
              <ProjectsSection content={content} />
            </Panel>
            <Panel id="skills" label={content.skillsByCategory.title}>
              <SkillsSection content={content} />
            </Panel>
            <Panel id="contact" label={content.navigation.contact}>
              <ContactSection locale={locale} content={content} />
            </Panel>
          </main>
        </AppShell>
        <MobileNav content={content} />
      </PanelProvider>
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
