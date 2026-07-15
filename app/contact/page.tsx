import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Taxxford",
  description: "Get in touch with Taxxford for free consultation on business filings, tax returns, MCA filings, and legal advisor support in Delhi NCR.",
  alternates: {
    canonical: "https://taxxford.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page-main" style={{ background: 'linear-gradient(180deg, #000000 0%, #0d0c08 100%)', color: '#f5ede0', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 5%',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#000000'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="Taxxford Logo" width={120} height={75} style={{ objectFit: 'contain' }} priority />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <Link href="/" style={{ color: '#c9a96e', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }}>
            ← Back to Home
          </Link>
          <a href="https://wa.me/919267906751" target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--green, #3f8c76)',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(63, 140, 118, 0.3)'
          }}>
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <section style={{ padding: '80px 8%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>
          
          {/* Left Column — Contact Info */}
          <div>
            <span style={{ color: '#c9a96e', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 700 }}>Get In Touch</span>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginTop: '15px', marginBottom: '20px' }}>Contact Our Experts</h1>
            <p style={{ color: '#bcaea3', lineHeight: '1.6', marginBottom: '40px', fontSize: '1.05rem' }}>
              Have questions about Private Limited Company registration, GST filing, ITR, or RBI/FEMA compliances? Reach out to our professional advisors. We provide certified assistance for Indian startups and corporations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Telephone */}
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(201, 169, 110, 0.1)', padding: '12px', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>Phone Support</h4>
                  <p style={{ margin: '5px 0 0', color: '#bcaea3' }}>
                    <a href="tel:+919267906751" style={{ color: '#c9a96e' }}>+91-9267906751</a><br />
                    <a href="tel:+917011264702" style={{ color: '#c9a96e' }}>+91-7011264702</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(201, 169, 110, 0.1)', padding: '12px', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>Email Address</h4>
                  <p style={{ margin: '5px 0 0', color: '#bcaea3' }}>
                    <a href="mailto:taxxford@gmail.com" style={{ color: '#c9a96e' }}>taxxford@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Chat on WhatsApp */}
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(201, 169, 110, 0.1)', padding: '12px', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>WhatsApp Support</h4>
                  <p style={{ margin: '5px 0 0', color: '#bcaea3' }}>
                    Quick response: <a href="https://wa.me/919267906751" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a96e', textDecoration: 'underline' }}>+91-9267906751</a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column — Consultation Form Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginTop: 0, marginBottom: '10px' }}>Request Call Back</h3>
            <p style={{ color: '#bcaea3', fontSize: '0.92rem', marginBottom: '30px' }}>Fill out the details below and our lead consultants will reach out to you within 24 hours.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', color: '#c9a96e', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' }}>Your Name</label>
                <input type="text" required placeholder="e.g. Rahul Sharma" style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  outline: 'none'
                }} />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#c9a96e', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' }}>Phone Number</label>
                <input type="tel" required placeholder="e.g. +91 9876543210" style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  outline: 'none'
                }} />
              </div>

              <div>
                <label style={{ display: 'block', color: '#c9a96e', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' }}>Describe your requirement</label>
                <textarea rows={4} placeholder="e.g. Need GST registration and accounting service setup." style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  outline: 'none',
                  resize: 'none'
                }}></textarea>
              </div>

              <button type="submit" style={{
                background: '#c9a96e',
                color: '#1c1209',
                padding: '14px',
                borderRadius: '8px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
                marginTop: '10px'
              }}>
                Submit Consultation Request
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 8%',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        background: '#000000',
        color: '#8c7d6d',
        fontSize: '0.9rem',
        marginTop: '80px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/" style={{ color: '#c9a96e', textDecoration: 'underline', marginRight: '20px' }}>Home</Link>
          <Link href="/about" style={{ color: '#c9a96e', textDecoration: 'underline' }}>About Us</Link>
        </div>
        <div>© 2026 Taxxford. All rights reserved.</div>
      </footer>
    </main>
  );
}
