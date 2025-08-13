import React from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

function HeroPage() {
  const cards = [
    { title: 'Discover open access', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop' },
    { title: 'Publish with us', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop' },
    { title: 'Track your research', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
    { title: 'Featured articles and journals', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' },
    { title: 'Browse by subject', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop' },
    { title: 'About Lord Journal Link', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop' },
  ];

  return (
    <div style={{ width: '100vw', overflow: 'hidden' }}>
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <HeroSection />

      {/* CARDS */}
      <CardSection cards={cards} />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0052cc 0%, #007fff 50%, #0052cc 100%)',
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        padding: '120px 20px 40px 20px', 
        minHeight: '100vh',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        padding: '0 20px',
        boxSizing: 'border-box',
      }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
          marginBottom: '1.5rem',
          fontWeight: '700',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}>
          Search for research articles, academic books and more
        </h1>
        <p style={{
          fontSize: '0.95rem',
          marginBottom: '2rem',
          opacity: 0.95,
          maxWidth: '800px',
          margin: '0 auto 2rem auto',
          lineHeight: 1.5,
        }}>
          Access millions of research papers, journals, and academic resources from leading publishers worldwide
        </p>
        <div style={{
          margin: '2rem auto',
          maxWidth: '700px',
          display: 'flex',
          background: '#fff',
          borderRadius: '50px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          alignItems: 'center',
          padding: '0.75rem',
        }}>
          <input
            type="text"
            placeholder="Search articles, journals, authors..."
            style={{
              flex: 1,
              border: 'none',
              padding: '1.25rem 1.5rem',
              fontSize: '0.95rem',
              outline: 'none',
              background: 'transparent',
              color: '#333',
            }}
          />
          <button style={{
            background: '#0052cc',
            color: '#fff',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            borderRadius: '40px',
            cursor: 'pointer',
            fontWeight: '600',
          }}>
            🔍 Search
          </button>
        </div>
        <a
          href="#"
          style={{
            color: '#e3f2fd',
            textDecoration: 'none',
            fontSize: '0.95rem',
            marginTop: '1.5rem',
            display: 'inline-block',
          }}
        >
          Advanced search options
        </a>
      </div>
    </section>
  );
}

function CardSection({ cards }) {
  return (
    <section
      style={{
        background: '#fafbfc',
        width: '100%',
        padding: '80px 20px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a1a1a' }}>Explore Our Services</h2>
        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Discover comprehensive academic resources and tools designed to support your research journey
        </p>
      </div>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
      }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.9,
              }}
            />
            <div style={{
              position: 'relative',
              zIndex: 1,
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '1.5rem',
              margin: '1rem',
              borderRadius: '12px',
            }}>
              <div style={{ color: '#1a1a1a', fontWeight: '600' }}>{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroPage;
