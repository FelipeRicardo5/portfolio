# Felipe Ricardo Portfolio

Premium bilingual (EN/PT-BR) developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and a Resend-powered contact flow.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes
- Resend + Zod

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Required values:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

## Personalization Checklist

- Update profile links and email in `src/data/portfolio-content.ts`
- Replace `resumeUrl` target with your final resume PDF path
- Add your live project links / GitHub links in the same content file
- Set production domain in `src/app/layout.tsx` metadata

## Build

```bash
npm run lint
npm run build
```

## Deployment

Project is deployment-ready for Vercel.