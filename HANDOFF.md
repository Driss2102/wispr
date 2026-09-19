# HANDOFF — Wispr Flow Guide

Last updated: 2026-09-13. Author: Driss Lahbil.

## What was built

An independent affiliate review/guide site for **Wispr Flow** (AI voice dictation),
following the affiliate-site-builder methodology. Stack: Docusaurus 3 (React 19, TS).

- **79 content pieces**: 73 docs + 6 blog posts, plus home, about, contact, 3 legal pages. Sitemap: 86 URLs.
- **Keyword-gap pages** (from the user's Ahrefs data + scraping wisprflow.ai/docs): download-wispr-flow, wispr-flow-login, wispr-flow-company (verified funding: $280M Series B, Menlo Ventures, $2B valuation, Aug 2026), review/wispr-flow-benefits/discount/languages, for/who-uses-wispr-flow, for/solopreneurs/lawyers/doctors/teachers/podcasters, guides/command-mode/wispr-flow-notetaker/wispr-flow-features/not-working/how-to-cancel, use/google-docs/microsoft-word/outlook/whatsapp/discord.
- **compare/ has 14 vs/alternatives pages** (Superwhisper, Willow Voice, Aqua Voice, Handy, OpenWhispr, Typeless, Otter, Apple Dictation, Windows Voice Typing, Google Voice Typing, Dragon, MacWhisper, OpenAI Whisper). Competitor facts verified via web search before writing. No affiliate link on any compare page (program compliance); they link internally to the review.
  - Review pillar + pricing, free-plan, pro, is-worth-it, accuracy, safety (7).
  - `use/` setup guides: Mac, Windows, iPhone, Android, Linux, ChatGPT, Cursor, Slack, Gmail, Notion, Obsidian (12).
  - `compare/`: alternatives pillar + 9 "vs" pages (Superwhisper, Typeless, Apple Dictation, Windows Voice Typing, Otter, Dragon, Google Voice Typing, MacWhisper, OpenAI Whisper) (10).
  - `guides/`: how-to, whisper-flow-vs-wispr-flow disambiguation, dictate code, custom dictionary, fix microphone, voice typing explained, shortcuts, tips (9).
  - `for/`: developers, writers, RSI, non-native speakers, students, customer support, ADHD (9).
  - `what-is-wispr-flow` (1). Blog: 6 posts incl. a sourced stats roundup.
- **The affiliate machine**: `AffiliateLink`, `PricingCTA`, `VerdictBox`, `ComparisonTable`, `FAQAccordion` (FAQPage schema), `ReviewSchema`, `DisclosureNotice`. Single `WISPR_AFFILIATE_URL` constant.
- **Branding**: violet logo (waveform voice-to-text), favicon, 1200x630 social card, all in `static/img/`.
- **SEO/AI-SEO**: sitemap (60 URLs), robots.txt (allows AI bots), llms.txt, pricing.md, WebSite+Organization schema, per-page Review/FAQ schema, title-suffix stripping, thin routes kept out of sitemap.
- **Deploy scaffolding**: GitHub Actions workflow (`.github/workflows/deploy.yml`) with build + deploy + IndexNow jobs; IndexNow key file in `static/`.

Production build passes (`npm run build`, exit 0, `onBrokenLinks: 'throw'`). 0 em-dashes, no banned phrases, no invented prices, no Krisp leftovers.

## Verified facts (source: wisprflow.ai + affiliate terms, 2026-09-13)

- Platforms: Mac, Windows, iPhone, Android. **No native Linux app.**
- 100+ languages. Free plan: 2,000 words/week desktop, 1,000 iPhone, unlimited Android.
- Affiliate program: **Dub Partners**, 25% revenue share for 12 months after first payment.
- Program rules honored: comparison pages carry no affiliate link; tone is factual, not disparaging; FTC disclosure under every H1.

## YOUR action items (only you can do these)

### 1. Domain (placeholder is `wisprflowguide.com`)
- Buy the domain (Cloudflare or Namecheap; decline SSL/security upsells, SSL is free).
- If you choose a different name, replace `wisprflowguide.com` everywhere: `src/constants.ts` (`SITE_ORIGIN`), `static/CNAME`, `static/robots.txt`, `static/llms.txt`, `static/pricing.md`, `scripts/submit-indexnow.mjs`.

### 2. Deploy (GitHub Pages)
1. `git init`, commit, create an EMPTY public GitHub repo, push to `main`.
2. Repo Settings > Pages > Source = **GitHub Actions** (critical, or deploy 404s).
3. DNS at registrar: 4 A records for `@` -> 185.199.108/109/110/111 .153, and CNAME `www` -> `<user>.github.io.`
4. Settings > Pages > Custom domain = your apex > Save, then tick Enforce HTTPS once the cert issues.

### 3. Affiliate program (Dub)
- Apply at https://partners.dub.co/flow. Verify the domain (Dub uses a DNS TXT `dub-domain-verification=...`).
- Once approved, paste the real tracking link into `WISPR_AFFILIATE_URL` in `src/constants.ts` (one place). Read the [terms](https://wisprflow.ai/affiliates/terms) before promoting.

### 4. Analytics & search (in order)
1. **GA4**: create a property + web stream, copy the `G-XXXXXXXXXX` id, uncomment the `gtag` block in `docusaurus.config.ts` (classic preset), deploy. This also activates the `affiliate_link_clicked` events the CTAs already fire.
2. **Google Search Console**: add a URL-prefix property, verify via the Google Analytics method, submit `sitemap.xml`.
3. **Bing Webmaster**: import from Google Search Console.
4. **IndexNow**: already wired (`scripts/submit-indexnow.mjs` + workflow job + key file). Confirm the key file is live after deploy.

## Notes / decisions
- Language: English (all search demand is English; France ~20 in Trends).
- Primary color: violet (#7c3aed), chosen to be distinct from the Krisp guide.
- The global navbar "Try Wispr Flow free" button is an affiliate link on every page (standard site chrome). Comparison page BODIES carry no affiliate link, which is the compliance-relevant point.
- Cookie/attribution window for the Dub program is not stated publicly (UNKNOWN); the affiliate-disclosure page says windows "vary by program".

## Growth (after ranking)
Rank the core first, then expand with more "X vs Y" and "X alternatives" pages
(the Alternatives Machine) to attract paid, disclosed placements. See the
affiliate-site-builder knowledge core, Module 12.
