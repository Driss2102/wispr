import React, { type ReactNode } from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof BlogPostItemType>;

/**
 * Passthrough wrapper. The blog's affiliate CTA (an FTC disclosure + the
 * OfferBanner card) is injected into the MIDDLE of each post by the
 * `blogOfferBanner` remark plugin, not appended here at the end.
 */
export default function BlogPostItemWrapper(props: Props): ReactNode {
  return <BlogPostItem {...props} />;
}
