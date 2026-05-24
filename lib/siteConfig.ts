const SITE_ROUTES = {
  designSystem: "/design-system/",
  home: "/",
} as const;

export const siteConfig = {
  defaultDescription:
    "Pilots, airfield operators, and developers building the software that modern general aviation runs on.",
  googleAnalyticsMeasurementId: "G-P9FKTBCREC",
  googleSiteVerification: "8QaH7s2f4FMKc5lIz8GERfJqwo2FYmE8TyzFWciBFbU",
  name: "InnovateGA",
  routes: SITE_ROUTES,
  socialImagePath: "/hero/airfield.jpg",
  url: "https://innovatega.co.uk",
} as const;

/**
 * Builds an absolute site URL from a route or asset path.
 */
export function buildAbsoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
