import type { PortfolioContent, Post, Project } from "@/types/portfolio";
import postsEn from "@/data/content/posts.en.json";
import postsPtBr from "@/data/content/posts.pt-br.json";
import projectsEn from "@/data/content/projects.en.json";
import projectsPtBr from "@/data/content/projects.pt-br.json";

export const portfolioContent: Record<"en" | "pt-br", PortfolioContent> = {
  en: {
    locale: "en",
    seo: {
      title: "Felipe Ricardo | Full Stack Engineer",
      description:
        "Full Stack Engineer building scalable APIs and modern interfaces across the stack.",
    },
    navigation: {
      experience: "Experience",
      projects: "Projects",
      posts: "Articles",
      contact: "Contact",
      switchLocale: "PT-BR",
      downloadResume: "Download Resume",
    },
    hero: {
      name: "Felipe Ricardo",
      role: "Full Stack Engineer",
      headline: "Building scalable, event-driven APIs and modern interfaces.",
      subheadline:
        "I design and deliver resilient backend systems, RESTful APIs, and microservices with FastAPI/Django (Python) and NestJS/Express (Node.js) — with hands-on full stack range through React and Next.js on the frontend.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      stack: "Node.js | FastAPI | SpringBoot"
    },
    about: {
      title: "About",
      body: "Felipe Ricardo is a Full Stack Developer based in Recife, Pernambuco, Brazil, building scalable, event-driven RESTful APIs and real-time systems for the iGaming industry with both Python (FastAPI, Flask, Django) and Node.js (NestJS, Express). I architect SPA frontends with React and TypeScript, ship real-time features with WebSockets, and integrate systems through RabbitMQ and Redis. I document APIs with Swagger/OpenAPI, ensure LGPD compliance when handling sensitive data, write automated tests with Pytest and Vitest/React Testing Library, and work within agile teams (Scrum/Kanban).",
    },
    experiences: {
      title: "Professional Experience",
      description: "Current roles where I deliver product value, engineering quality, and clear communication.",
      highlightsLabel: "Key Contributions",
      items: [
        {
          id: "bsa-corp",
          company: "BSA Corp",
          role: "Full Stack Developer - Python & Node.js",
          start: "September 2025 - Present",
          description:
            "I develop business-driven technology solutions for Responsible Gambling in the iGaming industry, supporting the Customer Service and BetAssist teams.",
          highlights: [
            "I implement RESTful APIs in Python and Node.js to monitor high-risk players and automate preventive actions.",
            "I built a silent user verification solution for signup and login flows, integrating internal APIs and services.",
            "I implemented a Redis-backed job queue with a daily cron for asynchronous processing, plus Redis rate limiting on the login validation API to reduce friction between players and the platform.",
            "I architect SPA applications with React and TypeScript, handling global state management and reusable componentization.",
            "I built a WebSockets API for real-time communication between services and the platform.",
            "I optimized query performance and modeling in SQL Server, implementing caching and concurrency control.",
            "I handle sensitive data in compliance with LGPD, hashing information in tracking logs.",
            "I document APIs with Swagger/OpenAPI, manage database versioning with Alembic (Python) and Prisma (Node.js), configure infrastructure (SSL, DNS, Firewall, Azure NSG) with Docker, Linux, and Nginx, integrate systems via RabbitMQ, write automated tests with Pytest, Vitest, and React Testing Library, and actively participate in code review through Pull Requests.",
          ],
        },
        {
          id: "agencia-freelance",
          company: "Primeva",
          role: "Software Engineer",
          start: "January 2025 - Present",
          description:
            "I deliver client-facing digital products with fast iteration cycles and high execution quality.",
          highlights: [
            "I architect and ship web solutions tailored to real client goals.",
            "I communicate technical tradeoffs clearly to support better product decisions.",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      description:
        "Selected work that demonstrates architecture quality, technical depth, and product thinking.",
      breakdownLabel: "Technical Breakdown",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      impactLabel: "Impact",
      githubLabel: "GitHub",
      liveLabel: "Live Demo",
      comingSoonLabel: "Link coming soon",
      items: projectsEn as Project[],
    },
    posts: {
      title: "Articles",
      description: "Writing published on LinkedIn about engineering, architecture, and product decisions.",
      readMoreLabel: "Read on LinkedIn",
      viewAllLabel: "View all articles",
      items: postsEn as Post[],
    },
    skillsByCategory: {
      title: "Technical Stack",
      categories: [
        { name: "Backend (Python)", skills: ["FastAPI", "Django", "Flask", "SQLAlchemy", "Celery", "Pydantic", "Alembic"] },
        { name: "Backend (Node.js)", skills: ["NestJS", "Express", "TypeORM", "Prisma"] },
        { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Axios"] },
        { name: "Real-Time", skills: ["WebSockets", "Socket.io"] },
        { name: "Databases", skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis"] },
        { name: "Architecture", skills: ["RESTful APIs", "Microservices", "RabbitMQ", "Event-Driven Architecture", "Amazon S3", "Swagger/OpenAPI"] },
        { name: "Infra & DevOps", skills: ["Docker", "Nginx", "Azure", "AWS", "CI/CD", "Git", "Linux"] },
        { name: "Quality & Compliance", skills: ["Pytest", "Jest", "Vitest", "React Testing Library", "ESLint", "SOLID", "Design Patterns", "Clean Architecture", "Code Review", "LGPD"] },
      ],
    },
    advantage: {
      title: "Beyond Code",
      body: "Beyond coding, I communicate technology clearly — including sensitive topics like LGPD compliance and data handling. I translate complex technical decisions into practical actions that help teams move faster and ship with confidence.",
    },
    cta: {
      title: "Looking for a technical, adaptable Full Stack Engineer ready to deliver?",
      body: "Let's talk.",
      submitLabel: "Send Message",
      sendingLabel: "Sending...",
      successMessage: "Message sent successfully. I will get back to you soon.",
      errorMessage: "Unable to send the message right now. Please try again later.",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      consent: "Consent",
      consentLabel: "I agree to share my data for contact purposes.",
      honeypotLabel: "Leave this field empty",
    },
    socialLinks: {
      github: "https://github.com/FelipeRicardo5",
      linkedin: "https://www.linkedin.com/in/felipe-ricardo-developer",
      email: "felipe1ricardo158@gmail.com",
    },
    resumeUrl: "/resumeFelipeRicardo.pdf",
  },
  "pt-br": {
    locale: "pt-br",
    seo: {
      title: "Felipe Ricardo | Engenheiro Full Stack",
      description:
        "Engenheiro Full Stack construindo APIs escaláveis e interfaces modernas em todas as camadas do stack.",
    },
    navigation: {
      experience: "Experiência",
      projects: "Projetos",
      posts: "Artigos",
      contact: "Contato",
      switchLocale: "EN",
      downloadResume: "Baixar Currículo",
    },
    hero: {
      name: "Felipe Ricardo",
      role: "Engenheiro Full Stack",
      headline: "Construindo APIs RESTful escaláveis, orientadas a eventos, e interfaces modernas.",
      subheadline:
        "Projeto e entrego sistemas backend resilientes, APIs RESTful e microsserviços com FastAPI/Django (Python) e NestJS/Express (Node.js) — com atuação full stack prática também com React e Next.js no frontend.",
      primaryCta: "Ver Projetos",
      secondaryCta: "Entrar em Contato",
      stack: "Node.js | FastAPI | SpringBoot"
    },
    about: {
      title: "Sobre",
      body: "Felipe Ricardo é Desenvolvedor Fullstack em Recife, Pernambuco, construindo APIs RESTful escaláveis, orientadas a eventos, e sistemas em tempo real para o setor de iGaming com Python (FastAPI, Flask, Django) e Node.js (NestJS, Express). Arquiteto frontends SPA com React e TypeScript, entrego funcionalidades em tempo real com WebSockets, e integro sistemas via RabbitMQ e Redis. Documento APIs com Swagger/OpenAPI, garanto conformidade com a LGPD no tratamento de dados sensíveis, escrevo testes automatizados com Pytest e Vitest/React Testing Library, e atuo em times ágeis (Scrum/Kanban).",
    },
    experiences: {
      title: "Experiência Profissional",
      description: "Atuações atuais em que entrego valor de produto, qualidade de engenharia e comunicação clara.",
      highlightsLabel: "Principais Contribuições",
      items: [
        {
          id: "bsa-corp",
          company: "BSA Corp",
          role: "Desenvolvedor Fullstack - Python & Node.js",
          start: "Setembro 2025 - Presente",
          description:
            "Desenvolvo soluções tecnológicas orientadas a negócios para Jogo Responsável no ramo de iGaming, suportando as áreas de Customer Service e BetAssist.",
          highlights: [
            "Implemento APIs RESTful em Python e Node.js para monitoramento de players de alto risco e automação de ações preventivas.",
            "Desenvolvi uma solução de verificação silenciosa de usuários para os processos de cadastro e login, integrando APIs e serviços internos.",
            "Implementei fila de jobs com Redis e cron diário para processamento assíncrono, além de rate limiting via Redis na API de validação de login, reduzindo a fricção entre player e plataforma.",
            "Arquiteto aplicações SPA com React e TypeScript, com gerenciamento de estado global e componentização reutilizável.",
            "Desenvolvi uma API com WebSockets para comunicação em tempo real entre serviços e a plataforma.",
            "Otimizei performance e modelagem de queries no SQL Server, com implementação de cache e controle de concorrência.",
            "Trato dados sensíveis em conformidade com a LGPD, com hash de informações em logs de acompanhamento.",
            "Documento APIs com Swagger/OpenAPI, controlo versionamento de banco de dados com Alembic (Python) e Prisma (Node.js), configuro infraestrutura (SSL, DNS, Firewall, Azure NSG) com Docker, Linux e Nginx, integro sistemas via RabbitMQ, escrevo testes automatizados com Pytest, Vitest e React Testing Library, e participo ativamente de code review via Pull Requests.",
          ],
        },
        {
          id: "agencia-freelance",
          company: "Primeva",
          role: "Engenheiro de Software",
          start: "Janeiro 2025 - Presente",
          description:
            "Entrego produtos digitais para clientes com ciclos rápidos de iteração e alto padrão de execução.",
          highlights: [
            "Projeto e publico soluções web alinhadas a objetivos reais de clientes.",
            "Comunico tradeoffs técnicos com clareza para apoiar decisões melhores de produto.",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos em Destaque",
      description:
        "Trabalhos selecionados que demonstram qualidade de arquitetura, profundidade técnica e visão de produto.",
      breakdownLabel: "Detalhamento Técnico",
      problemLabel: "Problema",
      solutionLabel: "Solução",
      impactLabel: "Impacto",
      githubLabel: "GitHub",
      liveLabel: "Demo",
      comingSoonLabel: "Link em breve",
      items: projectsPtBr as Project[],
    },
    posts: {
      title: "Artigos",
      description: "Textos publicados no LinkedIn sobre engenharia, arquitetura e decisões de produto.",
      readMoreLabel: "Ler no LinkedIn",
      viewAllLabel: "Ver todos os artigos",
      items: postsPtBr as Post[],
    },
    skillsByCategory: {
      title: "Stack Técnica",
      categories: [
        { name: "Backend (Python)", skills: ["FastAPI", "Django", "Flask", "SQLAlchemy", "Celery", "Pydantic", "Alembic"] },
        { name: "Backend (Node.js)", skills: ["NestJS", "Express", "TypeORM", "Prisma"] },
        { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Axios"] },
        { name: "Tempo Real", skills: ["WebSockets", "Socket.io"] },
        { name: "Bancos de Dados", skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis"] },
        { name: "Arquitetura", skills: ["APIs RESTful", "Microservices", "RabbitMQ", "Event-Driven Architecture", "Amazon S3", "Swagger/OpenAPI"] },
        { name: "Infra e DevOps", skills: ["Docker", "Nginx", "Azure", "AWS", "CI/CD", "Git", "Linux"] },
        { name: "Qualidade e Compliance", skills: ["Pytest", "Jest", "Vitest", "React Testing Library", "ESLint", "SOLID", "Design Patterns", "Clean Architecture", "Code Review", "LGPD"] },
      ],
    },
    advantage: {
      title: "Além do Código",
      body: "Além de programar, comunico tecnologia com clareza — inclusive temas sensíveis como conformidade com a LGPD e tratamento de dados. Traduzo decisões técnicas complexas em ações práticas que aceleram times e geram entregas confiáveis.",
    },
    cta: {
      title: "Procurando um Engenheiro Full Stack técnico, adaptável e pronto para entregar?",
      body: "Vamos conversar.",
      submitLabel: "Enviar Mensagem",
      sendingLabel: "Enviando...",
      successMessage: "Mensagem enviada com sucesso. Retornarei em breve.",
      errorMessage: "Não foi possível enviar a mensagem agora. Tente novamente mais tarde.",
    },
    form: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      consent: "Consentimento",
      consentLabel: "Concordo em compartilhar meus dados para contato.",
      honeypotLabel: "Deixe este campo vazio",
    },
    socialLinks: {
      github: "https://github.com/FelipeRicardo5",
      linkedin: "https://www.linkedin.com/in/felipe-ricardo-developer",
      email: "felipe1ricardo158@gmail.com",
    },
    resumeUrl: "/resumeFelipeRicardo.pdf",
  },
};
