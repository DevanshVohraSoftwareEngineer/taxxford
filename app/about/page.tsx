import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Taxxford",
  description: "Learn about Taxxford's mission, our team of expert Chartered Accountants, Company Secretaries, and legal professionals helping businesses grow.",
  alternates: {
    canonical: "https://taxxford.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page-main" style={{ background: 'linear-gradient(180deg, #000000 0%, #0d0c08 100%)', color: '#f5ede0', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Dynamic Header */}
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

      {/* Hero Section */}
      <section style={{ padding: '80px 10%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ color: '#c9a96e', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 700 }}>About Taxxford</span>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginTop: '15px', marginBottom: '25px', lineHeight: '1.2' }}>
          Simplifying business, tax, and legal compliance across India.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#bcaea3', lineHeight: '1.6' }}>
          Taxxford is a premium, expert-led platform offering end-to-end tax, legal, and compliance filings. We bring together experienced Chartered Accountants (CAs), Company Secretaries (CSs), and corporate lawyers to help founders, startups, and established enterprises run their operations with zero compliance friction.
        </p>
      </section>

      {/* Our Values Section */}
      <section style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '60px 10%'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '50px', color: '#ffffff' }}>Our Core Pillars</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ color: '#c9a96e', fontSize: '1.25rem', marginBottom: '12px' }}>Professional Expertise</h3>
              <p style={{ color: '#bcaea3', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Every return, registration, and corporate filing is directly overseen by verified, practicing professionals (Chartered Accountants and Company Secretaries) ensuring complete accuracy.
              </p>
            </div>
            <div style={{ padding: '30px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ color: '#c9a96e', fontSize: '1.25rem', marginBottom: '12px' }}>Transparent Pricing</h3>
              <p style={{ color: '#bcaea3', fontSize: '0.95rem', lineHeight: '1.5' }}>
                We believe in transparency. No hidden charges, no surprises. You pay for execution and certified advisory with absolute cost clarity.
              </p>
            </div>
            <div style={{ padding: '30px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ color: '#c9a96e', fontSize: '1.25rem', marginBottom: '12px' }}>Founder-Centric Speed</h3>
              <p style={{ color: '#bcaea3', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Startups need to move fast. From Private Limited incorporation to RBI/FEMA filings for seed rounds, we cut down turnaround times by executing with professional efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: '80px 10%', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '30px' }}>Our Mission</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#bcaea3', fontSize: '1.05rem', lineHeight: '1.7' }}>
          <p>
            Operating a business in India comes with a complex web of compliance requirements across different regulatory bodies (MCA, Income Tax Department, GSTN, RBI, and SEBI). Navigating these channels shouldn&apos;t keep you from focusing on your core product or service.
          </p>
          <p>
            Taxxford acts as your corporate backbone. Whether you need structured advisory on GST, meticulous preparation of annual reports, Merchant Banker/Registered Valuer certificates, or help with FEMA compliance for foreign investments — our platform manages the entire lifecycle.
          </p>
          <p>
            We merge professional practice with technology, making sure you stay 100% compliant, 365 days a year.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 10%',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        background: '#000000',
        color: '#8c7d6d',
        fontSize: '0.9rem'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/" style={{ color: '#c9a96e', textDecoration: 'underline', marginRight: '20px' }}>Home</Link>
          <a href="https://wa.me/919267906751" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a96e', textDecoration: 'underline' }}>Contact support</a>
        </div>
        <div>© 2026 Taxxford. All rights reserved.</div>
      </footer>
    </main>
  );
}
