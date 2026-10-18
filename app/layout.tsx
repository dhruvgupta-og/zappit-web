import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#0B132B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Fast Campus Food Delivery | Order Online`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Zappit",
    "Zappit food",
    "campus food delivery",
    "college food app",
    "hostel food order",
    "canteen food delivery",
    "Zappit APK download",
    "order food online campus",
    "quick campus delivery",
  ],
  authors: [{ name: "Zappit", url: SITE_URL }],
  creator: "Zappit",
  publisher: "Zappit",
  category: "Food & Drink",
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/zappit/app-icon.png",
  },
  openGraph: {
    title: `${SITE_NAME} — Fast Campus Food Delivery`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/zappit/app-icon.png",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} - Food Delivery on Campus`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Fast Campus Food Delivery`,
    description: SITE_DESCRIPTION,
    images: ["/zappit/app-icon.png"],
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/zappit/app-icon.png`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "zappt.shop@gmail.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      operatingSystem: "Android",
      applicationCategory: "Food & Drink",
      downloadUrl: `${SITE_URL}/downloads/ZAPPIT.apk`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "250",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden bg-bg text-ink-1 selection:bg-orange selection:text-bg">
        {children}
      </body>
    </html>
  );
}
