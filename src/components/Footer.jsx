import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: '#0a2a38', color: '#cfd8dc', padding: '60px 20px', width: '100%' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
      }}>
        {/* Column 1 */}
        <div>
          <h4 style={{ color: '#fff' }}>Products</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li>Journals</li>
            <li>Books</li>
            <li>Platforms</li>
            <li>Databases</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h4 style={{ color: '#fff' }}>Researchers & Partners</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li>Authors</li>
            <li>Editors</li>
            <li>Open science</li>
            <li>Societies</li>
            <li>Partners & Affiliates</li>
            <li>Policies</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h4 style={{ color: '#fff' }}>Librarians</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li>Overview</li>
            <li>Products</li>
            <li>Licensing</li>
            <li>Tools & Services</li>
            <li>Account Development</li>
            <li>Blog</li>
            <li>Sales and account contacts</li>
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h4 style={{ color: '#fff' }}>Our Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li>Overview</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Education</li>
            <li>Professional</li>
            <li>Media Centre</li>
            <li>Locations & Contact</li>
          </ul>
        </div>
      </div>
      <div style={{
        marginTop: '40px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '0.9rem',
      }}>
        <div>© 2025 Lord Journal. All rights reserved.</div>
        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          <a href="#" style={{ color: '#cfd8dc', textDecoration: 'none' }}>Terms</a>
          <a href="#" style={{ color: '#cfd8dc', textDecoration: 'none' }}>Privacy</a>
          <a href="Cookies" style={{ color: '#cfd8dc', textDecoration: 'none' }}>Cookies</a>
          <Link href="/accessibility" style={{ color: '#cfd8dc', textDecoration: 'none' }}>Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}