/**
 * Remark plugin (blog only): inserts an FTC disclosure + the OfferBanner
 * affiliate card into the MIDDLE of every blog post, automatically, so current
 * and future posts get a mid-content CTA with no per-file edits.
 *
 * It inserts before the nearest heading at or after the midpoint of the
 * top-level block nodes, which keeps the card between sections rather than
 * splitting a paragraph. Very short posts (fewer than 4 blocks) are skipped.
 * OfferBanner and DisclosureNotice are registered globally in
 * src/theme/MDXComponents.tsx, so no import node is needed.
 */
export default function blogOfferBanner() {
  return (tree) => {
    const children = tree.children;
    if (!Array.isArray(children) || children.length < 4) return;

    // Don't double-insert if a banner is already present.
    const already = children.some(
      (n) => n.type === 'mdxJsxFlowElement' && n.name === 'OfferBanner',
    );
    if (already) return;

    const mid = Math.floor(children.length / 2);
    let idx = mid;
    for (let i = mid; i < children.length; i++) {
      if (children[i].type === 'heading') {
        idx = i;
        break;
      }
    }

    const disclosure = {
      type: 'mdxJsxFlowElement',
      name: 'DisclosureNotice',
      attributes: [],
      children: [],
    };
    const banner = {
      type: 'mdxJsxFlowElement',
      name: 'OfferBanner',
      attributes: [],
      children: [],
    };

    children.splice(idx, 0, disclosure, banner);
  };
}
