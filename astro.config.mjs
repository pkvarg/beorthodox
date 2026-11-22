// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/consts.ts";
import { isNoindexRoute } from "./src/utils/seo.ts";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !isNoindexRoute(new URL(page).pathname),
    }),
  ],
  fonts: [
    {
      name: "Cinzel",
      cssVariable: "--font-cinzel",
      provider: fontProviders.google(),
      weights: [600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Times New Roman", "serif"],
    },
    {
      name: "Gentium Book Plus",
      cssVariable: "--font-gentium",
      provider: fontProviders.google(),
      weights: [400, 700],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext", "greek"],
      fallbacks: ["Times New Roman", "serif"],
    },
    {
      name: "Gentium Book Phonetic",
      cssVariable: "--font-gentium-phonetic",
      provider: fontProviders.local(),
      fallbacks: [],
      optimizedFallbacks: false,
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/gentium-book-regular.woff2"],
            unicodeRange: ["U+0250-02FF"],
          },
        ],
      },
    },
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/inter-regular.woff2"],
          },
        ],
      },
    },
  ],
  vite: { build: { cssTarget: "safari15.4" } },
});
