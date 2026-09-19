# CLAUDE.md

Guidance for Claude Code (and humans) working in this repo.

## What this is

**Wispr Flow Guide** is an independent review-and-setup site for **Wispr Flow**
(wisprflow.ai), the AI voice dictation app by Wispr AI, Inc. It is built to earn
affiliate commissions through Wispr Flow's program on **Dub Partners**
(partners.dub.co/flow; 25% revenue share for 12 months, as of 2026-09-13). It
follows the same playbook as use-apify.com and scrimbaguide.tech: capture
bottom-of-funnel and brand-confusion search intent ("wispr flow review", "whisper
flow", "wispr flow pricing", "wispr flow vs X") with honest, independent content
the official site cannot publish.

Stack: **Docusaurus 3** (React 19, TypeScript), content in MDX. Node 20+.

## Commands

```bash
npm start        # dev server at localhost:3000
npm run build    # production build (static site)
npm run serve    # serve the built site
npm run typecheck
```

## The affiliate strategy (important, program-compliant)

Wispr Flow's affiliate terms forbid (a) featuring competing products in the same
promotional post as the affiliate link, and (b) disparaging statements. So:

- **Money pages** (review, pricing, free-plan, pro, is-worth-it, accuracy, safety,
  use/*, for/*, what-is) carry the affiliate CTA via `<AffiliateLink>` /
  `<PricingCTA>` / `<VerdictBox>`.
- **Comparison / "vs" / alternatives pages** (`docs/compare/*`) DO carry the
  affiliate link (via `ComparisonTable` + `VerdictBox` with no `ctaTo`, plus a
  `PricingCTA` on the pillar). The official program rules (2026-09-18) explicitly
  allow comparison content ("feel free to feature comparison videos"); the earlier
  "no competitors in the same post" restriction was NOT in the real rules. Keep the
  comparisons genuinely two-sided (name where each rival wins). The `ctaTo` prop
  still exists on both components if you ever need an internal-link variant.
- Tone is honest and factual about limitations, never insulting or disparaging.
- Program rules to respect: disclose the affiliate relationship (DisclosureNotice
  handles it); no PPC bidding on "Wispr Flow" or misspellings; never misrepresent
  Flow (it is voice-to-text dictation, NOT an AI writing/content generator, a
  meeting-transcription tool, a rewrite engine, or "just a Whisper wrapper").

## Affiliate links

- The single affiliate destination is `WISPR_AFFILIATE_URL` in `src/constants.ts`.
  It is currently a PLACEHOLDER pointing to wisprflow.ai. Replace it with the real
  Dub tracking link once the program is approved. Change it in that one place.
- **Never hand-write a raw `https://wisprflow.ai/...` link as a CTA.** Route CTAs
  through the components above.
- `<DisclosureNotice />` (FTC) goes directly under the H1 on every content page.

## Architecture (hub-and-spoke under docs/)

- `review/` - review pillar + pricing, free-plan, pro, is-worth-it, accuracy, safety.
- `use/` - "Use Wispr Flow on [device/app]" setup guides (primary hub).
- `compare/` - alternatives pillar + "Wispr Flow vs X" pages (no affiliate link).
- `guides/` - how-to and the "Whisper Flow vs Wispr Flow" disambiguation page.
- `for/` - persona pages (developers, writers, RSI, students, etc.).
- `what-is-wispr-flow.mdx` - top-level definition page.
- Homepage is `src/pages/index.tsx` (the device/app chooser).
- Blog is `blog/` (timely, top-funnel).

## Content rules (non-negotiable)

Two guardrails live in `research/`:
- **`research/FACT-LEDGER.md`** - every factual claim with source and approved
  wording. **Check it before stating any number or capability.**
- **`research/STYLE-BAR.md`** - house voice. Key rules: independent-reviewer voice;
  **no em-dashes**; **no exact Wispr Flow prices in body** (link the pricing page);
  two-sided (name real limits, never disparage); answer-first; attribute company
  claims (the "4x faster" claim is Wispr Flow's); banned AI vocabulary; one soft
  CTA, late, free-first; the product is spelled **Wispr Flow** (Whisper Flow is
  only the misspelling being addressed).
- `last_update: { date, author }` frontmatter on every doc for a freshness signal.

## SEO conventions

- `trailingSlash: true`; internal links keep trailing slashes.
- Sitewide WebSite + Organization JSON-LD in `docusaurus.config.ts` headTags;
  per-page Review/FAQ schema via components.
- `onBrokenLinks: 'throw'`. Add the GA4 `gtag` id in the classic preset at go-live.

## Go-live checklist

See `HANDOFF.md` for the full launch steps (domain, GitHub Pages, GA4, Search
Console, Bing, IndexNow, Dub affiliate signup).
