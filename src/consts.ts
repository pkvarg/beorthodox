/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Be Orthodox";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Orthodox: holding the right belief. Worship in spirit and in truth.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://preview.lumosframework.com";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-US";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = [
  "/404",
  "/style-guide",
  "/example-components",
];
