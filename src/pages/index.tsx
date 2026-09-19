import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { SiGmail, SiGoogledocs, SiNotion, SiClaude, SiCursor, SiObsidian, SiDiscord, SiWhatsapp, SiApple, SiAndroid, SiGooglechrome } from 'react-icons/si';
import { AffiliateLink } from '@site/src/components';
import { WISPR_AFFILIATE_URL } from '@site/src/constants';

/* ---------------------------------------------------------- Hero demo card */
function DictationDemo(): React.ReactElement {
  const bars = [0.35, 0.6, 0.85, 1, 0.7, 0.9, 0.5, 0.78, 0.55, 0.95, 0.62, 0.82, 0.45, 0.72, 0.9, 0.52, 0.75, 0.4, 0.68, 0.58];
  return (
    <div className="hd" aria-hidden="true">
      <div className="hd__chrome">
        <span className="hd__dot" />
        <span className="hd__dot" />
        <span className="hd__dot" />
        <span className="hd__app">any&nbsp;app</span>
      </div>
      <div className="hd__listen">
        <span className="hd__mic">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" />
            <path d="M6 11a6 6 0 0 0 12 0M12 17v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
        <span className="hd__wave">
          {bars.map((h, i) => (
            <span key={i} style={{ ['--h' as string]: h, ['--i' as string]: i }} />
          ))}
        </span>
        <span className="hd__status">listening</span>
      </div>
      <div className="hd__out">
        <span className="hd__typed">Can we move the launch to Friday?</span>
      </div>
      <div className="hd__foot">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        filler removed, punctuation added, typed for you
      </div>
    </div>
  );
}

function HeroSection(): React.ReactElement {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Type at the speed
            <br /> of <span className="hero__mark">speech</span>.
          </h1>
          <p className="hero__lead">
            The independent guide to Wispr Flow, the AI dictation app that turns your voice into
            clean, punctuated text in almost any app. Setup, honest pricing, accuracy, and real
            comparisons.
          </p>
          <div className="hero__cta">
            <AffiliateLink href={WISPR_AFFILIATE_URL} variant="button" className="btn btn--primary" location="home-hero">
              Try Wispr Flow free
            </AffiliateLink>
            <Link to="/docs/review/" className="btn btn--ghost">Read the review</Link>
          </div>
          <p className="hero__note">Free plan, no credit card. Works on Mac, Windows, iPhone and Android.</p>
          <p className="hero__by">
            By Driss Lahbil, software engineer.
            <span className="hero__badge">Independent, not affiliated with Wispr AI</span>
            <span className="hero__badge hero__badge--soft">Facts verified Sep 2026</span>
          </p>
        </div>
        <div className="hero__demo">
          <DictationDemo />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Proof strip */
const INK = 'var(--ifm-color-emphasis-900)';
const proof = [
  { name: 'Gmail', Icon: SiGmail, color: '#EA4335' },
  { name: 'Google Docs', Icon: SiGoogledocs, color: '#4285F4' },
  { name: 'Notion', Icon: SiNotion, color: INK },
  { name: 'Claude', Icon: SiClaude, color: '#D97757' },
  { name: 'Cursor', Icon: SiCursor, color: INK },
  { name: 'Obsidian', Icon: SiObsidian, color: '#7C3AED' },
  { name: 'WhatsApp', Icon: SiWhatsapp, color: '#25D366' },
  { name: 'Discord', Icon: SiDiscord, color: '#5865F2' },
];
function ProofStrip(): React.ReactElement {
  return (
    <section className="proof">
      <div className="shell proof__inner">
        <span className="proof__label">Works right inside the apps you already live in</span>
        <div className="proof__names">
          {proof.map(({ name, Icon, color }) => (
            <span key={name} className="proof__item">
              <Icon className="proof__logo" style={{ color }} aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Free plan band */
function FreePlanBand(): React.ReactElement {
  return (
    <section className="freeband">
      <div className="shell freeband__inner">
        <div className="freeband__lead">
          <h2>
            <span className="freeband__big">2,000 words a week</span>, free.
          </h2>
          <p>
            Roughly eight long emails, or a week of Slack messages, dictated at no cost with no
            credit card. On Android it is unlimited. Enough to know within a day whether talking
            beats typing for you.
          </p>
          <Link to="/docs/review/wispr-flow-free-plan/" className="arrowlink">
            How the free plan really works
          </Link>
        </div>
        <ul className="freeband__facts">
          <li><b>100+</b><span>languages, auto-detected</span></li>
          <li><b>4</b><span>platforms: Mac, Windows, iPhone, Android</span></li>
          <li><b>$0</b><span>to start, no card, no trial clock</span></li>
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- App chooser */
const WinIcon = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="12" rx="1.5" stroke="#fff" strokeWidth="1.8" />
    <path d="M9 21h6M12 17v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const apps = [
  { name: 'Mac', to: '/docs/use/mac/', Icon: SiApple, bg: '#111114' },
  { name: 'Windows', to: '/docs/use/windows/', authored: WinIcon, bg: '#0067C0' },
  { name: 'iPhone', to: '/docs/use/iphone/', Icon: SiApple, bg: '#1c1c1e' },
  { name: 'Android', to: '/docs/use/android/', Icon: SiAndroid, bg: '#3DDC84' },
  { name: 'ChatGPT & Claude', to: '/docs/use/chatgpt/', Icon: SiClaude, bg: '#D97757' },
  { name: 'Cursor & VS Code', to: '/docs/use/cursor/', Icon: SiCursor, bg: '#0B0B0D' },
  { name: 'Gmail', to: '/docs/use/gmail/', Icon: SiGmail, bg: '#EA4335' },
  { name: 'Notion', to: '/docs/use/notion/', Icon: SiNotion, bg: '#0F0F10' },
  { name: 'Google Docs', to: '/docs/use/google-docs/', Icon: SiGoogledocs, bg: '#4285F4' },
  { name: 'Obsidian', to: '/docs/use/obsidian/', Icon: SiObsidian, bg: '#7C3AED' },
  { name: 'WhatsApp', to: '/docs/use/whatsapp/', Icon: SiWhatsapp, bg: '#25D366' },
  { name: 'Any browser', to: '/docs/use/browser/', Icon: SiGooglechrome, bg: '#1A73E8' },
];
function ChooserSection(): React.ReactElement {
  return (
    <section className="sec">
      <div className="shell">
        <div className="sec__head">
          <h2>Where do you want to dictate?</h2>
          <p>Pick your device or app for a step-by-step setup guide. There are 27 in total.</p>
        </div>
        <div className="chooser">
          {apps.map((a) => (
            <Link key={a.name} to={a.to} className="chip-app">
              <span className="chip-app__icon" style={{ background: a.bg }}>
                {a.Icon ? <a.Icon color="#fff" size={22} /> : a.authored}
              </span>
              <span className="chip-app__name">{a.name}</span>
              <span className="chip-app__go" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          ))}
        </div>
        <Link to="/docs/use/" className="arrowlink">See all setup guides</Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ How it works */
const steps = [
  { n: '1', t: 'Install and grant access', d: 'Download the free app for your device and allow it to type into other apps. Two minutes, no card.' },
  { n: '2', t: 'Hold the key and speak', d: 'In any text field, hold your hotkey and talk normally. Pauses, rambles, and self-corrections are fine.' },
  { n: '3', t: 'Clean text appears', d: 'Filler words gone, punctuation added, tone matched to the app. It types the result where your cursor is.' },
];
function HowItWorks(): React.ReactElement {
  return (
    <section className="sec sec--tint">
      <div className="shell">
        <div className="sec__head">
          <h2>From voice to clean text in three steps</h2>
          <p>Wispr Flow sits on top of every app. Set it up once, then dictate anywhere.</p>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n} className="steps__item">
              <span className="steps__n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Decision matrix */
const matrix = {
  cols: ['Wispr Flow', 'Superwhisper', 'Typeless', 'Apple Dictation'],
  rows: [
    { f: 'Free plan', v: ['2,000 words/wk (unlimited on Android)', 'Limited', 'Larger free cap', 'Free, built in'] },
    { f: 'Platforms', v: ['Mac, Win, iOS, Android', 'Mac, Win, iOS', 'Mac, Win', 'Apple only'] },
    { f: 'Auto-cleanup', v: ['Strong', 'Good', 'Aggressive', 'Basic'] },
    { f: 'Offline option', v: ['No (cloud)', 'Yes', 'No', 'On-device'] },
    { f: 'Best when', v: ['You want one polished app everywhere', 'Privacy matters most', 'The free cap decides it', 'You dictate only occasionally'] },
  ],
};
function MatrixSection(): React.ReactElement {
  return (
    <section className="sec">
      <div className="shell">
        <div className="sec__head">
          <h2>Wispr Flow next to the tools you are weighing</h2>
          <p>An honest, at-a-glance read. These comparisons carry no affiliate links.</p>
        </div>
        <div className="matrix-wrap">
          <table className="matrix">
            <thead>
              <tr>
                <th />
                {matrix.cols.map((c, i) => (
                  <th key={c} className={i === 0 ? 'matrix__own' : ''}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.rows.map((r) => (
                <tr key={r.f}>
                  <th scope="row">{r.f}</th>
                  {r.v.map((cell, i) => (
                    <td key={i} className={i === 0 ? 'matrix__own' : ''}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/docs/compare/" className="arrowlink">See all 15 alternatives, compared</Link>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Personas */
const personas = [
  ['Developers', '/docs/for/developers/'], ['Writers', '/docs/for/writers/'], ['Solopreneurs', '/docs/for/solopreneurs/'],
  ['People with RSI', '/docs/for/rsi/'], ['Non-native speakers', '/docs/for/non-native-english-speakers/'],
  ['Students', '/docs/for/students/'], ['Sales teams', '/docs/for/sales/'], ['People with ADHD', '/docs/for/adhd/'],
  ['Executives', '/docs/for/executives/'], ['Dyslexia', '/docs/for/dyslexia/'], ['Customer support', '/docs/for/customer-support/'],
];
function PersonasSection(): React.ReactElement {
  return (
    <section className="sec sec--tint">
      <div className="shell">
        <div className="sec__head">
          <h2>Honest takes on who it is really for</h2>
          <p>Voice fits some workflows far better than others. Find yours, weaknesses named and all.</p>
        </div>
        <div className="tagcloud">
          {personas.map(([label, to]) => (
            <Link key={to} to={to} className="tag">{label}</Link>
          ))}
          <Link to="/docs/for/" className="tag tag--more">all use cases</Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Guides */
const guides = [
  ['What is Wispr Flow?', 'The AI dictation app, in plain English.', '/docs/what-is-wispr-flow/'],
  ['Whisper Flow vs Wispr Flow', 'The name confusion, sorted. Not OpenAI Whisper.', '/docs/guides/whisper-flow-vs-wispr-flow/'],
  ['How to dictate code', 'A realistic voice workflow for developers.', '/docs/guides/dictate-code/'],
  ['Is Wispr Flow worth it?', 'When to pay, and when free is plenty.', '/docs/review/is-wispr-flow-worth-it/'],
];
function GuidesSection(): React.ReactElement {
  return (
    <section className="sec">
      <div className="shell">
        <div className="sec__head">
          <h2>Start with the questions everyone asks</h2>
        </div>
        <div className="guidelist">
          {guides.map(([t, d, to]) => (
            <Link key={to} to={to} className="guiderow">
              <span className="guiderow__t">{t}</span>
              <span className="guiderow__d">{d}</span>
              <span className="guiderow__go" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="15" height="15" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Pricing */
function PricingBand(): React.ReactElement {
  return (
    <section className="sec sec--tint">
      <div className="shell">
        <div className="pband">
          <div>
            <h2>Free to start. Paid when you dictate a lot.</h2>
            <p>
              The free plan is real, not a countdown. When you outgrow the weekly cap, Pro unlocks
              unlimited dictation. Prices vary by region, so we link rather than quote.
            </p>
          </div>
          <div className="pband__cta">
            <AffiliateLink href={WISPR_AFFILIATE_URL} variant="button" className="btn btn--primary" location="home-pricing">
              Try Wispr Flow free
            </AffiliateLink>
            <Link to="/docs/review/wispr-flow-pricing/" className="btn btn--line">See the plans</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- FAQ */
const faqs = [
  ['Is Wispr Flow free?', 'Yes, a permanent free plan with a weekly word cap (unlimited on Android) and no credit card.'],
  ['Is it the same as Whisper Flow?', '"Whisper Flow" is a misspelling of Wispr Flow, and it is not OpenAI\'s Whisper model.'],
  ['What apps does it work in?', 'Almost any text field: Gmail, Slack, Notion, ChatGPT, Claude, Cursor, editors, and more.'],
  ['Does it work on Linux?', 'No native Linux app. It runs on Mac, Windows, iPhone, and Android.'],
];
function FaqSection(): React.ReactElement {
  const schema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  return (
    <section className="sec">
      <div className="shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="sec__head">
          <h2>Questions people ask before trying it</h2>
        </div>
        <dl className="faqgrid">
          {faqs.map(([q, a]) => (
            <div key={q} className="faqgrid__item">
              <dt>{q}</dt>
              <dd>{a}</dd>
            </div>
          ))}
        </dl>
        <Link to="/docs/wispr-flow-faq/" className="arrowlink">Read the full FAQ</Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Blog */
const posts = [
  ['4 min', 'Voice typing vs typing: what actually changes', '/blog/voice-typing-vs-typing/'],
  ['5 min', 'Voice dictation statistics (2026)', '/blog/voice-dictation-statistics/'],
  ['3 min', 'Cloud vs on-device dictation: privacy', '/blog/cloud-vs-on-device-dictation/'],
];
function BlogSection(): React.ReactElement {
  return (
    <section className="sec sec--tint">
      <div className="shell">
        <div className="sec__head">
          <h2>From the blog</h2>
        </div>
        <div className="postgrid">
          {posts.map(([r, t, to]) => (
            <Link key={to} to={to} className="post">
              <span className="post__read">{r} read</span>
              <span className="post__t">{t}</span>
              <span className="post__go">Read<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Final CTA */
function FinalCta(): React.ReactElement {
  return (
    <section className="finalcta">
      <div className="shell finalcta__inner">
        <h2>Dictate your next email instead of typing it.</h2>
        <p>You judge voice in a day of real use, not by reading about it. The free plan makes it easy.</p>
        <div className="hero__cta">
          <AffiliateLink href={WISPR_AFFILIATE_URL} variant="button" className="btn btn--primary btn--onLight" location="home-final-cta">
            Try Wispr Flow free
          </AffiliateLink>
          <Link to="/docs/compare/" className="btn btn--ghost btn--ghostDark">Compare the alternatives</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Wispr Flow Guide: AI Dictation Setup, Pricing & Reviews"
      description="The independent guide to Wispr Flow. Setup guides for Mac, Windows, iPhone and Android, honest reviews, pricing, and comparisons with Superwhisper, Typeless and more."
      wrapperClassName="homepage"
    >
      <main>
        <HeroSection />
        <ProofStrip />
        <FreePlanBand />
        <ChooserSection />
        <HowItWorks />
        <MatrixSection />
        <PersonasSection />
        <GuidesSection />
        <PricingBand />
        <FaqSection />
        <BlogSection />
        <FinalCta />
      </main>
    </Layout>
  );
}
