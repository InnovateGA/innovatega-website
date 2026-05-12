# InnovateGA

A manifesto site for InnovateGA — a general aviation collective.

Built with Next.js (App Router) + Tailwind, exported as a fully static site.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build a static export

```bash
npm run build        # outputs to ./out
npm run preview      # serve ./out locally on http://localhost:3000
```

## Deploy to GitHub Pages

The repo ships with a workflow at `.github/workflows/deploy.yml` that builds and
publishes the static export to GitHub Pages on every push to `main`.

One-time setup:

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
3. Push a commit to `main`. The first run publishes the site at
   `https://<user>.github.io/<repo>/` (the workflow auto-detects the repo name and
   sets `NEXT_PUBLIC_BASE_PATH=/<repo>` so asset URLs are correct).

### Custom domain

If you point a custom domain at the site, asset paths must live at the root
instead of under `/<repo>/`. Override the basePath:

- Add a `public/CNAME` file containing your domain (e.g. `innovatega.co.uk`).
- In the workflow, set `NEXT_PUBLIC_BASE_PATH: ""` (empty string).

For local builds with no basePath:

```bash
NEXT_PUBLIC_BASE_PATH="" npm run build
```

## Layout

```
app/
  layout.tsx           # html, fonts, metadata
  globals.css          # design tokens (CSS variables) + base resets
  page.tsx             # manifesto index
  design-system/
    page.tsx           # design system + component examples
  companies.ts         # member-company data (single source of truth)
  manifesto.ts         # values + principles copy

components/
  Nav, Footer, Wordmark, Section, Eyebrow,
  Button, Card, Tag, Divider, ValueList, PullQuote,
  CompanyCard,
  ColorSwatch, TypeSpecimen, SpacingScale  (design system meta)
```

## Design tokens

All tokens live in `app/globals.css` as CSS variables and are also surfaced in
`tailwind.config.ts` as Tailwind theme extensions. Update both when adding a
token.

The `/design-system/` route renders every token and component in every variant
and is the source of truth for the design system.
