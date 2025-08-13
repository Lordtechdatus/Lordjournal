import Head from 'next/head';
import Hero from '../src/components/Hero';
import { useEffect } from 'react';

export default function HomePage() {
  // Handle any client-side effects
  useEffect(() => {
    // Client-side initialization if needed
  }, []);

  return (
    <>
      <Head>
        <title>Lord Journal - Search Research Articles & Academic Resources</title>
        <meta name="description" content="Access millions of research papers, journals, and academic resources from leading publishers worldwide. Search articles, journals, and authors." />
        <meta name="keywords" content="research articles, academic journals, scholarly papers, academic resources, research database" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Lord Journal - Academic Research Platform" />
        <meta property="og:description" content="Search millions of research papers and academic resources" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lordjournal.com" />
        <link rel="canonical" href="https://lordjournal.com" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.ibb.co" />
      </Head>
      
      <Hero />
    </>
  );
}
