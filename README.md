# VoilitAI marketing site

Premium branding site for **voilitai** (the VoiceOS product, rebranded). Dark-first theme matching the cyan–violet logo.

## Stack

- Next.js 15 (App Router, Node runtime)
- Tailwind CSS 4
- Product blog from the Aventrex Digital public API

## Local

```bash
npm install
cp .env.example .env.local   # optional; defaults already point at Aventrex
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production URL

The production site is [https://voilitai.com](https://voilitai.com). Sign in and Get started go to [https://app.voilitai.com/](https://app.voilitai.com/). Contact is `contact@voilitai.com`.

## Blog

Posts are never hardcoded. Listing and article pages fetch:

- `GET https://aventrexdigital.com/api/blog?scope=product&product=voilit-ai`
- `GET https://aventrexdigital.com/api/blog/{slug}?scope=product&product=voilit-ai`

Responses are cached for ~60 seconds. On publish, Aventrex can `POST /api/revalidate` with `{ secret, slug }` using the same value as `REVALIDATE_SECRET` / `VOILIT_REVALIDATE_SECRET`.

## Pricing

Plan prices come from the Voilit **admin portal** (`/admin/plans`), via:

- `GET {VOILIT_API_URL}/api/v1/plans`

Set `VOILIT_API_URL` to the Voilit backend. After an admin saves a plan, the backend can `POST /api/revalidate` with `{ secret, resource: "plans" }` if `MARKETING_REVALIDATE_URL` and `MARKETING_REVALIDATE_SECRET` are set.

## Production

This site needs a Node host (`next start` or a Next.js platform). Static `out/` export is disabled so ISR and the revalidate webhook can run.

```bash
npm run build
npm start
```

## Brand

Logo files live in `assets/logo/` and `public/assets/logo/`. Theme tokens (cyan `#2ee6ff`, violet `#b24bff`) are in `app/globals.css`.
