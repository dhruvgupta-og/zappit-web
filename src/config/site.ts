/**
 * Zappit — single source of truth for editable brand/content configuration.
 * Replace the placeholder values below with the real production values.
 */

/** TODO: replace with the real Zappit APK URL (e.g. https://zappit.app/downloads/zappit-latest.apk) */
export const APP_DOWNLOAD_URL = "YOUR_ZAPPIT_APK_URL";

export const SITE_NAME = "Zappit";
export const SITE_TAGLINE = "Campus Food Delivery";
export const SITE_DESCRIPTION =
  "Order food from your favourite campus outlets with Zappit. Fast, simple and built for students.";

export const APP_VERSION = "v1.0.0 ";
export const APP_SIZE = "82 MB";
export const APP_PLATFORM = "Android 8.0+";

/** TODO: replace placeholders with real destinations. */
export const CONTACT_EMAIL = "hello@zappit.example";
export const INSTAGRAM_URL = "#instagram-placeholder";
export const LINKEDIN_URL = "#linkedin-placeholder";
export const X_URL = "#x-placeholder";
export const PRIVACY_URL = "/privacy";
export const TERMS_URL = "/terms";

/** Whether the configured APK URL is a real link yet. */
export const isDownloadConfigured = (): boolean =>
  /^https?:\/\//i.test(APP_DOWNLOAD_URL);

/**
 * Analytics-ready CTA tracking hook. Wire this to your analytics provider.
 */
export function trackDownloadClick(location: string): void {
  const payload = { event: "download_cta_click", location, ts: Date.now() };
  try {
    const w = window as unknown as {
      dataLayer?: unknown[];
      zappitAnalytics?: unknown[];
    };
    (w.zappitAnalytics ??= []).push(payload);
    w.dataLayer?.push(payload);
  } catch {
    /* no-op */
  }
  if (import.meta.env.DEV) console.info("[zappit:analytics]", payload);
}
