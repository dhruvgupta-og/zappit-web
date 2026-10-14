import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#0B132B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} — Campus Food Delivery`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/zappit/app-icon.png",
  },
  openGraph: {
    title: `${SITE_NAME} — Campus Food Delivery`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: ["/zappit/app-icon.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Campus Food Delivery`,
    description: SITE_DESCRIPTION,
    images: ["/zappit/app-icon.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden bg-bg text-ink-1 selection:bg-orange selection:text-bg">
        {children}
      </body>
    </html>
  );
}
