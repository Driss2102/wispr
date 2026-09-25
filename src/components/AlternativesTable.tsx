import React, { useId } from 'react';
import Link from '@docusaurus/Link';

interface AltRow {
  /** Competitor name. */
  name: string;
  /** The hook: what this alternative is best for (short, benefit-first). */
  bestFor: string;
  /** The honest trade-off versus Wispr Flow. */
  tradeoff: string;
  /** Internal route to the dedicated "vs" comparison page. */
  to: string;
}

/**
 * Alternatives directory table for the /compare pillar: one row per rival with a
 * hook ("best when you need"), the honest trade-off, and a per-row "Compare"
 * button linking to the dedicated head-to-head guide. Horizontally scrollable on
 * small screens. No affiliate link (these route to internal comparison pages).
 */
export default function AlternativesTable({ rows }: { rows: AltRow[] }): React.ReactElement {
  const captionId = useId();
  return (
    <div className="alt-table-wrap" tabIndex={0} role="region" aria-labelledby={captionId}>
      <span id={captionId} className="sr-only">Wispr Flow alternatives compared, with a link to each full comparison</span>
      <table className="alt-table">
        <colgroup>
          <col className="alt-c-name" />
          <col className="alt-c-best" />
          <col className="alt-c-trade" />
          <col className="alt-c-cta" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Alternative</th>
            <th scope="col">Best when you need…</th>
            <th scope="col">Main trade-off vs Wispr Flow</th>
            <th scope="col">Full comparison</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.to}>
              <th scope="row" className="alt-table__name">{r.name}</th>
              <td>{r.bestFor}</td>
              <td className="alt-table__tradeoff">{r.tradeoff}</td>
              <td className="alt-table__cta">
                <Link to={r.to} className="alt-guide-btn">
                  Compare
                  <span aria-hidden="true"> →</span>
                  <span className="sr-only"> Wispr Flow vs {r.name}</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
