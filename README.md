# OKX Wallet Türkiye — 6-Month GTM Strategy Site

A Next.js (App Router) site that presents Alpay's 6-month Go-To-Market strategy
for OKX Wallet Türkiye in an Overlayer-style single-page format, adapted to
OKX's corporate visual identity.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3
- Deploy target: Vercel (zero config)

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel → `New Project` → `Import` the repo.
3. Keep default settings — the Next.js preset handles everything.
4. Deploy.

## Editing content

All content lives in `lib/data.ts` — edit values there, no layout changes needed.

- `NAV_SECTIONS` — sidebar + anchor ids
- `EXECUTIVE_SUMMARY`, `KEY_TARGETS`, `FRICTION_POINTS`, `POSITIONING`
- `FRAMEWORK_PHASES`, `PHASE_1_TASKS`, `PHASE_2_TASKS`, `PHASE_3_TASKS`
- `KOL_CATEGORIES`, `KOL_ONBOARDING`
- `COMMUNITY`, `SUPPLEMENTARY`
- `MOCK_CAMPAIGNS`, `PAST_CAMPAIGNS`, `SUCCESS_METRICS`, `CLOSING`

## Structure

```
app/
  layout.tsx            # <html> shell + metadata
  page.tsx              # composes every section
  globals.css           # OKX palette utilities
  components/
    Sidebar.tsx         # sticky scroll-spy nav
    Section.tsx         # shared section wrapper
    Hero.tsx            # summary + deliverables + objective
    KeyTargets.tsx      # 4 KPI cards
    FrictionPoints.tsx  # 4 barriers
    Positioning.tsx     # CeDeFi advantage
    Framework.tsx       # phase overview
    PhaseDetail.tsx     # per-phase task cards (reused 3×)
    KOLs.tsx            # 4 tiers + onboarding flow
    Community.tsx       # 5-step flywheel + channels + retention
    Supplementary.tsx   # deeper Q&A
    MockCampaigns.tsx   # 2 flagship campaigns
    PastCampaigns.tsx   # proof-of-work X post links
    SuccessMetrics.tsx  # M2 / M4 / M6 checkpoints
    Closing.tsx         # principles + the rule
lib/
  data.ts               # all content — single source of truth
```

## Brand notes

- Palette: pure black (`#000`), text (`#FAFAFA`), OKX blue (`#1F4DFF`)
- Font: Inter via Google Fonts
- Layout: sticky 260px sidebar, 1200px content column
- Dark mode only
