import Head from 'next/head';
import Accessibility from '../src/components/Accessibility';

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>Accessibility - Lord Journal</title>
        <meta name="description" content="Learn about Lord Journal's commitment to accessibility and inclusive design for all users." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Accessibility - Lord Journal" />
        <meta property="og:description" content="Our commitment to accessibility" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lordjournal.com/accessibility" />
      </Head>
      
      <Accessibility />
    </>
  );
}
