import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.taxxford.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Taxxford | Chartered Accountant & Legal Services in Delhi",
    template: "%s | Taxxford",
  },
  description:
    "Taxxford provides top-rated Chartered Accountant (CA), Company Secretary (CS), and legal compliance services in Delhi & NCR. Expert tax filing, GST, and startup registrations.",
  keywords: [
    "chartered accountant in delhi",
    "best CA in delhi",
    "legal services in delhi",
    "company secretary in delhi",
    "income tax return filing delhi",
    "startup registration delhi",
    "GST registration delhi",
    "CA firm delhi NCR",
    "chartered accountant",
    "CA services India",
    "company secretary",
    "CS services",
    "legal services India",
    "startup registration",
    "income tax return",
    "ITR filing",
    "GST registration",
    "GST return filing",
    "private limited company registration",
    "LLP registration",
    "MCA compliance",
    "FEMA compliance",
    "tax filing India",
    "business compliance",
    "Taxxford",
    "CA near me",
    "online CA services",
    "startup India",
    "company registration India",
    "annual return filing",
    "ROC compliance",
    "tax audit",
    "TDS filing",
    "best CA in Delhi",
    "Chartered Accountant in Mumbai",
    "top CA firm in Bangalore",
    "online chartered accountant services",
    "tax consultants near me",
    "GST consultants near me",
    "company registration agents",
    "startup legal services",
    "best tax advisor India",
    "bookkeeping and accounting services",
    "corporate compliance service",
    "trademark agents India",
    "RBI FEMA advisory",
    "income tax return advisor",
    "cheapest company registration India",
    "CA near me for tax filing",
  ],
  authors: [{ name: "Taxxford", url: BASE_URL }],
  creator: "Taxxford",
  publisher: "Taxxford",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Taxxford",
    title: "Taxxford | Chartered Accountant & Legal Services in Delhi",
    description:
      "Expert Chartered Accountant, CS & legal compliance services in Delhi & NCR. Trusted by founders and businesses across India.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 500,
        alt: "Taxxford - Legal, Tax & Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxxford | Chartered Accountant & Legal Services in Delhi",
    description:
      "Top CA, CS & legal services in Delhi NCR. Get expert assistance with ITR filing, GST, and startup registration.",
    images: ["/logo.png"],
    creator: "@taxxford",
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  category: "Legal & Financial Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="NfZTAH6j05sTp9mW-obUtSkp6d4hdIFt_QdBUYskZmI" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              name: "Taxxford",
              description:
                "Taxxford provides professional Chartered Accountant, Company Secretary, and legal services in Delhi NCR, including ITR filing, GST, startup registration, and MCA compliance.",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              image: `${BASE_URL}/logo.png`,
              telephone: "+91-9267906751",
              email: "taxxford@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              sameAs: [`https://wa.me/919267906751`],
              serviceType: [
                "Chartered Accountant Services",
                "Company Secretary Services",
                "Income Tax Return Filing",
                "GST Registration and Filing",
                "Startup Registration",
                "Legal Advisory",
                "MCA Compliance",
                "FEMA Compliance",
              ],
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Delhi NCR",
                },
                {
                  "@type": "Country",
                  name: "India",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
