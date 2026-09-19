/**
 * Central site + affiliate constants for the Wispr Flow guide.
 *
 * Pure constants only, no React, no `@docusaurus/*` imports, so this module
 * can be imported by `docusaurus.config.ts` (navbar hrefs cannot route through
 * the <AffiliateLink> component) as well as by React components.
 */

/** Canonical site origin. PLACEHOLDER until the domain is bought at go-live. */
export const SITE_ORIGIN = 'https://wisprflowguide.com';

/**
 * Wispr Flow affiliate tracking link (via Wispr Flow's program on Dub Partners).
 *
 * LIVE tracking link for Driss Lahbil. `ref.wisprflow.ai` is Wispr Flow's referral
 * tracking domain, so every click on this URL is attributed to this partner account.
 * Program terms (2026-09-13): 25% revenue share for 12 months after first payment.
 * Every CTA on the site reads this one constant, so you only change it here.
 */
export const WISPR_AFFILIATE_URL = 'https://ref.wisprflow.ai/lahbil-driss-gdia';

/** Wispr Flow's public site, for non-commission reference links (docs, help center). */
export const WISPR_HOME = 'https://wisprflow.ai/';

/** Wispr Flow's pricing page, linked instead of quoting prices in body copy. */
export const WISPR_PRICING = 'https://wisprflow.ai/pricing';
