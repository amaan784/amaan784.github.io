# Amaan Sheikh — Personal Portfolio

My personal portfolio, live at **[amaan784.github.io](https://amaan784.github.io)**.

A minimal, typographic, recruiter-focused single-application site built with React.
It has a light/dark toggle, a multi-page layout, a filterable projects section, and
an (optional) Open Source page driven by GitHub data.

<p align="left">
  <a href="https://amaan784.github.io"><img alt="Live" src="https://img.shields.io/badge/live-amaan784.github.io-2747a8?style=flat-square" /></a>
  <a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/built%20with-React-61DAFB?style=flat-square" /></a>
  <a href="./LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" /></a>
</p>

---

## Contents

- [Pages & features](#pages--features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Editing the content](#editing-the-content)
- [Refreshing GitHub data](#refreshing-github-data)
- [Run with Docker](#run-with-docker)
- [Deployment](#deployment)
- [License & credits](#license--credits)

---

## Pages & features

- **Home** — hero (name, role, location, availability line, summary, profile photo), a highlights strip, featured experience (3 most recent roles), featured projects (top 3), skills, an "Outside work" section, and a contact call to action.
- **Education** — degrees with coursework, plus competitive-coding profiles.
- **Experience** — a timeline grouped into Full-time, Part-time, Internships, and Freelance & Volunteering.
- **Projects** — main projects as two-column cards (title, description, one key result, languages, code / demo / report links), smaller projects as a compact "More projects" list, and a category filter (Hackathon, GenAI, Agentic, Inference, NLP, CV, ML, DL, Full-Stack, Data).
- **Publications** — a citation-style list: year, title, authors (your name in bold), venue, status, and a link.
- **Open Source** — organizations, pull requests, issues, and charts from GitHub data. Optional (see `settings.showOpenSource`).
- **Contact** — social links, résumé, and email.
- **Light / dark mode** — toggle in the header; the choice is saved to `localStorage` and defaults to light.

---

## Tech stack

- [React](https://reactjs.org/) (Create React App / `react-scripts`)
- [React Router](https://reactrouter.com/) for the multi-page routing
- [styled-components](https://styled-components.com/) + CSS variables for theming
- [react-reveal](https://www.react-reveal.com/) for scroll animations
- [chart.js](https://www.chartjs.org/) / [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) for the Open Source charts
- [baseui](https://baseweb.design/) (a few UI primitives)
- [Iconify](https://iconify.design/) + [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts: Newsreader (display), Inter (body), JetBrains Mono (labels)

---

## Getting started

You need [Node.js](https://nodejs.org/) (18+ recommended; CI builds on 22) and npm.

```bash
# 1. Clone
git clone https://github.com/amaan784/amaan784.github.io.git
cd amaan784.github.io

# 2. Install dependencies
npm install

# 3. Run the dev server (http://localhost:3000)
npm start

# 4. Create a production build (outputs to ./build)
npm run build
```

> The `start` and `build` scripts include `--openssl-legacy-provider` so they work
> with modern Node versions.

---

## Project structure

```
public/
  index.html              # <head>, fonts, meta, favicon, theme bootstrap
  profile.jpg             # (optional) your hero photo — see "Editing the content"
  icons/                  # favicons / PWA icons
src/
  portfolio.js            # ALL editable content (the file you'll touch most)
  theme.js                # light + dark color palettes
  index.css               # design system: tokens, typography, components
  App.js                  # theme state + light/dark toggle
  containers/Main.js      # routes
  components/             # header, footer, cards, etc.
  containers/ , pages/    # the page sections and routes
  shared/opensource/      # JSON data for Projects + Open Source page
  assets/images/          # logos and images used by the cards
git_data_fetcher.mjs      # pulls GitHub data into src/shared/opensource/
.github/workflows/deploy.yml   # auto-deploy on push to main
```

---

## Editing the content

Almost everything is in **`src/portfolio.js`**:

| What | Where in `portfolio.js` |
| --- | --- |
| Name, role, location, availability, summary, résumé link, profile photo | `greeting` |
| Highlights strip on Home | `highlights` |
| "Outside work" section on Home | `outsideWork` |
| Social links (GitHub, LinkedIn, Scholar, Hugging Face, email) | `socialMediaLinks` |
| Skills and tools | `skills` |
| Degrees + competitive profiles | `degrees`, `competitiveSites` |
| Work history (sections + entries) | `experience` |
| Publications | `publications` |
| Contact copy | `contactPageData` |
| Splash screen + Open Source toggle | `settings` |

A few specifics:

- **Profile photo** — drop an image at `public/profile.jpg`. If it's missing, the hero shows an "AS" monogram. To use a different filename, change `greeting.profileImage`.
- **Show / hide the Open Source page** — set `settings.showOpenSource` to `true` or `false`. This controls the nav link, the route, and the footer link in one place.
- **Theme** — colors live in `theme.js` (`lightTheme` / `darkTheme`) and `index.css` (CSS variables keyed on `html[data-theme]`). The default mode is light.
- **Company / institution logos** — add the image to `src/assets/images/` and set the entry's `logo_path` (experience cards fall back to an initials monogram if the file is missing).
- **Availability line** — `greeting.availability` (e.g. "Graduating December 2026, open to full-time roles"). Leave it empty to hide it.
- **Publications** — each entry in `publications.data` takes `name`, `authors` (your name, from `greeting.title`, is bolded automatically), `venue`, `year`, `description`, `url` + `linkLabel`, and an optional `status` such as `"Accepted"` or `"In progress"`. Leave out `url` for papers that aren't out yet.

### Projects

Projects are read from **`src/shared/opensource/projects.json`**. The list is hand-curated and ordered by priority (best first); the Home page features the first three.

```json
{
  "id": "unique-id",
  "name": "my-project",
  "title": "My Project",
  "url": "https://github.com/...",
  "createdAt": "2026-01-01T00:00:00Z",
  "description": "What it does.",
  "metric": { "value": "2x", "label": "lower latency on a single GPU" },
  "links": [{ "label": "Watch demo", "url": "https://..." }],
  "award": "Best Use of Hugging Face",
  "languages": [{ "name": "Python", "iconifyClass": "logos-python" }],
  "tags": ["GenAI", "NLP"]
}
```

| Field | What it does |
| --- | --- |
| `title` | Name shown on the card (falls back to `name`, the repo slug). |
| `url` | Opens when the card is clicked, and is the "View code" link. |
| `createdAt` | Only the year is shown. |
| `metric` | Optional key result, shown as a highlighted figure with a short label. |
| `links` | Optional extra links (demo, report, write-up) next to "View code". |
| `award` | Optional prize badge at the top of the card. |
| `more` | Set to `true` to list the project in the compact "More projects" section instead of as a card. |
| `tags` | Category filters. Their order is defined by `CATEGORY_ORDER` in `src/pages/projects/Projects.js`. |

### Skill icons

The "Skills" section uses Iconify. To change an icon, find it on
[icon-sets.iconify.design](https://icon-sets.iconify.design/) and put its name in the
skill's `fontAwesomeClassname`. For a custom image instead, drop a file in
`public/skills/` and use the `imageSrc` field.

---

## Refreshing GitHub data

`git_data_fetcher.mjs` pulls **organizations, pull requests, and issues** into
`src/shared/opensource/` for the Open Source page.

1. Copy `env.example` to `.env` and fill in:
   ```bash
   GITHUB_TOKEN=your_token       # a GitHub personal access token
   GITHUB_USERNAME=your_username
   ```
   ([How to create a token.](https://docs.github.com/en/authentication/keeping-your-account-secure/managing-your-personal-access-tokens)) Keep the token secret — never commit `.env`.
2. Run it:
   ```bash
   node git_data_fetcher.mjs
   ```

> **Note:** `projects.json` is hand-curated (titles, key results, links, tags, and
> ordering), so the fetcher leaves it alone by default. Running
> `node git_data_fetcher.mjs --overwrite-projects` replaces it with your GitHub
> pinned repos and loses those edits.

---

## Run with Docker

```bash
docker compose up
```

This builds the image and serves the dev server at **http://localhost:3001**.

---

## Deployment

The site is a [GitHub Pages **user site**](https://docs.github.com/en/pages) served at
`https://amaan784.github.io` (the repo is named `amaan784.github.io`, and `CNAME`
pins the domain).

### Automatic (primary)

Every push to **`main`** triggers `.github/workflows/deploy.yml`, which:

1. checks out the repo and sets up Node,
2. runs `npm install` and `npm run build`,
3. publishes the `./build` folder to the **`gh-pages`** branch via
   [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).

GitHub Pages is configured to serve from **`gh-pages` branch → root**, so a push to
`main` is all that's needed.

### Manual (fallbacks)

If you ever need to deploy by hand, helper scripts are included:

- **`./deploy_gh_pages.sh`** — runs `npm run build` then `npm run deploy` (the
  [`gh-pages`](https://www.npmjs.com/package/gh-pages) package pushes `./build` to the
  `gh-pages` branch). Equivalent to just running `npm run deploy`.
- **`./deploy_master.sh`** — builds, then force-pushes the `./build` folder to the
  `master` branch (only useful if Pages is set to serve from `master → root`).

After a manual deploy, make sure the GitHub Pages source branch in repo settings
matches the branch you pushed to.

---

## License & credits

Licensed under the [MIT License](./LICENSE).

Built on the open-source [masterPortfolio](https://github.com/ashutosh1919/masterPortfolio)
by Ashutosh Hathidara, which itself draws on
[developerFolio](https://github.com/saadpasta/developerFolio) by Saad Pasta. Icons from
[Iconify](https://icon-sets.iconify.design/) and [Simple Icons](https://simpleicons.org/).
