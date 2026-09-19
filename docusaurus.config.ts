import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { SITE_ORIGIN, WISPR_AFFILIATE_URL } from './src/constants';

const config: Config = {
  title: 'Wispr Flow Guide',
  tagline: 'The independent guide to Wispr Flow — voice dictation setup, pricing, reviews and honest comparisons',
  favicon: 'img/favicon.png',

  url: SITE_ORIGIN,
  baseUrl: '/',
  trailingSlash: true,

  // A broken internal link fails the build (site is in production).
  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Wispr Flow Guide Blog',
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          // Keep utility/thin routes out of the sitemap: the /search page is
          // noindex, and blog tag archives are thin aggregations we noindex.
          ignorePatterns: ['/search/', '/blog/tags/**', '/blog/archive/', '/blog/authors/**', '/page/**'],
        },
        // GA4: add the real Measurement ID at go-live (see HANDOFF.md), e.g.
        // gtag: { trackingID: 'G-XXXXXXXXXX', anonymizeIP: true },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  plugins: [
    // Strip the " | Wispr Flow Guide" site-title suffix from <title> and social
    // titles in the built HTML, so page titles fit fully in search results.
    () => ({
      name: 'strip-site-title-suffix',
      async postBuild({outDir}: {outDir: string}) {
        const {readdir, readFile, writeFile} = require('fs/promises');
        const {join} = require('path');
        const suffix = ' | Wispr Flow Guide';
        const walk = async (dir: string): Promise<void> => {
          for (const entry of await readdir(dir, {withFileTypes: true})) {
            const full = join(dir, entry.name);
            if (entry.isDirectory()) {
              await walk(full);
            } else if (entry.name.endsWith('.html')) {
              const html: string = await readFile(full, 'utf8');
              const next = html
                .split(`${suffix}</title>`)
                .join('</title>')
                .split(`${suffix}"/>`)
                .join('"/>')
                .split(`${suffix}" />`)
                .join('" />');
              if (next !== html) {
                await writeFile(full, next);
              }
            }
          }
        };
        await walk(outDir);
      },
    }),
  ],

  headTags: [
    {
      // Sitewide schema graph: WebSite + Organization. Per-page entities
      // (Review, FAQPage) reference the Organization by @id.
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${SITE_ORIGIN}/#website`,
            name: 'Wispr Flow Guide',
            url: SITE_ORIGIN,
            description: 'The independent guide to Wispr Flow: voice dictation setup, pricing, honest reviews, and comparisons.',
            publisher: { '@id': `${SITE_ORIGIN}/#organization` },
          },
          {
            '@type': 'Organization',
            '@id': `${SITE_ORIGIN}/#organization`,
            name: 'Wispr Flow Guide',
            url: SITE_ORIGIN,
            description: 'An independent guide to Wispr Flow: how to set it up, what it costs, how accurate it is, and how it compares to other dictation tools.',
            founder: {
              '@type': 'Person',
              name: 'Driss Lahbil',
              jobTitle: 'Software engineer',
              url: `${SITE_ORIGIN}/about/`,
            },
          },
        ],
      }),
    },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap',
      },
    },
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'keywords', content: 'wispr flow, whisper flow, wispr flow review, wispr flow pricing, ai dictation, voice to text, wispr flow alternatives, wispr flow vs, voice typing' },
      { name: 'description', content: 'The independent guide to Wispr Flow: setup on Mac, Windows, iPhone and Android, pricing, accuracy, and honest comparisons with Superwhisper, Otter, Typeless and more.' },
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'Wispr Flow Guide - independent guide to Wispr Flow voice dictation',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Guides',
          position: 'left',
          items: [
            { to: '/docs/what-is-wispr-flow/', label: 'What is Wispr Flow?' },
            { to: '/docs/download-wispr-flow/', label: 'Download Wispr Flow' },
            { to: '/docs/use/', label: 'Use Wispr Flow on your apps' },
            { to: '/docs/for/', label: 'Wispr Flow for your use case' },
            { to: '/docs/guides/', label: 'How-to guides' },
          ],
        },
        { to: '/docs/compare/', label: 'Compare', position: 'left' },
        { to: '/docs/review/', label: 'Review', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: WISPR_AFFILIATE_URL,
          label: 'Try Wispr Flow free',
          position: 'right',
          className: 'navbar-cta',
          rel: 'sponsored nofollow noopener noreferrer',
          'aria-label': 'Try Wispr Flow for free, opens in a new tab',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            { label: 'Use Wispr Flow on your apps', to: '/docs/use/' },
            { label: 'Wispr Flow for your use case', to: '/docs/for/' },
            { label: 'How-to guides', to: '/docs/guides/' },
          ],
        },
        {
          title: 'Compare',
          items: [
            { label: 'Wispr Flow alternatives', to: '/docs/compare/' },
            { label: 'Wispr Flow review', to: '/docs/review/' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Affiliate Disclosure', to: '/legal/affiliate-disclosure' },
            { label: 'Privacy Policy', to: '/legal/privacy-policy' },
            { label: 'Terms of Service', to: '/legal/terms-of-service' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wispr Flow Guide. Independent guide, not affiliated with Wispr AI, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
