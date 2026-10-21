# sibiraj.in

Personal profile site for Sibiraj PR, built with Next.js and deployed as a static site on Netlify.

## Stack

- Next.js 15 (App Router, `output: "export"`)
- React 19 and TypeScript
- Tailwind CSS v4
- lucide-react icons
- Manrope and Inter fonts via `next/font`

## Structure

- `app/`: routes (`/` and `/founders-are-hiring`), metadata, `sitemap.ts`, `robots.ts`, `manifest.ts`
- `components/user/profile.tsx`: home page layout
- `data/profile.json`: all home page content (name, links, projects, socials)
- `lib/site.ts`: site-wide constants such as the canonical URL
- `public/`: avatar and icon assets

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build    # writes the static site to out/
```

## Deployment

Netlify runs `next build` and publishes `out/` (see `netlify.toml`). Pushes to `main` trigger the deploy. The CI workflow in `.github/workflows/ci.yml` runs lint, type-check, and build on every push and pull request.
