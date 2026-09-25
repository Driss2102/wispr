import React from 'react';
import AffiliateLink from './AffiliateLink';
import { WISPR_AFFILIATE_URL } from '@site/src/constants';

interface PricingCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: 'inline' | 'banner';
  headingLevel?: 2 | 3;
  /** GA cta_location label forwarded to AffiliateLink (e.g. "review-final"). */
  location?: string;
  /** When true, renders a reassurance line below the button. */
  riskReversal?: boolean;
  /**
   * Trust-signal row under the button (free plan / no credit card / platforms).
   * On by default: these are verified facts and they lift conversion by removing
   * perceived risk at the click moment. Set false to hide on a specific CTA.
   */
  trustRow?: boolean;
}

/** Verified, non-numeric reassurances shown under the CTA button. */
const TRUST_ITEMS = ['Permanent free plan', 'No credit card', 'Mac, Windows, iPhone & Android'];

/** Reusable conversion CTA block. Drop into any MDX money page where the reader
 *  is ready to act. Links to the single WISPR_AFFILIATE_URL constant. */
export default function PricingCTA({
  title = 'Ready to try Wispr Flow?',
  subtitle = 'Wispr Flow types what you say in almost any app. Start on the free plan, no credit card needed.',
  buttonText = 'Try Wispr Flow free',
  variant = 'inline',
  headingLevel = 2,
  location,
  riskReversal = false,
  trustRow = true,
}: PricingCTAProps): React.ReactElement {
  const TitleTag = headingLevel === 3 ? 'h3' : 'h2';

  return (
    <div className={`pricing-cta pricing-cta--${variant}`} data-nosnippet>
      <div className="pricing-cta__content">
        <TitleTag className="pricing-cta__title">{title}</TitleTag>
        <p className="pricing-cta__subtitle">{subtitle}</p>
      </div>
      <AffiliateLink
        href={WISPR_AFFILIATE_URL}
        variant="button"
        className="pricing-cta__button"
        location={location}
      >
        {buttonText}
      </AffiliateLink>
      {trustRow && (
        <ul className="pricing-cta__trust" aria-label="What you get">
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="pricing-cta__trust-item">
              <span className="pricing-cta__trust-check" aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {riskReversal && !trustRow && (
        <p className="pricing-cta__risk-reversal">Free plan, no credit card required.</p>
      )}
    </div>
  );
}
