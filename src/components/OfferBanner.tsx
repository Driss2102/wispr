import React from 'react';
import AffiliateLink from './AffiliateLink';
import { WISPR_AFFILIATE_URL } from '@site/src/constants';

interface OfferBannerProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  /** GA cta_location label forwarded to AffiliateLink. */
  location?: string;
}

/**
 * Stylish free-plan CTA banner: the real Wispr Flow product logo, an eyebrow, a
 * bold headline, a short subtext, and a primary affiliate button. Uses the
 * single WISPR_AFFILIATE_URL constant and states only verified free-plan facts.
 */
export default function OfferBanner({
  eyebrow = 'Wispr Flow free plan',
  title = 'Try Wispr Flow free, no credit card',
  subtitle = 'A real, permanent free plan: dictate up to 2,000 words a week on desktop, and unlimited on Android.',
  buttonText = 'Get Wispr Flow free',
  location = 'offer-banner',
}: OfferBannerProps): React.ReactElement {
  return (
    <div className="offer-banner" data-nosnippet>
      <img
        className="offer-banner__icon"
        src="/img/wispr-flow-logo.png"
        alt="Wispr Flow"
        width={56}
        height={56}
        loading="lazy"
        onError={(e) => {
          // Until the official media-kit logo is dropped in, hide rather than
          // show a broken-image icon. Never substitute a self-made logo.
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
      />
      <div className="offer-banner__body">
        <span className="offer-banner__eyebrow">{eyebrow}</span>
        <span className="offer-banner__title">{title}</span>
        <span className="offer-banner__sub">{subtitle}</span>
      </div>
      <AffiliateLink
        href={WISPR_AFFILIATE_URL}
        variant="button"
        className="offer-banner__btn"
        location={location}
      >
        {buttonText}
      </AffiliateLink>
    </div>
  );
}
