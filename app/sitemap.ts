import type { MetadataRoute } from "next"
import { CONTACT } from "@/lib/content"
import { TAB_META } from "@/lib/seo"

/** Every tab, as a sitemap entry. */
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(TAB_META).map((m) => {
    const url = new URL(m.path, CONTACT.site).toString()
    return {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: m.path === "/" ? 1 : 0.8,
    }
  })
}
