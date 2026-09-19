import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogListPage';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';

/**
 * Swizzled BlogListPage: adds a small SEO H1 and wraps the post list in
 * `.blog-cards` so each post preview renders as a bordered card (see custom.css).
 */
export default function BlogListPage(props: Props): ReactNode {
  const { metadata, items, sidebar } = props;
  const isFirstPage = !metadata.page || metadata.page === 1;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
      <BlogListPageStructuredData {...props} />
      <BlogLayout sidebar={sidebar}>
        {isFirstPage && (
          <>
            <h1 className="blog-list-page__title">
              Wispr Flow Guide Blog: Voice Dictation, Productivity, and Tips
            </h1>
            <nav className="blog-tag-filter" aria-label="Filter posts by topic">
              <span className="blog-tag-filter__label">Topics</span>
              <Link to="/blog">All</Link>
              <Link to="/blog/tags/dictation/">Dictation</Link>
              <Link to="/blog/tags/productivity/">Productivity</Link>
              <Link to="/blog/tags/voice-typing/">Voice typing</Link>
              <Link to="/blog/tags/developers/">Developers</Link>
              <Link to="/blog/tags/writing/">Writing</Link>
              <Link to="/blog/tags/ai-tools/">AI tools</Link>
            </nav>
          </>
        )}
        <div className="blog-cards">
          <BlogPostItems items={items} />
        </div>
        <BlogListPaginator metadata={metadata} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
