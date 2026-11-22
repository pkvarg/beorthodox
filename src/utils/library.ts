import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

/** Lists a category's articles in reading order. Used by the library menu and pages. */
export async function getCategoryArticles(
  categorySlug: string,
): Promise<Article[]> {
  const articles = await getCollection(
    "articles",
    ({ data }) => data.category === categorySlug,
  );
  return articles.sort(
    (a, b) =>
      a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}
