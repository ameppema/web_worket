import type { Locale } from './useSiteLocale'

/**
 * Single source of truth for the App Store download link.
 *
 * 👉 To change where the CTA buttons point, edit ONLY the values below.
 */
const APPLE_APP_ID = '6741063302' // Worket — Apple App Store numeric ID
const STORE_COUNTRY = 'es' //          Storefront country (Spain)
const APP_SLUG = 'worket' //           Slug in the listing URL (cosmetic)

// Per-locale display language for the listing (Apple `l` query param).
// Spanish uses the storefront default, so it needs no override.
const LANG_PARAM: Partial<Record<Locale, string>> = {
  en: 'en-GB',
}

/** Reactive App Store URL, localized to the current site locale. */
export const useAppStore = () => {
  const { locale } = useSiteLocale()

  const url = computed(() => {
    const base = `https://apps.apple.com/${STORE_COUNTRY}/app/${APP_SLUG}/id${APPLE_APP_ID}`
    const lang = LANG_PARAM[locale.value]
    return lang ? `${base}?l=${lang}` : base
  })

  return { url }
}
