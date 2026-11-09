# Pheasant Run Dental Center

A modern website for Pheasant Run Dental Center, a family-friendly dental practice in Williston, North Dakota.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4
- Motion for interaction and scroll reveals
- React Hook Form + Zod
- Radix primitives for accessible UI
- Lucide icons
- next/image for optimized imagery

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Routes

- `/` — home
- `/services` — filterable service index
- `/services/[slug]` — 11 treatment pages
- `/about` — practice and dentist profiles
- `/new-patients` — first-visit guide
- `/faq` — filterable FAQ
- `/contact` — contact form, location, and map

Legacy top-level treatment URLs (for example `/dental-crown`) permanently redirect to their new `/services/...` routes.

## Content and integrations

All practice details (address, phone, text line, email, hours, dentists, treatment copy)
live in `lib/site.ts`, `lib/faq.ts`, and `lib/services.ts` so they can be updated in one
place. The contact form validates on the client and server with Zod; `app/api/contact/route.ts`
is the integration point for the practice's email or scheduling provider. It currently
validates and logs submissions, so connect it to a delivery service before launch.

If the site goes live on a domain other than `pheasantrundental.com`, update `site.url` in
`lib/site.ts` so canonical URLs, Open Graph metadata, `robots.txt`, and `sitemap.xml` stay
accurate.
