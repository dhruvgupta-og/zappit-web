// All editable brand/content configuration lives here.
// Replace placeholder values before launch.

export const SITE_NAME = "Zappit";

export const SITE_DESCRIPTION =
  "Order food from your favourite campus outlets with Zappit. Fast, simple and built for students.";

export const SITE_URL = "https://zappit.shop";

// The single source of truth for the APK download link.
// Every download button/CTA across the site must import this constant.
export const APP_DOWNLOAD_URL = "https://github.com/dhruvgupta-og/zappit-web/releases/download/v1.0.1/ZAPPIT.v1.0.apk";

export const APP_VERSION_LABEL = "v1.0.1";

export const CONTACT_EMAIL = "zappt.shop@gmail.com"; // TODO: replace

export const INSTAGRAM_URL = "#"; // TODO: replace with real profile
export const LINKEDIN_URL = "#"; // TODO: replace with real profile
export const X_URL = "#"; // TODO: replace with real profile

export const PRIVACY_URL = "/privacy";
export const TERMS_URL = "/terms";
export const DOWNLOAD_URL = "/download";

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "How It Works", href: "/#how" },
  { label: "Features", href: "/#features" },
  { label: "App", href: "/#showcase" },
  { label: "FAQ", href: "/#faq" },
];

// Analytics hook — wire this up to GA / Plausible / Mixpanel / PostHog etc.
export function trackDownloadClick(source: string) {
  if (typeof window !== "undefined") {
    // Replace with a real analytics call, e.g. window.gtag('event', 'apk_download', { source })
    console.log("[analytics] zappit_apk_download_click", {
      source,
      url: APP_DOWNLOAD_URL,
      ts: Date.now(),
    });
  }
}
