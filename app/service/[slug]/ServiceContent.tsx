"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TopicDetail } from "../../topicDetails";

export default function ServiceContent({ detail }: { detail: TopicDetail }) {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const tabs: { id: string; label: string }[] = [
    { id: "overview", label: "Overview" },
    ...(detail.benefits && detail.benefits.length > 0
      ? [{
          id: "benefits",
          label: detail.benefitsTitle?.toLowerCase().includes("feature")
            ? "Features"
            : detail.benefitsTitle?.toLowerCase().includes("type")
            ? "Types"
            : detail.benefitsTitle?.toLowerCase().includes("service")
            ? "Our Services"
            : "Key Benefits",
        }]
      : []),
    ...(detail.eligibility && detail.eligibility.length > 0
      ? [{
          id: "eligibility",
          label: detail.eligibilityTitle?.toLowerCase().includes("who")
            ? "Who Qualifies"
            : detail.eligibilityTitle?.toLowerCase().includes("applicab")
            ? "Applicability"
            : "Eligibility",
        }]
      : []),
    ...(detail.requirements && detail.requirements.length > 0
      ? [{
          id: "requirements",
          label: detail.requirementsTitle?.toLowerCase().includes("due date")
            ? "Due Dates"
            : detail.requirementsTitle?.toLowerCase().includes("turnover")
            ? "Thresholds"
            : "Requirements",
        }]
      : []),
    ...(detail.documents && detail.documents.length > 0
      ? [{ id: "documents", label: "Documents" }]
      : []),
    ...(detail.process && detail.process.length > 0
      ? [{ id: "process", label: "Process" }]
      : []),
    ...(detail.compliances && detail.compliances.length > 0
      ? [{ id: "compliances", label: "Compliances" }]
      : []),
  ];

  return (
    <main className="sp-page">
      {/* ── Top Navigation ── */}
      <header className="sp-header">
        <Link href="/" className="sp-logo-link" aria-label="Taxxford home">
          <Image
            src="/logo.png"
            alt="Taxxford"
            width={140}
            height={88}
            className="sp-logo-img"
            priority
          />
        </Link>
        <nav className="sp-nav">
          <Link href="/">Home</Link>
          <Link href="/#startup">Startup</Link>
          <Link href="/#gst">GST</Link>
          <Link href="/#income">Income Tax</Link>
          <Link href="/#mca">MCA</Link>
        </nav>
        <a href="/#consult" className="sp-cta-btn">
          Let&apos;s Discuss
        </a>
      </header>

      {/* ── Breadcrumb ── */}
      <div className="sp-breadcrumb">
        <Link href="/">Home</Link>
        <span className="sp-bc-sep">›</span>
        <span>{detail.title}</span>
      </div>

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="sp-hero-inner">
          <p className="sp-eyebrow">Taxxford Services</p>
          <h1 className="sp-hero-title">{detail.title}</h1>
          {detail.subtitle && (
            <p className="sp-hero-subtitle">{detail.subtitle}</p>
          )}
          {detail.timeline && (
            <p className="sp-timeline-badge">{detail.timeline}</p>
          )}
          <a href="/#consult" className="sp-hero-btn">
            Book Free Consultation →
          </a>
        </div>
      </section>

      {/* ── Tab Navigation ── */}
      <div className="sp-tabs-bar">
        <div className="sp-tabs-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`sp-tab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="sp-content">
        <div className="sp-content-inner">

          {/* Overview */}
          {activeTab === "overview" && (
            <div className="sp-pane">
              <p className="sp-intro-text">{detail.intro}</p>
              {detail.definitionTitle && (
                <div className="sp-definition-box">
                  <h2>{detail.definitionTitle}</h2>
                  <p>{detail.definitionText}</p>
                </div>
              )}
              {detail.whyChooseUs && detail.whyChooseUs.length > 0 && (
                <div className="sp-why-box">
                  <h3>Why Choose Us?</h3>
                  <ul className="sp-check-list">
                    {detail.whyChooseUs.map((item, i) => (
                      <li key={i}>
                        <span className="sp-check">✔</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {detail.beyondTitle && detail.beyondItems && (
                <div className="sp-beyond-box">
                  <h3>{detail.beyondTitle}</h3>
                  <ul className="sp-dot-list">
                    {detail.beyondItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="sp-cta-bar">
                <a href="/#consult" className="sp-consult-btn">
                  Book Your Free Consultation Today
                </a>
              </div>
            </div>
          )}

          {/* Benefits */}
          {activeTab === "benefits" && detail.benefits && (
            <div className="sp-pane">
              <h2>{detail.benefitsTitle || "Key Benefits"}</h2>
              <ul className="sp-benefit-list">
                {detail.benefits.map((item, i) => {
                  const parts = item.split(":");
                  if (parts.length > 1) {
                    return (
                      <li key={i} className="sp-benefit-item">
                        <span className="sp-check">✔</span>
                        <span>
                          <strong>{parts[0]}:</strong>
                          {parts.slice(1).join(":")}
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={i} className="sp-benefit-item">
                      <span className="sp-check">✔</span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="sp-cta-bar">
                <a href="/#consult" className="sp-consult-btn">Get Started Today</a>
              </div>
            </div>
          )}

          {/* Eligibility */}
          {activeTab === "eligibility" && detail.eligibility && (
            <div className="sp-pane">
              <h2>{detail.eligibilityTitle || "Eligibility Criteria"}</h2>
              <ul className="sp-plain-list">
                {detail.eligibility.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="sp-cta-bar">
                <a href="/#consult" className="sp-consult-btn">Check Your Eligibility — Free</a>
              </div>
            </div>
          )}

          {/* Requirements */}
          {activeTab === "requirements" && detail.requirements && (
            <div className="sp-pane">
              <h2>{detail.requirementsTitle || "Requirements"}</h2>
              <ul className="sp-plain-list">
                {detail.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="sp-cta-bar">
                <a href="/#consult" className="sp-consult-btn">Talk to an Expert</a>
              </div>
            </div>
          )}

          {/* Documents */}
          {activeTab === "documents" && detail.documents && (
            <div className="sp-pane">
              <h2>{detail.documentsTitle || "Documents Required"}</h2>
              <ul className="sp-plain-list">
                {detail.documents.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="sp-cta-bar">
                <a href="/#consult" className="sp-consult-btn">Get Document Checklist — Free</a>
              </div>
            </div>
          )}

          {/* Process */}
          {activeTab === "process" && detail.process && (
            <div className="sp-pane">
              <h2>{detail.processTitle || "Process"}</h2>
              <ol className="sp-process-list">
                {detail.process.map((item, i) => (
                  <li key={i}>
                    <span className="sp-step-num">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <div className="sp-cta-bar">
                <a href="/#consult" className="sp-consult-btn">Start the Process Today</a>
              </div>
            </div>
          )}

          {/* Compliances */}
          {activeTab === "compliances" && detail.compliances && (
            <div className="sp-pane">
              <h2>{detail.compliancesTitle || "Compliances"}</h2>
              <ul className="sp-plain-list">
                {detail.compliances.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="sp-cta-bar">
                <a href="/#consult" className="sp-consult-btn">Stay Compliant — Book a Call</a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Footer Strip ── */}
      <div className="sp-footer-strip">
        <p>© 2026 Taxxford. All rights reserved.</p>
        <Link href="/">← Back to Home</Link>
      </div>
    </main>
  );
}
