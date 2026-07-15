"use client";
import { useState, useEffect, useRef, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

function TypingRotator({ words, speed = 150, delay = 2500 }: { words: string[], speed?: number, delay?: number }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  return (
    <span className="typing-word-active">
      {words[index].substring(0, subIndex)}
    </span>
  );
}

const serviceItems = [
  { name: "Private Limited Company Registration", category: "Startup", slug: "private-limited-company-registration" },
  { name: "One Person Company Registration", category: "Startup", slug: "one-person-company-registration" },
  { name: "Limited Liability Partnership Registration", category: "Startup", slug: "limited-liability-partnership-registration" },
  { name: "Sole Proprietorship Registration", category: "Startup", slug: "sole-proprietorship-registration" },
  { name: "Startup India Registration", category: "Startup", slug: "startup-india-registration" },
  { name: "Series Funding", category: "Startup", slug: "series-funding" },
  { name: "GST Registration", category: "Registration", slug: "gst-registration" },
  { name: "MSME Registration", category: "Registration", slug: "msme-registration" },
  { name: "IEC Registration (Import Export Code)", category: "Registration", slug: "iec-import-export-code" },
  { name: "Partnership Firm Registration", category: "Registration", slug: "partnership-firm-registration" },
  { name: "PAN Card Registration", category: "Registration", slug: "pan" },
  { name: "TAN Registration", category: "Registration", slug: "tan" },
  { name: "12A & 80G Registration", category: "Registration", slug: "12a-and-80g" },
  { name: "80G Registration", category: "Registration", slug: "80g" },
  { name: "12A Registration", category: "Registration", slug: "12a" },
  { name: "GST Return Filing", category: "GST", slug: "gst-return-filing" },
  { name: "GST Cancellation", category: "GST", slug: "gst-registration-cancellation" },
  { name: "Income Tax Return Filing", category: "Income Tax", slug: "income-tax-return-filing" },
  { name: "Tax Audit", category: "Income Tax", slug: "tax-audit" },
  { name: "TDS — Form 26Q", category: "Income Tax", slug: "form-26q-tds-on-non-salary" },
  { name: "TDS — Form 24Q", category: "Income Tax", slug: "form-24q-tds-on-salary" },
  { name: "Income Tax Cases & Notice Resolution", category: "Income Tax", slug: "income-tax-cases" },
  { name: "Annual Return Filing (AOC-4 / MGT-7)", category: "MCA", slug: "annual-return-filing" },
  { name: "Change in Directors", category: "MCA", slug: "change-in-directors" },
  { name: "Change in Registered Address", category: "MCA", slug: "change-in-registered-address" },
  { name: "Increase Authorized Capital", category: "MCA", slug: "increase-authorized-capital" },
  { name: "Company Closure (Strike Off)", category: "MCA", slug: "company-closure" },
  { name: "FC-GPR Form Filing", category: "FEMA", slug: "fc-gpr-form" },
  { name: "FC-TRS Form Filing", category: "FEMA", slug: "fc-trs-form" },
  { name: "FLA Return Filing", category: "FEMA", slug: "fla-form" },
];

function SearchDropdown() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim() === ""
    ? serviceItems
    : serviceItems.filter(s =>
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function pick(item: { name: string; category: string; slug: string }) {
    setSelected(item.name);
    setQuery(item.name);
    setOpen(false);
    if (item.slug) {
      window.location.href = `/service/${item.slug}`;
    }
  }

  return (
    <div className="sd-wrap" ref={wrapRef}>
      <div className="sd-input-row">
        <input
          className="sd-input"
          type="text"
          autoComplete="off"
          placeholder="Search services — GST, MCA, Startup…"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          aria-label="Search services"
        />
        <button className="sd-btn" type="submit" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="search-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
          </svg>
        </button>
      </div>
      {open && filtered.length > 0 && (
        <div className="sd-dropdown" role="listbox">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className={`sd-item${i === 0 ? " sd-item-first" : ""}`}
              role="option"
              onClick={() => pick(item)}
            >
              <span className="sd-name">{item.name}</span>
              <span className="sd-cat">{item.category}</span>
            </div>
          ))}
        </div>
      )}
      <input type="hidden" name="service" value={selected || "General Inquiry"} />
    </div>
  );
}

const navCategories = [
  {
    label: "Startup",
    items: [
      { name: "Private Limited Company", slug: "private-limited-company-registration" },
      { name: "One Person Company", slug: "one-person-company-registration" },
      { name: "LLP Registration", slug: "limited-liability-partnership-registration" },
      { name: "Sole Proprietorship", slug: "sole-proprietorship-registration" },
    ],
  },
  {
    label: "Registration",
    items: [
      { name: "GST Registration", slug: "gst-registration" },
      { name: "MSME Registration", slug: "msme-registration" },
      { name: "IEC Registration", slug: "iec-import-export-code" },
      { name: "Partnership firm Registration", slug: "partnership-firm-registration" },
      { name: "PAN", slug: "pan" },
      { name: "TAN", slug: "tan" },
      { name: "IEC Import Export Code", slug: "iec-import-export-code" },
      { name: "12A & 80G", slug: "12a-and-80g" },
      { name: "80G", slug: "80g" },
      { name: "12A", slug: "12a" },
    ],
  },
  {
    label: "GST",
    items: [
      { name: "GST Registration", slug: "gst-registration" },
      { name: "GST Return Filing", slug: "gst-return-filing" },
      { name: "GST Cancellation", slug: "gst-registration-cancellation" },
    ],
  },
  {
    label: "Income Tax",
    items: [
      { name: "ITR Filing", slug: "income-tax-return-filing" },
      { name: "Tax Audit", slug: "tax-audit" },
      { name: "TDS — Form 26Q", slug: "form-26q-tds-on-non-salary" },
      { name: "TDS — Form 24Q", slug: "form-24q-tds-on-salary" },
      { name: "Income Tax cases", slug: "income-tax-cases" },
    ],
  },
  {
    label: "MCA",
    items: [
      { name: "Company Compliance", slug: "company-compliance" },
      { name: "LLP Compliance", slug: "llp-compliance" },
      { name: "OPC Compliance", slug: "opc-compliance" },
      { name: "Name Change - Company", slug: "name-change-company" },
      { name: "Registered Office Change", slug: "change-in-registered-address" },
      { name: "DIN eKYC Filing", slug: "din-ekyc-filing" },
      { name: "DIN Reactivation", slug: "din-reactivation" },
      { name: "Director Change", slug: "change-in-directors" },
      { name: "Remove Director", slug: "remove-director" },
      { name: "ADT-1 Filing", slug: "adt-1-filing" },
      { name: "DPT-3 Filing", slug: "dpt-3-filing" },
      { name: "Dormant Status Filing", slug: "dormant-status-filing" },
      { name: "MOA Amendment", slug: "amendment-of-moa--aoa" },
      { name: "AOA Amendment", slug: "amendment-of-moa--aoa" },
      { name: "Authorized Capital Increase", slug: "increase-authorized-capital" },
      { name: "Share Transfer", slug: "transfer-of-physical-shares" },
      { name: "Demat of Shares", slug: "demat-of-shares" },
      { name: "Commencement (INC-20A)", slug: "commencement-inc-20a" },
      { name: "Issuance of Debentures", slug: "issuance-of-debentures" },
      { name: "Issuance of Sweat Equity Shares & ESOPs", slug: "issuance-of-sweat-equity-shares-and-esops" },
      { name: "Conversion of Securities", slug: "conversion-of-securities" },
    ],
  },
  {
    label: "FEMA",
    items: [
      { name: "FC-GPR form", slug: "fc-gpr-form" },
      { name: "FC-TRS form", slug: "fc-trs-form" },
      { name: "FLA form", slug: "fla-form" },
    ],
  },
  {
    label: "Series Funding",
    items: [
      { name: "Series Funding", slug: "series-funding" },
    ],
  },
];

const typingServices = [
  "Private Limited Co.",
  "Sole Proprietorship",
  "One Person Company",
  "Limited Liability Partnership",
  "Startup India Registration",
  "GST Registration",
  "GST Return Filing",
  "GST Revocation/Recovery",
  "GST Cancellation",
];

type NavCat = typeof navCategories[0];

function NavDropdownItem({
  cat,
  isOpen,
  onOpen,
  onClose,
  onItemClick,
}: {
  cat: NavCat;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onItemClick: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const columns: NavCat["items"][] = [];
  for (let i = 0; i < cat.items.length; i += 10) {
    columns.push(cat.items.slice(i, i + 10));
  }
  const hasMultipleColumns = columns.length > 1;

  const getDropdownStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = hasMultipleColumns
      ? { flexDirection: "row" as const, gap: "10px" }
      : {};

    if (wrapRef.current && typeof window !== "undefined") {
      const rect = wrapRef.current.getBoundingClientRect();
      const estWidth = Math.max(220, columns.length * 220);
      // Center of trigger
      const midpoint = rect.left + rect.width / 2;
      // Where left edge of dropdown would land with default transform
      const defaultLeft = midpoint - estWidth / 2;
      // Clamp to keep within viewport
      const clampedLeft = Math.max(8, Math.min(defaultLeft, window.innerWidth - estWidth - 8));
      // Compute how much we need to shift relative to the 50% default
      const shiftPx = clampedLeft - defaultLeft;
      if (shiftPx !== 0) {
        return { ...base, transform: `translateX(calc(-50% + ${shiftPx}px))` };
      }
    }
    return base;
  };

  return (
    <div
      ref={wrapRef}
      className="nav-dropdown-wrap"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <span className="nav-text-shiny nav-cat-label">{cat.label}</span>
      {isOpen && (
        <div
          className="nav-mega-dropdown nav-mega-dropdown--open"
          style={getDropdownStyle()}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {columns.map((col, colIndex) => (
            <div key={colIndex} style={{ display: "flex", flexDirection: "column" }}>
              {col.map((item) => (
                <a
                  key={item.slug}
                  href={`/service/${item.slug}`}
                  className="nav-mega-item"
                  onClick={onItemClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveCat, setMobileActiveCat] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <main>
      <div className="site-logo-bar" aria-hidden="true">
        <a href="#top" aria-label="Taxxford home" tabIndex={-1}>
          <Image
            src="/logo.png"
            alt="Taxxford"
            width={320}
            height={200}
            className="logo-bar-img"
            priority
          />
        </a>
      </div>

      <header className={`site-header${menuOpen ? " menu-expanded" : ""}`}>
        <div className="header-top-row">
          <a className="brand mobile-only-brand" href="#top" aria-label="Taxxford home">
            <Image src="/logo.png" alt="Taxxford Logo" width={180} height={110} className="header-logo-img" priority />
          </a>
          <nav className="nav-pill" aria-label="Main navigation">
            {navCategories.map((cat, index) => {
              return (
                <Fragment key={cat.label}>
                  <NavDropdownItem
                    cat={cat}
                    isOpen={activeDropdown === cat.label}
                    onOpen={() => openDropdown(cat.label)}
                    onClose={closeDropdown}
                    onItemClick={() => setActiveDropdown(null)}
                  />
                  {index < navCategories.length - 1 && <span className="nav-divider">|</span>}
                </Fragment>
              );
            })}
          </nav>
          <div className="header-actions" style={{ gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
              {/* Single WhatsApp icon */}
              <a href="https://wa.me/919267906751" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center" }} aria-label="WhatsApp Us">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" style={{ flexShrink: 0 }}>
                  <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* Two numbers stacked */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <a className="phone" href="https://wa.me/919267906751" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", lineHeight: 1.3 }}>
                  <span className="phone-text-shiny">+91-9267906751</span>
                </a>
                <a className="phone" href="https://wa.me/917011264702" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", lineHeight: 1.3 }}>
                  <span className="phone-text-shiny">+91-7011264702</span>
                </a>
              </div>
            </div>
            <a className="discuss" href="#consult">
              Let&apos;s Discuss
            </a>
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>

        <div className="mobile-dropdown">
          <nav className="mobile-dropdown-nav" aria-label="Mobile navigation">
            {navCategories.map((cat) => {
              const isCatOpen = mobileActiveCat === cat.label;
              return (
                <div key={cat.label}>
                  <div
                    className={`mobile-cat-header${isCatOpen ? " active" : ""}`}
                    onClick={() => setMobileActiveCat(isCatOpen ? null : cat.label)}
                  >
                    <span>{cat.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                  {isCatOpen && (
                    <div className="mobile-sub-items">
                      {cat.items.map((item) => (
                        <a
                          key={item.slug}
                          href={`/service/${item.slug}`}
                          onClick={() => setMenuOpen(false)}
                          className="mobile-dropdown-item"
                        >
                          <span>{item.name}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"/>
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <a className="mobile-dropdown-cta" href="#consult" onClick={() => setMenuOpen(false)}>
            Let&apos;s Discuss
          </a>
        </div>
      </header>


      <section className="hero hero-centered" id="top">
        <div className="hero-copy-centered">
          <p className="eyebrow">Legal, tax, and compliance</p>
          <h1 className="hero-title-centered">
            Start Your{" "}
            <span className="word-business">
              {"Business".split("").map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.12}s` }}>
                  {char}
                </span>
              ))}
            </span>
            {" "}with Passion.
            <strong className="type-line">
              Be It <TypingRotator words={typingServices} speed={150} delay={2500} />
            </strong>
          </h1>

          <form className="hero-search-bar" onSubmit={(e) => e.preventDefault()}>
            <SearchDropdown />
          </form>
        </div>
      </section>

      <section className="discovery-section">
        <div className="hero-container">
          <div className="hero-left">
            <h2 className="discovery-heading">
              This isn&apos;t just an invoice.
              <span> It&apos;s your business roadmap.</span>
            </h2>
            <p className="discovery-sub">
              From registration and compliance to financial essentials, Taxxford gives you a clear
              path to start, scale, and grow.
            </p>

            <div className="recommended-services-container">
              <span className="rec-services-label">RECOMMENDED SERVICES</span>
              <div className="rec-services-grid">
                <Link href="/service/private-limited-company-registration" className="service-pill pill-grey">Private Limited Company Registration</Link>
                <Link href="/service/limited-liability-partnership-registration" className="service-pill pill-grey">Limited Liability Partnership Registration</Link>
                <Link href="/service/one-person-company-registration" className="service-pill pill-grey">One Person Company Registration</Link>
                <Link href="/service/sole-proprietorship-registration" className="service-pill pill-grey">Sole Proprietorship Registration</Link>
                <Link href="/service/income-tax-return-filing" className="service-pill pill-gold">Income Tax Return Filing</Link>
                <Link href="/service/annual-return-filing" className="service-pill pill-gold">Annual Return Filing</Link>
                <Link href="/service/gst-registration" className="service-pill pill-gold">GST Registration</Link>
                <Link href="/service/gst-return-filing" className="service-pill pill-gold">GST Return Filing</Link>
                <Link href="/service/change-in-directors" className="service-pill pill-green">Change in Directors</Link>
                <Link href="/service/change-in-registered-address" className="service-pill pill-green">Change in Registered Address</Link>
                <Link href="/service/increase-authorized-capital" className="service-pill pill-green">Increase Authorized Capital</Link>
                <Link href="/service/company-closure" className="service-pill pill-green">Company Closure</Link>
              </div>
            </div>


          </div>

          <div className="hero-right">
            <div className="illustration-wrapper">
              <div className="anim-scene">
                <div className="anim-core">
                  <div className="anim-globe-ring" />
                  <div className="anim-globe-ring anim-globe-ring--2" />
                  <div className="anim-globe-center">
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="anim-globe-svg">
                      <circle cx="40" cy="40" r="36" stroke="#b8963e" strokeWidth="2" opacity="0.6"/>
                      <ellipse cx="40" cy="40" rx="16" ry="36" stroke="#b8963e" strokeWidth="1.5" opacity="0.4"/>
                      <line x1="4" y1="40" x2="76" y2="40" stroke="#b8963e" strokeWidth="1.5" opacity="0.4"/>
                      <line x1="40" y1="4" x2="40" y2="76" stroke="#b8963e" strokeWidth="1" opacity="0.3"/>
                      <path d="M40 20 L48 36 L40 32 L32 36 Z" fill="#b8963e" opacity="0.8"/>
                      <circle cx="40" cy="44" r="8" fill="#b8963e" opacity="0.15" stroke="#b8963e" strokeWidth="1.5"/>
                      <path d="M36 44 L39 47 L44 41" stroke="#b8963e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Orbit 1 – floating label cards */}
                <div className="anim-orbit anim-orbit--1">
                  <div className="anim-label anim-label--advisory">
                    <span className="anim-dot anim-dot--blue" />
                    Advisory
                  </div>
                </div>
                <div className="anim-orbit anim-orbit--2">
                  <div className="anim-label anim-label--reg">
                    <span className="anim-dot anim-dot--green" />
                    Regulations
                  </div>
                </div>
                <div className="anim-orbit anim-orbit--3">
                  <div className="anim-label anim-label--gov">
                    <span className="anim-dot anim-dot--gold" />
                    Governance
                  </div>
                </div>
                <div className="anim-orbit anim-orbit--4">
                  <div className="anim-label anim-label--legal">
                    <span className="anim-dot anim-dot--red" />
                    Legal
                  </div>
                </div>

                {/* Floating mini-cards */}
                <div className="anim-card anim-card--1">
                  <div className="anim-card-lines">
                    <div className="anim-bar anim-bar--short" />
                    <div className="anim-bar anim-bar--medium" />
                    <div className="anim-bar anim-bar--tall" />
                  </div>
                  <div className="anim-card-label">GST Filing</div>
                </div>

                <div className="anim-card anim-card--2">
                  <div className="anim-card-label">Compliant</div>
                  <div className="anim-check">✓</div>
                </div>

                <div className="anim-card anim-card--3">
                  <div className="anim-card-label">MCA Filing</div>
                  <div className="anim-progress-bar">
                    <div className="anim-progress-fill" />
                  </div>
                </div>

                {/* Floating dots */}
                <div className="anim-dot-float anim-dot-float--1" />
                <div className="anim-dot-float anim-dot-float--2" />
                <div className="anim-dot-float anim-dot-float--3" />
                <div className="anim-dot-float anim-dot-float--4" />
                <div className="anim-dot-float anim-dot-float--5" />

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="consult-section" id="consult">

        <div className="consult-card">
          <h2>Request a Free Consultation</h2>
          <p>Get in touch with our experts to start or manage your compliance hassle-free.</p>
          <form 
            className="consult-form" 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const phone = formData.get("phone") as string;
              const message = `Hello, I would like to request a free consultation.\nName: ${name}\nPhone: ${phone}`;
              const whatsappUrl = `https://wa.me/919267906751?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="tel" name="phone" placeholder="Phone Number" required />
            </div>
            <button type="submit" className="submit-btn">Let&apos;s Discuss</button>
          </form>
        </div>
      </section>



      <footer className="footer">
        <div className="footer-links-grid">
          <nav aria-label="Footer Startup">
            <h3>Startup</h3>
            <a href="/service/private-limited-company-registration">Private Limited Co.</a>
            <a href="/service/one-person-company-registration">One Person Company</a>
            <a href="/service/limited-liability-partnership-registration">LLP Registration</a>
            <a href="/service/sole-proprietorship-registration">Sole Proprietorship</a>
            <a href="/service/series-funding">Series Funding</a>
          </nav>
          <nav aria-label="Footer GST">
            <h3>GST</h3>
            <a href="/service/gst-registration">GST Registration</a>
            <a href="/service/gst-return-filing">GST Return Filing</a>
            <a href="/service/gst-registration-cancellation">GST Cancellation</a>
            <a href="/service/annual-return-filing">Annual Return</a>
          </nav>
          <nav aria-label="Footer Income Tax">
            <h3>Income Tax</h3>
            <a href="/service/income-tax-return-filing">ITR Filing</a>
            <a href="/service/tax-audit">Tax Audit</a>
            <a href="/service/statutory-audit">Statutory Audit</a>
            <a href="/service/income-tax-cases">Income Tax Cases</a>
          </nav>
          <nav aria-label="Footer TDS">
            <h3>TDS</h3>
            <a href="/service/form-26q-tds-on-non-salary">Form 26Q</a>
            <a href="/service/form-24q-tds-on-salary">Form 24Q</a>
            <a href="/service/form-26qb-tds-on-property-purchase">Form 26QB</a>
            <a href="/service/form-26qc-tds-on-rent">Form 26QC</a>
          </nav>
          <nav aria-label="Footer MCA">
            <h3>MCA</h3>
            <a href="/service/company-compliance">Company Compliance</a>
            <a href="/service/llp-compliance">LLP Compliance</a>
            <a href="/service/opc-compliance">OPC Compliance</a>
            <a href="/service/name-change-company">Name Change</a>
            <a href="/service/change-in-directors">Change in Directors</a>
            <a href="/service/change-in-registered-address">Change in Address</a>
            <a href="/service/increase-authorized-capital">Auth. Capital</a>
            <a href="/service/company-closure">Company Closure</a>
            <a href="/service/issuance-of-debentures">Issuance of Debentures</a>
            <a href="/service/issuance-of-sweat-equity-shares-and-esops">Sweat Equity &amp; ESOPs</a>
            <a href="/service/conversion-of-securities">Conversion of Securities</a>
          </nav>
          <nav aria-label="Footer Contact">
            <h3>Contact Us</h3>
            <a href="tel:+919267906751" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>Call:</span> +91-9267906751
            </a>
            <a href="tel:+917011264702" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>Call:</span> +91-7011264702
            </a>
            <a href="mailto:taxxford@gmail.com" style={{ textTransform: "none", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>Email:</span> taxxford@gmail.com
            </a>
          </nav>
        </div>
        <div className="disclaimer-container">
          <p className="terms-agree">
            By accessing or using this website, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Refund Policy.
          </p>
          <div className="website-disclaimer">
            <strong>Website Disclaimer:</strong>
            <p>
              This website is owned and operated by Taxxford and is not affiliated with or endorsed by any government agency or authority. We are a private service provider offering assistance with business and compliance needs. Information and forms submitted on this website are not for official government filing and are used only to understand and support your service requests. Fees charged on this website are service or platform fees. All assistance is provided only upon client request, based on the information shared by the user. For security and analytics purposes, we collect user IP addresses along with other submitted information.
            </p>
          </div>
          <div className="footer-bottom-bar">
            <span>© 2026 Taxxford. All rights reserved.</span>
            <div className="bottom-links">
              <Link href="/about">About Us</Link>
              <a href="#consult">Privacy Policy</a>
              <a href="#consult">Terms of Service</a>
              <a href="#consult">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
