/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Be Orthodox";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Orthodox: holding the right belief. Worship in spirit and in truth.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://beorthodox.pictusweb.sk";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-US";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = [
  "/404",
  "/style-guide",
  "/example-components",
];
/** Analytics script. Loaded only after the visitor accepts in the consent bar. */
export const ANALYTICS_SCRIPT_URL = "https://analytics.pictusweb.com/script.js";
/** Website id the analytics script reports under. */
export const ANALYTICS_WEBSITE_ID = "3a0b52af-85c1-44d3-8854-6050f3a79312";
