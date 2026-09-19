import React from 'react';
import Link from '@docusaurus/Link';
import AffiliateLink from './AffiliateLink';
import { WISPR_AFFILIATE_URL } from '@site/src/constants';

interface VerdictBoxProps {
  title?: string;
  rating?: string;
  verdict: string;
  pros?: string[];
  cons?: string[];
  ctaText?: string;
  ctaHref?: string;
  /**
   * Internal route (e.g. "/docs/review/"). When set, the CTA renders as an
   * internal link instead of an affiliate link. Use this on comparison/"vs"
   * pages, which must not carry an affiliate link (program rule): send readers
   * to the review, which does.
   */
  ctaTo?: string;
  /** GA `cta_location` tag. Defaults to `verdict-box`. */
  location?: string;
}

/** The "verdict" block that closes a review or comparison page: rating, a
 *  one-paragraph summary, pros/cons, and the primary CTA. */
export default function VerdictBox({
  title = 'The verdict',
  rating,
  verdict,
  pros = [],
  cons = [],
  ctaText = 'Try Wispr Flow free',
  ctaHref = WISPR_AFFILIATE_URL,
  ctaTo,
  location = 'verdict-box',
}: VerdictBoxProps): React.ReactElement {
  return (
    <div className="verdict-box">
      <div className="verdict-box__header">
        <h2 className="verdict-box__title">{title}</h2>
        {rating && <div className="verdict-box__rating">{rating}</div>}
      </div>

      <p className="verdict-box__summary">{verdict}</p>

      {(pros.length > 0 || cons.length > 0) && (
        <div className="verdict-box__lists">
          {pros.length > 0 && (
            <div className="verdict-box__list verdict-box__list--pros">
              <h3 className="verdict-box__list-title">
                <span className="verdict-box__list-icon" aria-hidden="true">+</span>
                Pros
              </h3>
              <ul>
                {pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </div>
          )}

          {cons.length > 0 && (
            <div className="verdict-box__list verdict-box__list--cons">
              <h3 className="verdict-box__list-title">
                <span className="verdict-box__list-icon" aria-hidden="true">−</span>
                Cons
              </h3>
              <ul>
                {cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="verdict-box__cta">
        {ctaTo ? (
          <Link to={ctaTo} className="cta-link cta-link--button">
            {ctaText}
          </Link>
        ) : (
          <AffiliateLink href={ctaHref} variant="button" location={location}>
            {ctaText}
          </AffiliateLink>
        )}
      </div>
    </div>
  );
}
