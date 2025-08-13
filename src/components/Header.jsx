import React, { useEffect, useState } from 'react';
import logo from '../assets/lordtech.png';
import Link from 'next/link';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <header
      style={{
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        padding: 0,
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          minHeight: '70px',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <img
            src="assets/lordtech.png"
            alt="logo"
            style={{
              height: '40px',
              width: 'auto',
            }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: '1.6rem',
              color: '#0052cc',
              fontWeight: 700,
            }}
          >
            Lord Journal
          </h1>
        </div>

        {/* Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {['Find a journal', 'Publish with us', 'Track your research', 'Search'].map((item, idx) => (
            <a
              key={idx}
              href="#"
              style={{
                color: '#213547',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => (e.target.style.background = '#f0f4ff')}
              onMouseOut={(e) => (e.target.style.background = 'transparent')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right - Log in */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                style={{
                  color: '#213547',
                  fontWeight: 500,
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Logout
              </button>
              <span role="img" aria-label="lock">🔓</span>
            </>
          ) : (
            <>
              <Link
                href="/login"
                style={{
                  color: '#213547',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Log in
              </Link>
              <span role="img" aria-label="lock">🔐</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

