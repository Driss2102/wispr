import React from 'react';
import { useLocation } from '@docusaurus/router';
import { plainText, schemaScriptId, toAbsoluteUrl, toCanonicalPath } from './schemaUtils';

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  /** Full HowTo name, e.g. "Dictate in Gmail with Wispr Flow". */
  name: string;
  /** The app/surface the guide is about, e.g. "Gmail". Used to build default steps. */
  appName: string;
  /** Override the steps if a page's flow differs from the default dictation flow. */
  steps?: HowToStep[];
}

/**
 * Emits HowTo structured data for a "Use Wispr Flow in [app]" setup guide. Note:
 * Google retired HowTo rich results in 2023, so this is not for a Google rich
 * result; it helps non-Google AI engines (ChatGPT, Perplexity) extract the steps.
 * The default steps describe Wispr Flow's real, app-agnostic dictation flow;
 * pass `steps` to override where a page documents a different process.
 */
export default function HowToSchema({ name, appName, steps }: HowToSchemaProps): React.ReactElement {
  const { pathname } = useLocation();
  const canonicalPath = toCanonicalPath(pathname);
  const pageUrl = toAbsoluteUrl(canonicalPath);

  const app = plainText(appName);
  const defaultSteps: HowToStep[] = [
    {
      name: 'Install Wispr Flow',
      text: 'Install Wispr Flow on your Mac or Windows PC, or add the Wispr Flow keyboard on iPhone or Android.',
    },
    {
      name: `Open ${app} and place your cursor`,
      text: `Open ${app} and click into the text field where you want to write.`,
    },
    {
      name: 'Hold the hotkey and speak',
      text: 'Hold your Wispr Flow hotkey and speak naturally. Wispr Flow adds punctuation and removes filler words automatically.',
    },
    {
      name: 'Review and send',
      text: 'Review the text, then fix any names, numbers, or links by keyboard before you send or save.',
    },
  ];

  const usedSteps = steps && steps.length > 0 ? steps : defaultSteps;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: plainText(name),
    mainEntityOfPage: pageUrl,
    step: usedSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: plainText(s.name),
      text: plainText(s.text),
    })),
  };

  return (
    <script
      id={schemaScriptId('howto', canonicalPath, app)}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
