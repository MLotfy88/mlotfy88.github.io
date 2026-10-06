# Mahmoud Mohamed Lotfy — Executive Personal Website & Career Hub
## Healthcare Operations • Supply Chain • Procurement • Business Operations

An executive professional operating system, evidence-based career positioning hub, and role-driven portfolio presentation for **Mahmoud Mohamed Lotfy**.

- **Live Production URL**: [https://mlotfy88.github.io/](https://mlotfy88.github.io/)
- **GitHub Repository**: [https://github.com/MLotfy88/mlotfy88.github.io](https://github.com/MLotfy88/mlotfy88.github.io)
- **Authoritative Source of Truth**: `Mahmoud Mohamed Lotfy — Complete Professional Biography.md` (Master Dossier)

---

## 🎯 Architecture & Core Philosophy

This website is **NOT a simple online CV**. It is built as a **Role-Driven Professional Presentation** that allows different executive audiences (CEOs, Hospital Directors, HR Leaders, Supply Chain Executives, and Investors) to explore Mahmoud's work across 8 specialized career lenses:

1. **Healthcare Operations** (Cath Lab Leadership, Clinical Workflow, Patient Throughput)
2. **Supply Chain** (Consignment Governance, Continuous Availability, Vendor SLAs)
3. **Procurement** (Strategic Sourcing, Tariff Negotiations, Invoice Auditing)
4. **Demand Planning & Inventory** (Rolling 30-Day Forecasts, Safety Stock Modeling)
5. **Business Operations & Management** (Departmental P&L Stewardship, Margin Scaling)
6. **Logistics & Operations** (Warehouse Management, FIFO Layout, Staging Logistics)
7. **Events & Medical Conferences** (20+ Medical Congresses, TEDx Zagazig, Staging)
8. **Digital Transformation / Operations Analytics** (4 Web Platforms, 6 Excel Engines, EGP 0 Budget)

---

## 🏗️ Technical Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Bespoke Executive CSS Design System (`src/styles/design-tokens.css`) with Presidential Emerald theme (`#0D6B52`), dark glassmorphism, responsive cards, and clean typography (Google Fonts: Outfit, Inter, JetBrains Mono).
- **Icons**: Lucide React
- **Hosting / Deployment Target**: GitHub Pages (Static build, 100% serverless, zero external runtime dependency)
- **Data Architecture**: Decoupled Content Layer (`src/data/`) separating all text, metrics, case studies, and CV metadata from UI presentation.

---

## 📁 Repository Structure

```text
mahmoud-lotfy-portfolio/
├── index.html                   # Entry HTML with full SEO, Open Graph & Schema.org JSON-LD
├── package.json                 # Project dependencies & build scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with relative base './'
├── public/
│   ├── .nojekyll                # Bypasses Jekyll processing for GitHub Pages
│   ├── 404.html                 # Single-page app redirect script for direct deep link URLs
│   ├── favicon.svg              # Custom brand favicon
│   ├── robots.txt               # Search engine crawler permissions
│   ├── sitemap.xml              # XML sitemap for SEO discovery
│   └── cv/                      # Finalized 8 CV versions in PDF format
│       ├── Mahmoud_Lotfy_CV_Executive_General.pdf
│       ├── Mahmoud_Lotfy_CV_Healthcare_Operations.pdf
│       ├── Mahmoud_Lotfy_CV_Supply_Chain.pdf
│       ├── Mahmoud_Lotfy_CV_Procurement.pdf
│       ├── Mahmoud_Lotfy_CV_Business_Operations.pdf
│       ├── Mahmoud_Lotfy_CV_Events_Conferences.pdf
│       ├── Mahmoud_Lotfy_CV_Demand_Planning.pdf
│       └── Mahmoud_Lotfy_CV_Logistics_Operations.pdf
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow for zero-config automated deployment
└── src/
    ├── main.tsx                 # React entry point
    ├── App.tsx                  # HashRouter orchestrator for 6 deep-linked pages
    ├── index.css                # Global baseline styles
    ├── styles/
    │   └── design-tokens.css    # Central executive design tokens & variables
    ├── data/                    # Structured Content Layer (Master Dossier Aligned)
    │   ├── identity.ts          # Executive identity, contacts & geographic mobility
    │   ├── rolesData.ts         # Deep data for 5 dedicated role dossier pages
    │   ├── methodology.ts       # 7-Step Operating Logic & Foundational Philosophy
    │   ├── metrics.ts           # Hero metrics & secondary audited KPIs
    │   └── cvs.ts               # Official CV download catalog
    ├── pages/                   # Dedicated Role Dossier Pages
    │   ├── LandingPage.tsx      # Executive Hub (Overview, 5 Role Cards, Evolution, Methodology)
    │   ├── HealthcareOpsPage.tsx# Healthcare Operations Director Dossier
    │   ├── SupplyChainPage.tsx  # Supply Chain Manager Dossier
    │   ├── ProcurementPage.tsx  # Procurement Director Dossier
    │   ├── BusinessOpsPage.tsx  # Business Operations Manager Dossier
    │   └── EventsPage.tsx       # Events & Conferences Director Dossier
    └── components/              # Modular Executive UI Components
        ├── ExecutiveNavbar.tsx  # Sticky header with Targeted Dossiers dropdown
        ├── RoleHero.tsx         # Dedicated role header with metrics & PDF download
        ├── ExecutiveStories.tsx # 3 structured Problem-Diagnostic-Action-Result case studies
        ├── DigitalEnablerBox.tsx# Custom software showcase as operational force multiplier
        ├── RoleCapabilities.tsx# Role-filtered competency matrix
        ├── RoleTimeline.tsx     # Role-focused career milestones
        ├── RoleFooterCta.tsx    # Role page footer CTA & mobility
        ├── ContactSection.tsx   # Direct inquiry channels & geographic availability
        └── Footer.tsx           # Institutional footer & legal notice
```

---

## 🚀 Deployment to GitHub Pages

This project is configured with a fully automated **GitHub Actions** deployment pipeline:

1. **Repository Name**: Set up repository named `mlotfy88.github.io` under account `MLotfy88` on GitHub.
2. **Push Code**: Push this repository to the `main` branch.
3. **Configure Pages Setting (One-time, 10 seconds)**:
   - In GitHub, go to **Settings** → **Pages**.
   - Under **Build and deployment > Source**, select **"GitHub Actions"**.
4. **Automatic Build & Live URL**:
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds the project using Vite and deploys the `dist` artifact to GitHub Pages.
   - The site goes live immediately at: **https://mlotfy88.github.io/**.


## 📦 Building for Production

To compile TypeScript and build the optimized static bundle:
```bash
npm run build
```
This generates a production-ready `dist/` directory containing all pre-bundled assets, minified scripts, and static HTML ready for instant deployment.

To locally preview the production build:
```bash
npm run preview
```

---

## 🚀 GitHub Pages Deployment Setup

This project is configured specifically for **GitHub Pages** under `https://mlotfy88.github.io`:

1. **Base Path**: Configured as relative (`base: './'`) in `vite.config.ts`, ensuring all assets, fonts, and CV download links load properly on any domain or subpath.
2. **Jekyll Bypass**: The `public/.nojekyll` file ensures GitHub Pages serves files starting with underscores and raw assets without Jekyll interference.
3. **Automated Deployment Options**:
   - **Option A (GitHub Actions - Active)**: `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
   - **Option B (Direct branch deployment)**: Push the compiled contents of `dist/` to the `gh-pages` branch or the root of the user page repository (`MLotfy88/mlotfy88.github.io`).

---

## 📝 How to Update Content

Thanks to the decoupled content architecture, **you do not need to edit React components** to update professional content:

| Content to Update | Target File in `src/data/` |
|---|---|
| Phone, Email, Location, Mobility | `src/data/identity.ts` |
| Role Lenses, Subtitles, Focus Areas | `src/data/roles.ts` |
| Hero Statistics & Secondary Metrics | `src/data/metrics.ts` |
| Operating Principles & Philosophy | `src/data/methodology.ts` |
| Competency Matrix & Evidence | `src/data/capabilities.ts` |
| Quantified Achievements & Results | `src/data/achievements.ts` |
| Case Studies (Problem → Action → Result) | `src/data/caseStudies.ts` |
| Audited Financial Data & Inflation Factors | `src/data/financials.ts` |
| Internal Software Systems & Development Hours | `src/data/technology.ts` |
| Career Milestones & Employment Dates | `src/data/timeline.ts` |
| Conferences, Productions & Ventures | `src/data/eventsMedia.ts` |
| CV Downloads & Version Descriptions | `src/data/cvs.ts` |

To add or update CV documents, simply replace the corresponding `.pdf` and `.docx` files in `public/cv/`.

---

## 🔒 Content & Verification Compliance

- **Authoritative Source**: All dates, numbers, financial results, and career entries strictly match `Mahmoud Mohamed Lotfy — Complete Professional Biography.md`.
- **Employment Dates**: Current Al-Obour Hospital leadership tenure is explicitly documented as **2023 – April 2026** (no undefined "Present").
- **Professional Positioning**: Technology is framed accurately as an **operational enabler**; Creative Direction is framed as an **operational capability**.
