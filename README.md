# Kavish Shah — Information Security Portfolio

An offensive-security / terminal-HUD single-page portfolio built with plain HTML, CSS, and minimal JavaScript. All facts, dates, titles, credentials, and profile links are sourced from `Resume.pdf`.

## Design Overview

- **Aesthetic**: Dark terminal / cyber-ops HUD (`#050807` pitch charcoal, `#00FF88` phosphor green, `#38E8FF` tactical cyan, subtle CRT scanlines, corner HUD brackets, and live terminal JSON overview).
- **Typography**: `Space Grotesk` (technical display headings), `JetBrains Mono` (terminal prompts, command nav, logs, and metadata), and `Manrope` (clean readable body copy for both technical and non-technical audiences).
- **Sections**:
  1. **Hero HUD Frame (`#intro`)**: Command-bar navigation (`kavish@vapt:~$`), radar/topology SVG backdrop, typed prompt intro, and `scope.json` terminal panel.
  2. **Methodology & Skills (`#approach`, `#skills`)**: Plain-language explanation of VAPT and stakeholder reporting, CLI assessment pipeline, and `[SECURITY]` / `[TOOLS]` / `[LANGUAGES]` loadout matrix.
  3. **Selected Experience (`#experience`)**: Engagement logs (`LOG_01`, `LOG_02`) for both SecurityBoat internships.
  4. **Bug Bounty & Labs (`#research`)**: Tactical blueprint cards (`hackerone_` and `hackthebox_`) plus verified profile endpoints.
  5. **Certifications & Education (`#credentials`)**: Completed certifications list and Rashtriya Raksha University / Bharati Vidyapeeth COE Pune education cards.
  6. **Contact (`#contact`)**: Terminal comms dispatch bar (`mailto:> kavish2002ev3@gmail.com`) with one-click copy plus verified LinkedIn and GitHub links.

## File Structure

```text
.
├── index.html       # Semantic HTML5 single-page portfolio
├── styles.css       # Offensive terminal HUD dark theme & responsive layout
├── script.js        # Hero prompt typing, mobile drawer, scroll-spy, copy-email
├── favicon.svg      # Terminal ">_" monogram favicon
├── Resume.pdf    # Source resume linked from Hero, Experience, and Footer
└── README.md        # Local preview and deployment guide
```

> **Privacy note before publishing:** `index.html` links to `Resume.pdf`. If your PDF still contains your phone number, redact or omit `Resume.pdf` before deploying publicly.

## Running Locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser (or run `npx serve .`).

## Deploying to a Free Static Host

### GitHub Pages
1. Create a public repo (e.g. `kshsh00.github.io` or `portfolio`).
2. Push `index.html`, `styles.css`, `script.js`, `favicon.svg`, `README.md`, and optionally `Resume.pdf` to `main`.
3. Go to **Settings → Pages**, set **Source** to **Deploy from a branch** (`main` / `/(root)`), and save.

### Cloudflare Pages / Netlify
- Connect the GitHub repo with an empty build command and `/` (or `.`) as the publish directory, or drag-and-drop the files into Netlify Drop (`https://app.netlify.com/drop`).
