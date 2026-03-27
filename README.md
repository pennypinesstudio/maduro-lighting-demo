# Maduro Lighting — Demo Site

A production-ready Next.js marketing site for Maduro Lighting, a precision lighting hardware brand for live performance and touring.

## Stack

- **Next.js 14** (React + TypeScript)
- **Tailwind CSS** (no CDN — full PostCSS installation)
- **Google Fonts**: Syncopate, Syne, Inter, JetBrains Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `node serve.mjs` | Start dev server (checks if already running first) |
| `node screenshot.mjs <url> <name>` | Take a screenshot (saves to `screenshots/<name>.png`) |

## Screenshot Usage

```bash
# First, start the dev server
npm run dev

# Then take a screenshot
node screenshot.mjs http://localhost:3000 homepage
```

Screenshots are saved to `screenshots/`.

## Project Structure

```
maduro-lighting-demo/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PhilosophySection.tsx
│   ├── CatalogGrid.tsx
│   ├── SystemShowcase.tsx
│   ├── TechSection.tsx
│   ├── Testimonial.tsx
│   └── Footer.tsx
├── pages/
│   ├── _document.tsx   (Google Fonts injection)
│   └── index.tsx
├── styles/
│   └── globals.css     (CSS vars, grid bg, animations)
├── public/
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── serve.mjs
└── screenshot.mjs
```

## Design System

| Token | Value |
|-------|-------|
| `--void` | `#030303` |
| `--surface-1` | `#0A0A0A` |
| `--surface-2` | `#141414` |
| `--border` | `#222222` |
| `--amber` | `#F2A900` |
| `--text-main` | `#FFFFFF` |
| `--text-muted` | `#8A8A8A` |
| `--text-dim` | `#444444` |

## Deployment

Push to GitHub and import into Vercel. No environment variables required.
