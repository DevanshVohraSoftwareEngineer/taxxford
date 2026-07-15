// ── Server Component — no "use client" ────────────────────────────────────────
// In Next.js 15/16, params is a Promise in server components.
// We resolve it here, look up the topic, then render the client component.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { topicDetailsMap, TopicDetail } from "../../topicDetails";
import { fromSlug } from "../../lib/slugify";
import ServiceContent from "./ServiceContent";

const BASE_URL = "https://taxxford.com";

// ── Resolve slug → TopicDetail ─────────────────────────────────────────────────
function resolveDetail(slug: string): TopicDetail | null {
  const key = fromSlug(slug);

  // 1. Direct match
  if (topicDetailsMap[key]) return topicDetailsMap[key];

  // 2. Partial fuzzy match — handles slight differences
  const directPartial = Object.keys(topicDetailsMap).find(
    (k) => k.includes(key) || key.includes(k)
  );
  if (directPartial) return topicDetailsMap[directPartial];

  // 3. Word overlap match — handles reordered words
  const keyWords = key.split(" ").filter((w) => w.length > 3);
  const wordMatch = Object.keys(topicDetailsMap).find((k) =>
    keyWords.some((w) => k.includes(w))
  );
  return wordMatch ? topicDetailsMap[wordMatch] : null;
}

// ── Dynamic per-page SEO metadata ──────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = resolveDetail(slug);
  if (!detail) return {};

  const pageUrl = `${BASE_URL}/service/${slug}`;
  const title = `${detail.title} | Taxxford`;
  const description =
    detail.subtitle ||
    `Expert ${detail.title} services by Taxxford — India's trusted Chartered Accountant and legal compliance platform.`;

  return {
    title,
    description,
    keywords: [
      detail.title,
      "chartered accountant",
      "CA services India",
      "company secretary",
      "legal services India",
      "startup registration",
      "income tax return",
      "ITR filing",
      "GST",
      "MCA compliance",
      "Taxxford",
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Taxxford",
      locale: "en_IN",
      type: "website",
      images: [{ url: "/logo.png", width: 800, height: 500, alt: detail.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}

// ── Page component (server, async) ─────────────────────────────────────────────
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // In Next.js 15+, params is a Promise — must be awaited
  const { slug } = await params;
  const detail = resolveDetail(slug);

  if (!detail) {
    notFound();
  }

  return <ServiceContent detail={detail!} />;
}
