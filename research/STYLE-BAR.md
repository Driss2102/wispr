# STYLE-BAR — Wispr Flow Guide

House voice and hard rules. Every page passes this bar before it is "done".

## Voice
- **Independent reviewer.** We review Wispr Flow; we did not build it. Never write "we built", "our app", or speak as Wispr. Say "Wispr Flow does X", "the app", "Wispr AI".
- Second person for the reader ("you"), plain and direct. Confident, not hypey.
- Sentence-case headings. Answer-first: the first 40–60 words of each section answer the query.

## Hard rules (non-negotiable)
- **No em-dashes (—) or en-dashes (–).** Use commas, colons, or full stops. (QA greps for these.)
- **No exact Wispr Flow prices in body copy.** Link to https://wisprflow.ai/pricing/ or the internal pricing page. Describe plans qualitatively (free plan with a weekly word cap; affordable Pro; team Growth; custom Enterprise).
- **Never invent facts.** Every number/capability traces to `research/FACT-LEDGER.md` with a source. If it is not in the ledger, do not publish it.
- **Attribute company claims.** The "4x faster / 220 wpm" speed claim is Wispr Flow's, not ours: "Wispr Flow says...".
- **Two-sided, never disparaging.** Name real limitations factually (no native Linux app; free weekly word cap; cloud processing by default). Never insulting language ("scam", "rip-off", "joke") — the affiliate terms forbid disparagement and honesty does not need it.
- **Spelling:** the product is **Wispr Flow** (one S-P-R). "Whisper Flow" is only ever used to name the common misspelling, then corrected.

## Banned AI-tell vocabulary
delve, robust, seamless, seamlessly, testament, pivotal, crucial, landscape, tapestry, realm, elevate, unlock (as filler), "in today's fast-paced world", "let's dive in", "when it comes to", "at the end of the day", "game-changer", "supercharge", "revolutionize", "look no further", "the world of".

## Page structure (evergreen docs)
1. Frontmatter: `title`, `description` (unique, ~150–160 chars, keyword near front), `last_update: { date: YYYY-MM-DD, author: Driss Lahbil }`, `keywords`.
2. `import { ... } from '@site/src/components'`.
3. H1 = the target query.
4. `<DisclosureNotice />` immediately under the H1.
5. Bold answer-first lead paragraph (40–60 words).
6. Answer-first H2 sections; H2s mirror related search queries.
7. Comparison table on "vs" pages; FAQ (`<FAQAccordion>`) on key pages (emits FAQPage schema).
8. Money pages: one `<VerdictBox>` or `<PricingCTA>` (affiliate CTA). Comparison/"vs" pages: NO affiliate CTA — use an internal link to the review (VerdictBox `ctaTo` / ComparisonTable `ctaTo`).
9. `<ReviewSchema>` on the review pillar and product-rating pages only (real single-author rating, no aggregateRating).

## CTA rules
- One soft CTA per informational page, placed late, free-plan-first ("start on the free plan, no credit card").
- Money pages (review, pricing, is-it-worth-it, use/*): CTA can appear above the fold.
- **Comparison/"vs"/alternatives pages carry NO affiliate link** (program rule). They link internally to the review.
- All outbound Wispr Flow CTAs go through `<AffiliateLink>` / `<PricingCTA>` / `<VerdictBox>` (never a hand-written link). Non-commission reference links (docs, help center) use plain `<a>`.

## Internal linking
- Keyword anchor text, trailing slashes (`/docs/review/`), no orphan pages. Every page links up to its hub and sideways to 2–3 siblings.
- Disambiguation framing: where natural, note Wispr Flow "is often searched as Whisper Flow" and link the disambiguation guide.

## Freshness
- Visible `last_update` on every doc (frontmatter above). Re-verify SOFTEN/UNKNOWN ledger items before quoting.
