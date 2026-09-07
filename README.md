# VoilitAI marketing site

Premium branding site for **voilitai** (the VoiceOS product, rebranded). Dark-first theme matching the cyan–violet logo.

## Stack

- Next.js 15 (static export)
- Tailwind CSS 4
- Hostinger-ready (`output: 'export'`, trailing slashes)

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production URL

Set `SITE_URL` in `lib/site.js` before launch (default `https://voilitai.aventrexdigital.com`). Product sign-in still points at `https://voiceos.aventrexdigital.com` until the app is renamed.

## Build for Hostinger

```bash
npm run build
```

Upload the contents of `out/` to the subdomain document root. Include `.htaccess`.

## Brand

Logo files live in `assets/logo/` and `public/assets/logo/`. Theme tokens (cyan `#2ee6ff`, violet `#b24bff`) are in `app/globals.css`.
