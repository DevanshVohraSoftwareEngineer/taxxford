/**
 * Converts a topic detail map key into a URL-safe slug.
 * e.g. "private limited company registration" → "private-limited-company-registration"
 */
export function toSlug(key: string): string {
  return key
    .toLowerCase()
    .trim()
    .replace(/[–—]/g, "-")       // em/en dashes → hyphens
    .replace(/[^a-z0-9\s-]/g, "") // strip special chars
    .replace(/\s+/g, "-");        // spaces → hyphens
}

/**
 * Converts a URL slug back to a lookup key for topicDetailsMap.
 * e.g. "private-limited-company-registration" → "private limited company registration"
 */
export function fromSlug(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .toLowerCase()
    .trim();
}
