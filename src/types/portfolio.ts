export const locales = ["en", "pt-br"] as const;

export type Locale = (typeof locales)[number];

export type ProjectLinkStatus = "ready" | "coming_soon";

export type Project = {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  linkStatus: ProjectLinkStatus;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  start: string;
  description: string;
  highlights: string[];
};

export type PortfolioContent = {
  locale: Locale;
  seo: {
    title: string;
    description: string;
  };
  navigation: {
    experience: string;
    projects: string;
    contact: string;
    switchLocale: string;
    downloadResume: string;
  };
  hero: {
    name: string;
    role: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    title: string;
    body: string;
  };
  experiences: {
    title: string;
    description: string;
    items: Experience[];
  };
  projects: {
    title: string;
    description: string;
    breakdownLabel: string;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    githubLabel: string;
    liveLabel: string;
    comingSoonLabel: string;
    items: Project[];
  };
  skillsByCategory: {
    title: string;
    categories: Array<{
      name: string;
      skills: string[];
    }>;
  };
  advantage: {
    title: string;
    body: string;
  };
  cta: {
    title: string;
    body: string;
    submitLabel: string;
    sendingLabel: string;
    successMessage: string;
    errorMessage: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    consent: string;
    consentLabel: string;
    honeypotLabel: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  resumeUrl: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  consent: boolean;
  locale: Locale;
  honeypot?: string;
};

export type ContactResponse = {
  ok: boolean;
  message: string;
};

