import MDXComponents from '@theme-original/MDXComponents';
import OfferBanner from '@site/src/components/OfferBanner';
import DisclosureNotice from '@site/src/components/DisclosureNotice';

/**
 * Register site components globally so MDX (and injected remark nodes) can use
 * <OfferBanner /> and <DisclosureNotice /> without a per-file import. The blog
 * remark plugin relies on OfferBanner/DisclosureNotice being available here.
 */
export default {
  ...MDXComponents,
  OfferBanner,
  DisclosureNotice,
};
