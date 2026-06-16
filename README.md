# NWC Website

Marketing website for **NWC (Nicholas & Wayne Consultancy)**, built with:

- Vite + React + TypeScript
- Tailwind CSS
- Shadcn-style UI components
- Framer Motion animations

## Prerequisites

Install these before running the project locally:

- **Node.js**: version 20+ (Node 22 recommended)
- **npm**: comes with Node.js
- **Git**: for cloning and version control

Check your versions:

```bash
node -v
npm -v
git --version
```

## Install Dependencies

From the project root:

```bash
npm install
```

## Run Locally (Development)

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:5173`).

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Build output is generated in the `dist/` folder.

## Preview Production Build Locally

Serve the built site locally:

```bash
npm run preview
```

## Deployment

This project includes a GitHub Actions workflow for GitHub Pages deployment:

- Workflow file: `.github/workflows/deploy.yml`
- Trigger: push to `main`

## Super Quick Start (If You Are New)

Copy and run this in terminal:

```bash
git clone https://github.com/<your-username>/nwc-site.git
cd nwc-site
npm install
npm run dev
```

Open the URL shown in terminal.

## What To Edit First

If you are just starting, update these files first:

- `src/data/content.ts` - company name, contact details, service text
- `src/components/Logo.tsx` - logo text/branding styles
- `public/favicon.svg` - browser tab icon
- `index.html` - SEO title and meta description

## Helpful Commands

```bash
# Start development server
npm run dev

# Run lint checks
npm run lint

# Build production output
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Setup (Step-by-Step)

1. Push code to the `main` branch.
2. In GitHub repo, go to **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Go to **Actions** tab and make sure workflow **Deploy to GitHub Pages** passes.
5. Open your site:
   - `https://<username>.github.io/<repo-name>/`

## Common Problems (Quick Fixes)

- Blank page on GitHub Pages:
  - Ensure `vite.config.ts` uses `base: './'` for project-page hosting.
- `npm install` fails:
  - Check Node version is 20+ (`node -v`).
- Port 5173 is busy:
  - Run `npm run dev -- --port 5174`.
- GitHub push gets `403`:
  - You are likely using the wrong GitHub account/token (common with multiple accounts).

## Optional: Custom Domain

If you plan to use your own domain later:

1. Add `public/CNAME` with your domain (one line only), for example:
   - `www.example.com`
2. Configure DNS records in your domain provider.
3. Set the same custom domain in **GitHub -> Settings -> Pages**.
