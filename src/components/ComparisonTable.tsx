import React, { useId } from 'react';
import Link from '@docusaurus/Link';
import AffiliateLink from './AffiliateLink';
import { WISPR_AFFILIATE_URL } from '@site/src/constants';

interface ComparisonRow {
  feature: string;
  product: string;
  competitor: string;
}

interface ComparisonTableProps {
  competitorName: string;
  productLabel?: string;
  rows: ComparisonRow[];
  productUrl?: string;
  competitorUrl?: string;
  ctaText?: string;
  /**
   * Internal route (e.g. "/docs/review/"). When set, the table CTA is an
   * internal link instead of an affiliate link. Default on "vs" pages, which
   * must not carry an affiliate link (program rule).
   */
  ctaTo?: string;
}

/** Side-by-side feature table for "Wispr Flow vs X" pages. Horizontally
 *  scrollable on small screens, accessible (caption + scope). */
export default function ComparisonTable({
  competitorName,
  productLabel = 'Wispr Flow',
  rows,
  productUrl = WISPR_AFFILIATE_URL,
  competitorUrl,
  ctaText,
  ctaTo,
}: ComparisonTableProps): React.ReactElement {
  const captionId = useId();
  const helpId = useId();
  const cta = ctaText ?? (ctaTo ? 'Read the Wispr Flow review' : 'Try Wispr Flow free');
  return (
    <div
      className="comparison-table-wrapper"
      tabIndex={0}
      role="region"
      aria-labelledby={captionId}
      aria-describedby={helpId}
    >
      <p id={helpId} className="sr-only">
        This comparison table may scroll horizontally on smaller screens.
      </p>
      <table className="comparison-table">
        <caption id={captionId} className="sr-only">
          {productLabel} versus {competitorName} feature comparison
        </caption>
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col" className="comparison-table__highlight">{productLabel}</th>
            <th scope="col">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <th scope="row">{row.feature}</th>
              <td className="comparison-table__highlight">{row.product}</td>
              <td>{row.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="comparison-table__cta-row">
        {ctaTo ? (
          <Link to={ctaTo} className="cta-link cta-link--button">
            {cta}
          </Link>
        ) : (
          <AffiliateLink href={productUrl} variant="button" location="comparison-table">
            {cta}
          </AffiliateLink>
        )}
        {competitorUrl && (
          <a href={competitorUrl} target="_blank" rel="nofollow noopener noreferrer" className="comparison-table__secondary-cta">
            Visit {competitorName}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}
