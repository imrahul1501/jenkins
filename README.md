# Farflung — Travel Website + Jenkins CI/CD

A 10-page React travel website (Home, Destinations, Destination Detail, Tours,
Guides, Gallery, About, Testimonials, FAQ, Contact) built with React 18, Vite
and React Router, plus a ready-to-run `Jenkinsfile` and `Dockerfile` so the
whole thing builds, tests and deploys in Jenkins.

## Pages

| # | Page | Route |
|---|------|-------|
| 1 | Home | `/` |
| 2 | Destinations (all routes) | `/destinations` |
| 3 | Destination detail | `/destinations/:slug` |
| 4 | Tours & group formats | `/tours` |
| 5 | Field guides | `/guides` |
| 6 | Gallery | `/gallery` |
| 7 | About | `/about` |
| 8 | Traveler reviews | `/testimonials` |
| 9 | FAQ | `/faq` |
| 10 | Contact | `/contact` |

All copy and content data lives in `src/data/*.js` — edit those files to
replace the sample "Farflung" travel-company content with your own.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # production build -> dist/
npm run preview     # serve the production build locally
npm run lint         # ESLint
npm test             # Vitest content/data smoke tests
```

Requires Node.js 18+.

## Project structure

```
travel-website/
├── Jenkinsfile          # CI/CD pipeline (see below)
├── Dockerfile           # multi-stage build -> nginx static serve
├── nginx.conf           # SPA routing + gzip + caching
├── index.html
├── package.json
├── vite.config.js
├── .eslintrc.json
└── src/
    ├── main.jsx
    ├── App.jsx           # routes for all 10 pages
    ├── index.css         # full design system (tokens, layout, components)
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    ├── data/             # all page content lives here
    │   ├── destinations.js
    │   ├── tours.js
    │   ├── guides.js
    │   ├── testimonials.js
    │   └── faq.js
    ├── pages/            # one file per page, 10 total
    └── __tests__/
        └── data.test.js
```

## Setting this up in Jenkins

### 1. Prerequisites on the Jenkins controller/agent

- **NodeJS plugin** installed, with a tool named `node20` (Node 18+) configured
  under *Manage Jenkins → Tools → NodeJS installations*. Rename it or update
  the `tools { nodejs '...' }` block in the `Jenkinsfile` to match.
- **Docker** available on the agent if you want the `Docker build` stage to
  run (install Docker or use a Docker-enabled agent). This stage is skipped
  automatically if no `Dockerfile` is present, so it's optional.
- The `zip` CLI available on the agent for the archive stage (`apt install zip`
  / `apk add zip` on most images).

### 2. Create the pipeline job

1. In Jenkins: **New Item → Pipeline**.
2. Under **Pipeline**, choose **Pipeline script from SCM**.
3. Point it at the repo containing this project (push this folder to a Git
   repo first — GitHub, GitLab, Bitbucket, or an internal Git server all work).
4. Set **Script Path** to `Jenkinsfile` (default).
5. Save and click **Build Now**.

### 3. What the pipeline does

1. **Checkout** — pulls the repo.
2. **Install dependencies** — `npm ci`.
3. **Lint** — `npm run lint` (ESLint).
4. **Test** — `npm test` (Vitest content-integrity tests).
5. **Build** — `npm run build`, producing `dist/`.
6. **Archive artifact** — zips `dist/` into `farflung-travel-dist.zip` and
   attaches it to the build via `archiveArtifacts`, so you can download the
   built site straight from the Jenkins build page.
7. **Docker build** — builds a `farflung-travel:<build-number>` image that
   serves the built site through nginx (only runs if `Dockerfile` exists).
8. **Deploy** — placeholder stage that only runs on the `main` branch; wire in
   a registry push, a `docker-compose pull && up -d` over SSH, or a sync to
   your static host (S3, Netlify, etc.) here.

### 4. Downloading the full bundle from Jenkins

Every successful build attaches `farflung-travel-dist.zip` (the built,
production-ready static site) to the build's **Artifacts** section in the
Jenkins UI — that's the "download full bundle" link once this is wired up to
a live Jenkins instance.

## Deploying the built site anywhere else

`npm run build` produces a fully static `dist/` folder — it can be served by
any static host (nginx, Apache, S3 + CloudFront, Netlify, Vercel, GitHub
Pages) without a Node server at runtime. Since routing is client-side, any
static host needs a fallback rule that serves `index.html` for unknown paths
(already configured in `nginx.conf` for the Docker image).

## Customizing

- **Content**: edit `src/data/*.js`.
- **Design tokens** (colors, fonts, spacing): edit the `:root` block at the
  top of `src/index.css`.
- **Add a page**: create a component in `src/pages/`, add a `<Route>` in
  `src/App.jsx`, and add a link in `src/components/Navbar.jsx`.
- **Real photography**: replace the gradient placeholders in
  `src/pages/Gallery.jsx` with `<img>` tags pointing at your own image assets.
